'use strict';

// dependencies
const path = require('node:path');
const fs = require('node:fs');
const child_process = require('child_process');
const { styleText } = require('node:util');

const minimist = require('minimist');
const gulp = require('gulp');
const Less = require('gulp-less');
const Sass = require('gulp-sass')(require('sass'));
const browsersync = require('browser-sync');

const vstream = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const htmllint = require('gulp-htmllint');
const Crawler = require('simplecrawler');
const ncp = require('ncp');

const nextversion = require('./tools/bin/nextversion');
const { listdirsSync, srcTocfileName, logger } = require('./tools/bin/util');

const HeaderTransform = require('./tools/HeaderTransform');

const argv = minimist(process.argv.slice(2));

// constants
const ROOT_DIR = '.';
const CONFIG_DIR = 'conf';
const SOURCE_DIR = path.join(ROOT_DIR, 'www');
const DEV_DIR = path.join(ROOT_DIR, 'build-dev');
const PROD_DIR = path.join(ROOT_DIR, 'build-prod');

const DATA_DIR = path.join(SOURCE_DIR, '_data');
const TOC_DIR = path.join(DATA_DIR, 'toc');
const DOCS_DIR = path.join(SOURCE_DIR, 'docs');
const FETCH_DIR = path.join(DOCS_DIR, 'en', 'dev', 'reference');
const CSS_SRC_DIR = path.join(SOURCE_DIR, 'static', 'css-src');
const CSS_OUT_DIR = path.join(SOURCE_DIR, 'static', 'css');
const JS_DIR = path.join(SOURCE_DIR, 'static', 'js');
const BIN_DIR = path.join(ROOT_DIR, 'tools', 'bin');

const CONFIG_FILE = path.join(CONFIG_DIR, '_config.yml');
const DEFAULTS_CONFIG_FILE = path.join(CONFIG_DIR, '_defaults.yml');
const VERSION_CONFIG_FILE = path.join(CONFIG_DIR, '_version.yml');
const PROD_CONFIG_FILE = path.join(CONFIG_DIR, '_prod.yml');
const DEV_CONFIG_FILE = path.join(CONFIG_DIR, '_dev.yml');
const NODOCS_CONFIG_FILE = path.join(CONFIG_DIR, '_nodocs.yml');

const VERSION_FILE = 'VERSION';
const DOCS_VERSION_FILE = path.join(DATA_DIR, 'docs-versions.yml');
const ALL_PAGES_FILE = path.join(DATA_DIR, 'all-pages.yml');
const FETCH_CONFIG = path.join(DATA_DIR, 'fetched-files.yml');
const REDIRECTS_FILE = path.join(DATA_DIR, 'redirects.yml');

const BASE_CONFIGS = [CONFIG_FILE, DEFAULTS_CONFIG_FILE, VERSION_CONFIG_FILE];
const DEV_CONFIGS = [DEV_CONFIG_FILE];
const PROD_CONFIGS = [PROD_CONFIG_FILE];
const DEV_FLAGS = ['--trace'];
const PROD_FLAGS = [];

const BASE_URL = '';
const YAML_FRONT_MATTER = '---\n---\n';
const WATCH_INTERVAL = 1000; // in milliseconds
const VERSION_VAR_NAME = 'latest_docs_version';
const LATEST_DOCS_VERSION = fs.readFileSync(VERSION_FILE, 'utf-8').trim();

// '--bumpCli' flag hat determins if the next version is major CLI or new date release.
const bumpCli = argv.bumpCli || false;
const NEXT_DOCS_VERSION = nextversion.getNextVersion(bumpCli, LATEST_DOCS_VERSION);
const LANGUAGES = listdirsSync(DOCS_DIR);
const PROD_BY_DEFAULT = false;

// compute/get/set/adjust passed options
argv.prod = argv.prod || PROD_BY_DEFAULT;
argv.dev = !argv.prod;
argv.outDir = argv.prod ? PROD_DIR : DEV_DIR;

// check for errors
if (argv.prod && argv.nodocs) {
    fatal("can't ignore docs when doing a production build");
}

// helpers
function fatal (message) {
    logger(styleText(['red'], 'ERROR') + ': ' + message);
    process.exit(1);
}

