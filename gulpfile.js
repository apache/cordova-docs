"use strict";

// dependencies
var path          = require("path");
var fse           = require("fs-extra");
var child_process = require("child_process");

var gulp        = require("gulp");
var less        = require("gulp-less");
var sass        = require("gulp-sass");
var vstream     = require("vinyl-source-stream");
var buffer      = require("vinyl-buffer");
var browsersync = require("browser-sync");
var header      = require("gulp-header");

var concat     = require('gulp-concat');
var gutil      = require('gulp-util');
var browserify = require('browserify');
var argv       = require('yargs').argv;
var reactify   = require('reactify');
var uglify     = require('gulp-uglify');
var envify     = require('envify');

// constants
var CONFIG_FILES = ["_config.yml", "_defaults.yml"];
var DEV_FLAGS    = ["--config", CONFIG_FILES.concat(["_dev.yml"]).join(","), "--trace"];
var PROD_FLAGS   = ["--config", CONFIG_FILES.concat(["_prod.yml"]).join(",")];

var SOURCE_DIR = "www";
var BUILD_DIR  = "public";
var DEPLOY_DIR = "deploy";

var WATCH_INTERVAL = 1000; // in milliseconds

var CONFIG_FILE    = "_config.yml";
var DEFAULTS_FILE  = "_defaults.yml";
var DATA_DIR       = path.join(SOURCE_DIR, "_data");
var LANGUAGES_FILE = path.join(DATA_DIR, "languages.yml");
var DOCS_DIR       = path.join(SOURCE_DIR, "docs");
var CSS_SRC_DIR    = path.join(SOURCE_DIR, "static", "css-src");
var CSS_OUT_DIR    = path.join(SOURCE_DIR, "static", "css");
var REACT_SRC_DIR  = path.join(SOURCE_DIR, "static", "react-src");
var REACT_OUT_DIR  = path.join(SOURCE_DIR, "static", "react");
var JS_OUT_DIR     = path.join(SOURCE_DIR, "static", "js")
var BIN_DIR        = path.join("tools", "bin");

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

// tasks
gulp.task("default", ["build-dev"], function () {
    gulp.run("serve");
    gulp.run("watch");
});

gulp.task("watch", function () {
    gulp.watch(
        [
            path.join(CSS_SRC_DIR, "**", "*"),
        ],
        {interval: WATCH_INTERVAL},
        ["styles", "regen-dev"]
    );
    gulp.watch(
        [
            path.join(DOCS_DIR, "**", "*.md"),
            path.join(DOCS_DIR, "**", "*.html"),
        ],
        {interval: WATCH_INTERVAL},
        ["configs", "regen-dev"]
    );
    gulp.watch(
        [
            path.join(REACT_SRC_DIR, "**", "*.js"),
            path.join(REACT_SRC_DIR, "**", "*.jsx"),
            path.join(REACT_SRC_DIR, "**", "*.json"),
        ],
        {interval: WATCH_INTERVAL},
        ["scripts-dev", "regen-dev"]
    );
    gulp.watch(
        [
            "*.yml",
            path.join(DATA_DIR, "**", "*.yml"),
            path.join(SOURCE_DIR, "**", "*.html"),
            path.join(SOURCE_DIR, "**", "*.md"),
            path.join(JS_OUT_DIR, "**", "*.js"),
            path.join(REACT_OUT_DIR, "*.js"),
            path.join(CSS_OUT_DIR, "**", "*.css"),
        ],
        {interval: WATCH_INTERVAL},
        ["regen-dev"]
    );
});

gulp.task("gen-dev", function (done) {
    exec("jekyll.bat", ["build"].concat(DEV_FLAGS), done);
});

gulp.task("regen-dev", ["gen-dev"], function () {
    browsersync.reload();
});

gulp.task("build-dev", ["configs", "styles", "scripts-dev"], function () {
    gulp.run("gen-dev");
});

gulp.task("gen-prod", function (done) {
    exec("jekyll.bat", ["build"].concat(PROD_FLAGS), done);
});

gulp.task("build-prod", ["configs", "styles", "scripts-prod"], function (done) {
    gulp.run("gen-prod");
});

gulp.task("build", ["build-dev"]);
gulp.task("deploy", ["build-prod"]);

gulp.task("serve", function (done) {
    browsersync({
        notify: true,
        server: {
            baseDir: BUILD_DIR
        }
    });
});

gulp.task("configs", function (done) {
    execPiped("node", [bin("gen_defaults.js"), DOCS_DIR], DEFAULTS_FILE)
        .pipe(gulp.dest("."));
    execPiped("node", [bin("gen_languages.js"), DOCS_DIR], LANGUAGES_FILE)
        .pipe(gulp.dest("."));
    exec("node", [bin("toc.js"), DOCS_DIR, DATA_DIR], done);
});

gulp.task("styles", function() {
    gulp.src(path.join(CSS_SRC_DIR, "**", "*.less"))
        .pipe(less())
        .pipe(header("---\n---\n"))
        .pipe(gulp.dest(CSS_OUT_DIR));
    gulp.src(path.join(CSS_SRC_DIR, "**", "*.css"))
        .pipe(header("---\n---\n"))
        .pipe(gulp.dest(CSS_OUT_DIR));
    gulp.src(path.join(CSS_SRC_DIR, "**", "*.scss"))
        .pipe(sass().on("error", sass.logError))
        .pipe(header("---\n---\n"))
        .pipe(gulp.dest(CSS_OUT_DIR));
});

gulp.task("scripts-dev", function() {
    return browserify(path.join(REACT_SRC_DIR, 'app.js'), { debug: true })
        .transform(reactify)
        .transform(envify)
        .bundle()
        .on('error', gutil.log)
        .pipe(vstream('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest(REACT_OUT_DIR));
});

gulp.task("scripts-prod", function() {
    // This is needed for envify to remove debug only code from REACT
    process.env.NODE_ENV = 'production';
    browserify(path.join(REACT_SRC_DIR, 'app.js'), { debug: false })
        .transform(reactify)
        .transform(envify)
        .bundle()
        .on('error', gutil.log)
        .pipe(vstream('app.js'))
        .pipe(buffer())
        .pipe(uglify()) // minify only if not debug build.
        .on('error', gutil.log)
        .pipe(gulp.dest(REACT_OUT_DIR));
});

// convenience tasks
gulp.task("link-bugs", function (done) {
    exec(bin("linkify-bugs.sh"), [path.join(SOURCE_DIR, "_posts")], done);
});

gulp.task("clean", function () {
    fse.remove(BUILD_DIR);
    fse.remove(DEPLOY_DIR);
    fse.remove(path.join(DATA_DIR, "toc", "*-generated.yml"));
    fse.remove(CSS_OUT_DIR);
    fse.remove(REACT_OUT_DIR);
    fse.remove(LANGUAGES_FILE);
    fse.remove(DEFAULTS_FILE);
});
