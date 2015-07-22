"use strict";

// dependencies
var path          = require("path");
var fse           = require("fs-extra");
var child_process = require("child_process");

var gulp        = require("gulp");
var gutil       = require("gulp-util");
var less        = require("gulp-less");
var sass        = require("gulp-sass");
var replace     = require("gulp-replace");
var header      = require("gulp-header");
var footer      = require("gulp-footer");
var rename      = require("gulp-rename");
var browsersync = require("browser-sync");
var vstream     = require("vinyl-source-stream");
var buffer      = require("vinyl-buffer");

var browserify = require("browserify");
var reactify   = require("reactify");
var uglify     = require("gulp-uglify");
var envify     = require("envify");
var htmllint   = require("gulp-htmllint");
var crawler    = require("simplecrawler");

// constants
var ROOT_DIR   = ".";
var SOURCE_DIR = path.join(ROOT_DIR, "www");
var DEV_DIR    = path.join(ROOT_DIR, "build-dev");
var PROD_DIR   = path.join(ROOT_DIR, "build-prod");

var DATA_DIR        = path.join(SOURCE_DIR, "_data");
var TOC_DIR         = path.join(DATA_DIR, "toc");
var DOCS_DIR        = path.join(SOURCE_DIR, "docs");
var CSS_SRC_DIR     = path.join(SOURCE_DIR, "static", "css-src");
var CSS_OUT_DIR     = path.join(SOURCE_DIR, "static", "css");
var PLUGINS_SRC_DIR = path.join(SOURCE_DIR, "static", "plugins");
var JS_DIR          = path.join(SOURCE_DIR, "static", "js");
var BIN_DIR         = path.join(ROOT_DIR, "tools", "bin");

var CONFIG_FILE          = "_config.yml";
var DEFAULTS_CONFIG_FILE = "_defaults.yml";
var VERSION_CONFIG_FILE  = "_version.yml";
var PROD_CONFIG_FILE     = "_prod.yml";
var DEV_CONFIG_FILE      = "_dev.yml";

var VERSION_FILE      = "VERSION";
var LANGUAGES_FILE    = path.join(DATA_DIR, "languages.yml");
var PLUGINS_FILE_NAME = "plugins.js";
var PLUGINS_FILE      = path.join(JS_DIR, PLUGINS_FILE_NAME);
var PLUGINS_SRC_FILE  = path.join(PLUGINS_SRC_DIR, "app.js");

var CONFIG_FILES = [CONFIG_FILE, DEFAULTS_CONFIG_FILE, VERSION_CONFIG_FILE];
var DEV_FLAGS    = ["--config", CONFIG_FILES.concat([DEV_CONFIG_FILE]).join(","), "--trace"];
var PROD_FLAGS   = ["--config", CONFIG_FILES.concat([PROD_CONFIG_FILE]).join(",")];

var BASE_URL          = "";
var YAML_FRONT_MATTER = "---\n---\n";
var WATCH_INTERVAL    = 1000; // in milliseconds
var VERSION_VAR_NAME  = "latest_docs_version";

var PROD_BY_DEFAULT = false;

// compute/get/set/adjust passed options
gutil.env.prod   = gutil.env.prod || PROD_BY_DEFAULT;
gutil.env.dev    = !gutil.env.prod;
gutil.env.outDir = gutil.env.prod ? PROD_DIR : DEV_DIR;

// helpers
function execPiped(command, args, fileName) {
    console.log(command + " " + args.join(" "));
    var task = child_process.spawn(command, args);
    return task.stdout.pipe(vstream(fileName)).pipe(buffer());
}

function exec(command, args, cb) {
    console.log(command + " " + args.join(" "));
    var task = child_process.spawn(command, args, {stdio: "inherit"});
    task.on("exit", cb);
}

function bin(name) {
    return path.join(BIN_DIR, name);
}

function remove(path) {
    console.log("removing " + path);
    fse.removeSync(path);
}

function getJekyllExecutable() {
    if (process.platform === "win32") {
        return "jekyll.bat";
    } else {
        return "jekyll";
    }
}

function jekyllBuild(done) {
    var flags  = gutil.env.prod ? PROD_FLAGS : DEV_FLAGS;
    var jekyll = getJekyllExecutable();
    exec(jekyll, ["build"].concat(flags), done);
}

// tasks
gulp.task("watch", ["serve"], function () {
    gulp.watch(
        [
            path.join(CSS_SRC_DIR, "**", "*"),
        ],
        {interval: WATCH_INTERVAL},
        ["styles"]
    );
    gulp.watch(
        [
            path.join(DOCS_DIR, "**", "*.md"),
            path.join(DOCS_DIR, "**", "*.html"),
        ],
        {interval: WATCH_INTERVAL},
        ["configs"]
    );
    gulp.watch(
        [
            path.join(PLUGINS_SRC_DIR, "**", "*.js"),
            path.join(PLUGINS_SRC_DIR, "**", "*.jsx"),
            path.join(PLUGINS_SRC_DIR, "**", "*.json"),
        ],
        {interval: WATCH_INTERVAL},
        ["plugins"]
    );
    gulp.watch(
        [
            path.join(ROOT_DIR, "**", "*.yml"),
            path.join(SOURCE_DIR, "**", "*.html"),
            path.join(SOURCE_DIR, "**", "*.md"),
            path.join(JS_DIR, "**", "*.js"),
            path.join(CSS_OUT_DIR, "**", "*.css"),
        ],
        {interval: WATCH_INTERVAL},
        ["regen"]
    );
});