function execPiped (command, args, fileName) {
    console.log(command + ' ' + args.join(' '));
    const task = child_process.spawn(command, args);
    return task.stdout.pipe(vstream(fileName)).pipe(buffer());
}

function exec (command, args, cb) {
    console.log(command + ' ' + args.join(' '));
    const task = child_process.spawn(command, args, { stdio: 'inherit' });
    task.on('exit', cb);
}

function bin (name) {
    return path.join(BIN_DIR, name);
}

function remove (path) {
    console.log('removing ' + path);
    fs.rmSync(path, { recursive: true, force: true })
}

function getBundleExecutable () {
    if (process.platform === 'win32') {
        return 'bundle.bat';
    } else {
        return 'bundle';
    }
}

function getJekyllConfigs () {
    let configs = BASE_CONFIGS;

    // add build-specific config files
    if (argv.prod) {
        configs = configs.concat(PROD_CONFIGS);
    } else {
        configs = configs.concat(DEV_CONFIGS);
    }

    // add a special exclude file if "nodocs" was specified
    if (argv.nodocs) {
        configs = configs.concat(NODOCS_CONFIG_FILE);
    }

    return configs;
}

function jekyllBuild (done) {
    const bundle = getBundleExecutable();
    const configs = getJekyllConfigs();
    let flags = argv.prod ? PROD_FLAGS : DEV_FLAGS;

    flags = flags.concat(['--config', configs.join(',')]);

    exec(bundle, ['exec', 'jekyll', 'build'].concat(flags), done);
}

function copyDocsVersion (oldVersion, newVersion, cb) {
    // copying a folder and a ToC file for each language
    const numCopyOperations = LANGUAGES.length * 2;

    // pseudo-CV (condition variable)
    let numCopied = 0;
    function doneCopying (error) {
        if (error) {
            cb(error);
            return;
        }

        // call callback if all folders have finished copying
        numCopied += 1;
        if (numCopied === numCopyOperations) {
            cb();
        }
    }

    // create a new version for each language
    LANGUAGES.forEach(function (languageName) {
        // get files to copy
        const oldVersionDocs = path.join(DOCS_DIR, languageName, oldVersion);
        const oldVersionToc = path.join(TOC_DIR, srcTocfileName(languageName, oldVersion));
        const newVersionDocs = path.join(DOCS_DIR, languageName, newVersion);
        const newVersionToc = path.join(TOC_DIR, srcTocfileName(languageName, newVersion));

        const copyOptions = {
            stopOnErr: true
        };

        // copy docs
        console.log(oldVersionDocs + ' -> ' + newVersionDocs);
        ncp.ncp(oldVersionDocs, newVersionDocs, copyOptions, doneCopying);

        // copy ToC
        console.log(oldVersionToc + ' -> ' + newVersionToc);
        ncp.ncp(oldVersionToc, newVersionToc, copyOptions, doneCopying);
    });
}

// tasks

module.exports.help = module.exports.default = function help () {
    logger('');
    logger('Tasks:');
    logger('');
    logger('    build         same as configs + data + styles + jekyll');
    logger('    jekyll        build with jekyll');
    logger('    regen         same as jekyll + reload');
    logger('    serve         build the site and open it in a browser');
    logger('    reload        refresh the browser');
    logger('');
    logger('    newversion    create ' + NEXT_DOCS_VERSION + ' docs from dev docs');
    logger('    snapshot      copy dev docs to ' + LATEST_DOCS_VERSION + ' docs');
    logger('');
    logger('    configs       run all the below tasks');
    logger('    defaults      create ' + DEFAULTS_CONFIG_FILE);
    logger('    version       create ' + VERSION_CONFIG_FILE);
    logger('');
    logger('    data          run all the below tasks');
    logger('    docs-versions create ' + DOCS_VERSION_FILE);
    logger('    pages-dict    create ' + ALL_PAGES_FILE);
    logger('    toc           create all generated ToC files in ' + TOC_DIR);
    logger('    fetch         download docs specified in ' + FETCH_CONFIG);
    logger('');
    logger('    styles        run all the below tasks');
    logger('    less          compile all .less files');
    logger('    sass          compile all .scss files');
    logger('    css           copy over all .css files');
    logger('');
    logger('    watch         serve + then watch all source files and regenerate as necessary');
    logger('    link-bugs     replace CB-XXXX references with nice links');
    logger('');
    logger('    help          show this text');
    logger('    clean         remove all generated files and folders');
    logger('');
    logger('Arguments:');
    logger("    --nodocs      don't generate docs");
    logger('    --prod        build for production; without it, will build dev instead');
    logger('');
};

