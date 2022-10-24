'use strict';

// dependencies
var path = require('path');
var fs = require('fs');
var fse = require('fs-extra');
var child_process = require('child_process');

// var gulp = require('gulp');
var gutil = require('gulp-util');
var Less = require('gulp-less');
var Sass = require('gulp-sass')(require('sass'));
var header = require('gulp-header');
var footer = require('gulp-footer');
var rename = require('gulp-rename');
var browsersync = require('browser-sync');
var vstream = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var htmllint = require('gulp-htmllint');
var Crawler = require('simplecrawler');
var ncp = require('ncp');

var nextversion = require('./tools/bin/nextversion');
var util = require('./tools/bin/util');
const gulp = require('gulp');

// constants
var ROOT_DIR = '.';
var CONFIG_DIR = 'conf';
var SOURCE_DIR = path.join(ROOT_DIR, 'www');
var DEV_DIR = path.join(ROOT_DIR, 'build-dev');
var PROD_DIR = path.join(ROOT_DIR, 'build-prod');

var DATA_DIR = path.join(SOURCE_DIR, '_data');
var TOC_DIR = path.join(DATA_DIR, 'toc');
var DOCS_DIR = path.join(SOURCE_DIR, 'docs');
var FETCH_DIR = path.join(DOCS_DIR, 'en', 'dev', 'reference');
var CSS_SRC_DIR = path.join(SOURCE_DIR, 'static', 'css-src');
var CSS_OUT_DIR = path.join(SOURCE_DIR, 'static', 'css');
var JS_DIR = path.join(SOURCE_DIR, 'static', 'js');
var BIN_DIR = path.join(ROOT_DIR, 'tools', 'bin');

var CONFIG_FILE = path.join(CONFIG_DIR, '_config.yml');
var DEFAULTS_CONFIG_FILE = path.join(CONFIG_DIR, '_defaults.yml');
var VERSION_CONFIG_FILE = path.join(CONFIG_DIR, '_version.yml');
var PROD_CONFIG_FILE = path.join(CONFIG_DIR, '_prod.yml');
var DEV_CONFIG_FILE = path.join(CONFIG_DIR, '_dev.yml');
var NODOCS_CONFIG_FILE = path.join(CONFIG_DIR, '_nodocs.yml');

var VERSION_FILE = 'VERSION';
var DOCS_VERSION_FILE = path.join(DATA_DIR, 'docs-versions.yml');
var ALL_PAGES_FILE = path.join(DATA_DIR, 'all-pages.yml');
var FETCH_CONFIG = path.join(DATA_DIR, 'fetched-files.yml');
var REDIRECTS_FILE = path.join(DATA_DIR, 'redirects.yml');

var BASE_CONFIGS = [CONFIG_FILE, DEFAULTS_CONFIG_FILE, VERSION_CONFIG_FILE];
var DEV_CONFIGS = [DEV_CONFIG_FILE];
var PROD_CONFIGS = [PROD_CONFIG_FILE];
var DEV_FLAGS = ['--trace'];
var PROD_FLAGS = [];

var BASE_URL = '';
var YAML_FRONT_MATTER = '---\n---\n';
var WATCH_INTERVAL = 1000; // in milliseconds
var VERSION_VAR_NAME = 'latest_docs_version';
var LATEST_DOCS_VERSION = fs.readFileSync(VERSION_FILE, 'utf-8').trim();
var NEXT_DOCS_VERSION = nextversion.getNextVersion(LATEST_DOCS_VERSION);
var LANGUAGES = util.listdirsSync(DOCS_DIR);

var PROD_BY_DEFAULT = false;

// compute/get/set/adjust passed options
gutil.env.prod = gutil.env.prod || PROD_BY_DEFAULT;
gutil.env.dev = !gutil.env.prod;
gutil.env.outDir = gutil.env.prod ? PROD_DIR : DEV_DIR;

// check for errors
if (gutil.env.prod && gutil.env.nodocs) {
    fatal("can't ignore docs when doing a production build");
}

// helpers
function fatal (message) {
    gutil.log(gutil.colors.red('ERROR') + ': ' + message);
    process.exit(1);
}

function execPiped (command, args, fileName) {
    console.log(command + ' ' + args.join(' '));
    var task = child_process.spawn(command, args);
    return task.stdout.pipe(vstream(fileName)).pipe(buffer());
}

function exec (command, args, cb) {
    console.log(command + ' ' + args.join(' '));
    var task = child_process.spawn(command, args, { stdio: 'inherit' });
    task.on('exit', cb);
}

function bin (name) {
    return path.join(BIN_DIR, name);
}

function remove (path) {
    console.log('removing ' + path);
    fse.removeSync(path);
}

function getBundleExecutable () {
    if (process.platform === 'win32') {
        return 'bundle.bat';
    } else {
        return 'bundle';
    }
}

function getJekyllConfigs () {
    var configs = BASE_CONFIGS;

    // add build-specific config files
    if (gutil.env.prod) {
        configs = configs.concat(PROD_CONFIGS);
    } else {
        configs = configs.concat(DEV_CONFIGS);
    }

    // add a special exclude file if "nodocs" was specified
    if (gutil.env.nodocs) {
        configs = configs.concat(NODOCS_CONFIG_FILE);
    }

    return configs;
}

function jekyllBuild (done) {
    var bundle = getBundleExecutable();
    var configs = getJekyllConfigs();
    var flags = gutil.env.prod ? PROD_FLAGS : DEV_FLAGS;

    flags = flags.concat(['--config', configs.join(',')]);

    exec(bundle, ['exec', 'jekyll', 'build'].concat(flags), done);
}