gulp.task("serve", ["build"], function () {
    var route = {};
    if(gutil.env.prod) {
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

gulp.task("gen-full", ["configs", "styles", "plugins"], function (done) {
    jekyllBuild(done);
});

gulp.task("gen-only", function (done) {
    jekyllBuild(done);
});

gulp.task("regen", ["gen-only"], function () {
    browsersync.reload();
});

gulp.task("reload", function () {
    browsersync.reload();
});

gulp.task("languages", function () {
    return execPiped("node", [bin("gen_languages.js"), DOCS_DIR], LANGUAGES_FILE)
        .pipe(gulp.dest(ROOT_DIR));
});

gulp.task("version", function () {
    // this code is stupid; it's basically the line:
    //      cat VERSION | sed -e 's/^/latest_docs_version: /' > _version.yml
    // however we're in Gulp, and on Windows... so we contort it into a monster
    return gulp
        .src(VERSION_FILE)
        .pipe(header(VERSION_VAR_NAME + ": "))
        .pipe(footer("\n"))
        .pipe(rename(VERSION_CONFIG_FILE))
        .pipe(gulp.dest("."));
});

gulp.task("defaults", function () {
    return execPiped("node", [bin("gen_defaults.js"), DOCS_DIR], DEFAULTS_CONFIG_FILE)
        .pipe(gulp.dest(ROOT_DIR));
});

gulp.task("toc", function (done) {
    exec("node", [bin("toc.js"), DOCS_DIR, DATA_DIR], done);
});

gulp.task("less", function () {
    return gulp
        .src(path.join(CSS_SRC_DIR, "**", "*.less"))
        .pipe(less())
        .pipe(header(YAML_FRONT_MATTER))
        .pipe(gulp.dest(CSS_OUT_DIR))
        .pipe(gulp.dest(CSS_OUT_DIR.replace(SOURCE_DIR, gutil.env.outDir)))
        .pipe(browsersync.reload({stream: true}));
})

gulp.task("css", function () {
    return gulp
        .src(path.join(CSS_SRC_DIR, "**", "*.css"))
        .pipe(header(YAML_FRONT_MATTER))
        .pipe(gulp.dest(CSS_OUT_DIR))
        .pipe(gulp.dest(CSS_OUT_DIR.replace(SOURCE_DIR, gutil.env.outDir)))
        .pipe(browsersync.reload({stream: true}));
})

gulp.task("sass", function() {
    return gulp
        .src(path.join(CSS_SRC_DIR, "**", "*.scss"))
        .pipe(sass().on("error", sass.logError))
        .pipe(header(YAML_FRONT_MATTER))
        .pipe(gulp.dest(CSS_OUT_DIR))
        .pipe(gulp.dest(CSS_OUT_DIR.replace(SOURCE_DIR, gutil.env.outDir)))
        .pipe(browsersync.reload({stream: true}));
});

gulp.task("plugins", function() {
    if (gutil.env.prod) {
        process.env.NODE_ENV = "production";
    }

    var stream = browserify(PLUGINS_SRC_FILE, {debug: !gutil.env.prod})
        .transform(reactify)
        .transform(envify)
        .bundle()
        .on("error", gutil.log)
        .pipe(vstream(PLUGINS_FILE_NAME))
        .pipe(buffer());

    if (gutil.env.prod) {
        stream = stream
            .pipe(uglify())
            .on("error", gutil.log);
    }

    return stream
        .pipe(gulp.dest(JS_DIR.replace(SOURCE_DIR, gutil.env.outDir)))
        .pipe(browsersync.reload({stream: true}))
        // NOTE:
        //      adding YAML front matter at the end
        //      so that uglify doesn't screw it up
        .pipe(header(YAML_FRONT_MATTER))

        // WORKAOUND:
        //           minified JS has some things that look like
        //           Liquid tags, so we replace them manually
        .pipe(replace("){{", "){ {"))
        .pipe(gulp.dest(JS_DIR));
});

// compound tasks
gulp.task("configs", ["toc", "languages", "defaults", "version"]);
gulp.task("styles", ["less", "css", "sass"]);
gulp.task("build", ["gen-full"]);
gulp.task("default", ["watch"]);

// convenience tasks
gulp.task("link-bugs", function (done) {
    exec(bin("linkify-bugs.sh"), [path.join(SOURCE_DIR, "_posts")], done);
});

gulp.task("lint", function() {
    return gulp.src(path.join("./", "**", "*.html"))
        .pipe(htmllint());
});

gulp.task("newversion", function(done) {

    if (!gutil.env.version) {
        gutil.log(gutil.colors.red("No version given."));
        gutil.log("Specify new version with '--version X.X.X'.");
        gutil.log("(Optionally) Specify language with '--language YY'.");
        done();
        return;
    }

    var args = [bin("incrementversion.js"), DOCS_DIR, TOC_DIR, gutil.env.version];

    if (gutil.env.language) {
        args.push(gutil.env.language);
    }

    exec("node", args, done);
});

gulp.task("checklinks", function(done) {
    crawler
        .crawl("http://localhost:3000/")
        .on("fetch404", function(queueItem, response) {
            gutil.log(
                "Resource not found linked from " +
                queueItem.referrer + " to", queueItem.url
            );
            gutil.log("Status code: " + response.statusCode);
        })
        .on("complete", function(queueItem) {
            done();
        });
});

gulp.task("clean", function () {
    remove(DEV_DIR);
    remove(PROD_DIR);
    remove(path.join(DATA_DIR, "toc", "*-generated.yml"));
    remove(CSS_OUT_DIR);
    remove(PLUGINS_FILE);
    remove(LANGUAGES_FILE);
    remove(DEFAULTS_CONFIG_FILE);
    remove(VERSION_CONFIG_FILE);
});