const fetch = module.exports.fetch = function fetch (done) {
    // skip fetching if --nofetch was passed
    if (argv.nofetch) {
        logger(styleText(['yellow'], 'Skipping fetching external docs.'));
        done();
        return;
    }

    exec('node', [bin('fetch_docs.js'), '--config', FETCH_CONFIG, '--docsRoot', DOCS_DIR], done);
};

const toc = module.exports.toc = gulp.series(fetch, function toc (done) {
    exec('node', [bin('toc.js'), DOCS_DIR, TOC_DIR], done);
});

const version = module.exports.version = function version () {
    return fs.createReadStream(VERSION_FILE)
        .pipe(new HeaderTransform(`${VERSION_VAR_NAME}: `))
        .pipe(fs.createWriteStream(VERSION_CONFIG_FILE));
};

const defaults = module.exports.defaults = function defaults () {
    return execPiped('node', [bin('gen_defaults.js'), DOCS_DIR, LATEST_DOCS_VERSION], DEFAULTS_CONFIG_FILE)
        .pipe(gulp.dest(ROOT_DIR));
};

const docsVersion = module.exports['docs-version'] = function docsVersion () {
    return execPiped('node', [bin('gen_versions.js'), DOCS_DIR], DOCS_VERSION_FILE)
        .pipe(gulp.dest(ROOT_DIR));
};

const pagesDict = module.exports['pages-dict'] = function pagesDict () {
    const args = [
        bin('gen_pages_dict.js'),
        '--siteRoot', SOURCE_DIR,
        '--redirectsFile', REDIRECTS_FILE,
        '--latestVersion', LATEST_DOCS_VERSION,
        '--languages', LANGUAGES.join(',')
    ];

    return execPiped('node', args, ALL_PAGES_FILE).pipe(gulp.dest(ROOT_DIR));
};

module.exports.reload = function reload () {
    browsersync.reload();
};

const jekyll = module.exports.jekyll = function jekyll (done) {
    jekyllBuild(done);
};

module.exports.regen = gulp.series(jekyll, function regen () {
    browsersync.reload();
});

const less = module.exports.less = function less () {
    return gulp.src(path.join(CSS_SRC_DIR, '**', '*.less'))
        .pipe(Less())
        .pipe(new HeaderTransform(YAML_FRONT_MATTER))
        .pipe(gulp.dest(CSS_OUT_DIR))
        .pipe(gulp.dest(CSS_OUT_DIR.replace(SOURCE_DIR, argv.outDir)))
        .pipe(browsersync.reload({ stream: true }));
};

const css = module.exports.css = function css () {
    return gulp.src(path.join(CSS_SRC_DIR, '**', '*.css'))
        .pipe(new HeaderTransform(YAML_FRONT_MATTER))
        .pipe(gulp.dest(CSS_OUT_DIR))
        .pipe(gulp.dest(CSS_OUT_DIR.replace(SOURCE_DIR, argv.outDir)))
        .pipe(browsersync.reload({ stream: true }));
};

const sass = module.exports.sass = function sass () {
    return gulp.src(path.join(CSS_SRC_DIR, '**', '*.scss'))
        .pipe(Sass().on('error', Sass.logError))
        .pipe(new HeaderTransform(YAML_FRONT_MATTER))
        .pipe(gulp.dest(CSS_OUT_DIR))
        .pipe(gulp.dest(CSS_OUT_DIR.replace(SOURCE_DIR, argv.outDir)))
        .pipe(browsersync.reload({ stream: true }));
};

const styles = module.exports.styles = gulp.series(less, css, sass);
const data = module.exports.data = gulp.series(toc, docsVersion, pagesDict);
const configs = module.exports.configs = gulp.series(defaults, version);