function copyDocsVersion (oldVersion, newVersion, cb) {
    // copying a folder and a ToC file for each language
    var numCopyOperations = LANGUAGES.length * 2;

    // pseudo-CV (condition variable)
    var numCopied = 0;
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
        var oldVersionDocs = path.join(DOCS_DIR, languageName, oldVersion);
        var oldVersionToc = path.join(TOC_DIR, util.srcTocfileName(languageName, oldVersion));
        var newVersionDocs = path.join(DOCS_DIR, languageName, newVersion);
        var newVersionToc = path.join(TOC_DIR, util.srcTocfileName(languageName, newVersion));

        var copyOptions = {
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
    gutil.log('');
    gutil.log('Tasks:');
    gutil.log('');
    gutil.log('    build         same as configs + data + styles + jekyll');
    gutil.log('    jekyll        build with jekyll');
    gutil.log('    regen         same as jekyll + reload');
    gutil.log('    serve         build the site and open it in a browser');
    gutil.log('    reload        refresh the browser');
    gutil.log('');
    gutil.log('    newversion    create ' + NEXT_DOCS_VERSION + ' docs from dev docs');
    gutil.log('    snapshot      copy dev docs to ' + LATEST_DOCS_VERSION + ' docs');
    gutil.log('');
    gutil.log('    configs       run all the below tasks');
    gutil.log('    defaults      create ' + DEFAULTS_CONFIG_FILE);
    gutil.log('    version       create ' + VERSION_CONFIG_FILE);
    gutil.log('');
    gutil.log('    data          run all the below tasks');
    gutil.log('    docs-versions create ' + DOCS_VERSION_FILE);
    gutil.log('    pages-dict    create ' + ALL_PAGES_FILE);
    gutil.log('    toc           create all generated ToC files in ' + TOC_DIR);
    gutil.log('    fetch         download docs specified in ' + FETCH_CONFIG);
    gutil.log('');
    gutil.log('    styles        run all the below tasks');
    gutil.log('    less          compile all .less files');
    gutil.log('    sass          compile all .scss files');
    gutil.log('    css           copy over all .css files');
    gutil.log('');
    gutil.log('    watch         serve + then watch all source files and regenerate as necessary');
    gutil.log('    link-bugs     replace CB-XXXX references with nice links');
    gutil.log('');
    gutil.log('    help          show this text');
    gutil.log('    clean         remove all generated files and folders');
    gutil.log('');
    gutil.log('Arguments:');
    gutil.log("    --nodocs      don't generate docs");
    gutil.log('    --prod        build for production; without it, will build dev instead');
    gutil.log('');
};

const fetch = module.exports.fetch = function fetch (done) {
    // skip fetching if --nofetch was passed
    if (gutil.env.nofetch) {
        gutil.log(gutil.colors.yellow(
            'Skipping fetching external docs.'));
        done();
        return;
    }

    exec('node', [bin('fetch_docs.js'), '--config', FETCH_CONFIG, '--docsRoot', DOCS_DIR], done);
};

const toc = module.exports.toc = gulp.series(fetch, function toc (done) {
    exec('node', [bin('toc.js'), DOCS_DIR, TOC_DIR], done);
});

const version = module.exports.version = function version () {
    // this code is stupid; it's basically the line:
    //      cat VERSION | sed -e 's/^/VERSION_VAR_NAME: /' > _version.yml
    // however we're in Gulp, and we need to support Windows...
    // so we contort it into a monster
    return gulp.src(VERSION_FILE)
        .pipe(header(VERSION_VAR_NAME + ': '))
        .pipe(footer('\n'))
        .pipe(rename(VERSION_CONFIG_FILE))
        .pipe(gulp.dest('.'));
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
    var args = [
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
        .pipe(header(YAML_FRONT_MATTER))
        .pipe(gulp.dest(CSS_OUT_DIR))
        .pipe(gulp.dest(CSS_OUT_DIR.replace(SOURCE_DIR, gutil.env.outDir)))
        .pipe(browsersync.reload({ stream: true }));
};

const css = module.exports.css = function css () {
    return gulp.src(path.join(CSS_SRC_DIR, '**', '*.css'))
        .pipe(header(YAML_FRONT_MATTER))
        .pipe(gulp.dest(CSS_OUT_DIR))
        .pipe(gulp.dest(CSS_OUT_DIR.replace(SOURCE_DIR, gutil.env.outDir)))
        .pipe(browsersync.reload({ stream: true }));
};

const sass = module.exports.sass = function sass () {
    return gulp.src(path.join(CSS_SRC_DIR, '**', '*.scss'))
        .pipe(Sass().on('error', Sass.logError))
        .pipe(header(YAML_FRONT_MATTER))
        .pipe(gulp.dest(CSS_OUT_DIR))
        .pipe(gulp.dest(CSS_OUT_DIR.replace(SOURCE_DIR, gutil.env.outDir)))
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
    var route = {};

    // set site root for browsersync
    if (gutil.env.prod) {
        route[BASE_URL] = gutil.env.outDir;
    }

    browsersync({
        notify: true,
        server: {
            baseDir: gutil.env.outDir,
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
        var languageLatestDocs = path.join(DOCS_DIR, languageName, LATEST_DOCS_VERSION);
        remove(languageLatestDocs);
    });

    copyDocsVersion('dev', LATEST_DOCS_VERSION, done);
});

module.exports.checklinks = function checkLinks (done) {
    const crawler = new Crawler('http://localhost:3000/');

    crawler.on('fetch404', function (queueItem, response) {
        gutil.log(
            'Resource not found linked from ' +
            queueItem.referrer + ' to', queueItem.url
        );
        gutil.log('Status code: ' + response.statusCode);
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