const asf = module.exports.asf = function asf () {
    return gulp.src(path.join(ROOT_DIR, '.asf.yaml'))
        .pipe(gulp.dest(path.join(PROD_DIR)));
};

const build = module.exports.build = gulp.series(configs, data, styles, function build (done) {
    jekyllBuild(done);
}, asf);

const serve = module.exports.serve = gulp.series(build, function serve () {
    const route = {};

    // set site root for browsersync
    if (argv.prod) {
        route[BASE_URL] = argv.outDir;
    }

    browsersync({
        notify: true,
        server: {
            baseDir: argv.outDir,
            routes: route
        }
    });
});

module.exports.watch = gulp.series(serve, function watch () {
    gulp.watch(
        [
            path.join(CSS_SRC_DIR, '**', '*')
        ],
        { interval: WATCH_INTERVAL },
        ['styles']
    );
    gulp.watch(
        [
            path.join(ROOT_DIR, '**', '*.yml'),
            path.join(JS_DIR, '**', '*.js'),
            path.join(CSS_OUT_DIR, '**', '*.css'),

            // NOTE:
            //      watch all non-docs HTML, and only docs/en/dev HTML because
            //      versions other than dev usually don't change much; this is
            //      an optimization
            path.join(SOURCE_DIR, '_layouts', '*.html'),
            path.join(SOURCE_DIR, '_includes', '*.html'),
            path.join(SOURCE_DIR, '**', '*.html') + '!' + path.join(DOCS_DIR, '**'),
            path.join(SOURCE_DIR, '**', '*.md') + '!' + path.join(DOCS_DIR, '**'),
            path.join(DOCS_DIR, 'en', 'dev', '**', '*.md'),
            path.join(DOCS_DIR, 'en', 'dev', '**', '*.html')
        ],
        { interval: WATCH_INTERVAL },
        ['regen']
    );
});

// convenience tasks

module.exports['link-bugs'] = function linkBugs (done) {
    exec(bin('linkify-bugs.sh'), [path.join(SOURCE_DIR, '_posts')], done);
};

module.exports.lint = function lint () {
    return gulp.src(path.join('./', '**', '*.html'))
        .pipe(htmllint());
};

module.exports.newversion = gulp.series(fetch, function newVersion (done) {
    if (fs.existsSync(path.join(DOCS_DIR, 'en', NEXT_DOCS_VERSION))) {
        logger(styleText(['red'], '[ERROR] ') + `The targeted docs version ""${NEXT_DOCS_VERSION}"" already exist. Are you trying to update the existing snapshot? Use "npm run update-docs".`);
        process.exit(1);
    }

    copyDocsVersion('dev', NEXT_DOCS_VERSION, function (error) {
        if (error) {
            console.error(error);
            done();
            return;
        }

        // finally update the version file with the new version
        fs.writeFile(VERSION_FILE, NEXT_DOCS_VERSION + '\n', done);
    });
});

module.exports.snapshot = gulp.series(fetch, function snapshot (done) {
    // remove current version first
    LANGUAGES.forEach(function (languageName) {
        const languageLatestDocs = path.join(DOCS_DIR, languageName, LATEST_DOCS_VERSION);
        remove(languageLatestDocs);
    });

    copyDocsVersion('dev', LATEST_DOCS_VERSION, done);
});

module.exports.checklinks = function checkLinks (done) {
    const crawler = new Crawler('http://localhost:3000/');

    crawler.on('fetch404', function (queueItem, response) {
        logger(
            'Resource not found linked from ' +
            queueItem.referrer + ' to', queueItem.url
        );
        logger('Status code: ' + response.statusCode);
    }).on('complete', function () {
        done();
    });

    crawler.start();
};

module.exports.clean = function clean (done) {
    remove(DEV_DIR);
    remove(PROD_DIR);
    remove(FETCH_DIR);
    remove(path.join(DATA_DIR, 'toc', '*-gen.yml'));
    remove(CSS_OUT_DIR);
    remove(DOCS_VERSION_FILE);
    remove(ALL_PAGES_FILE);
    remove(DEFAULTS_CONFIG_FILE);
    remove(VERSION_CONFIG_FILE);
    done();
};
