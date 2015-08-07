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
            CONFIG_FILE,
            DEFAULTS_FILE,
            path.join(DATA_DIR, "**", "*.yml"),
            path.join(SOURCE_DIR, "**", "*.html"),
            path.join(SOURCE_DIR, "**", "*.md"),
            path.join(SOURCE_DIR, "**", "*.js"),
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

gulp.task("build-dev", ["configs", "styles"], function () {
    gulp.run("gen-dev");
});

gulp.task("gen-prod", function (done) {
    exec("jekyll.bat", ["build"].concat(PROD_FLAGS), done);
});

gulp.task("build-prod", ["configs", "styles"], function (done) {
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
    execPiped("python", [bin("gen_defaults.py"), DOCS_DIR], DEFAULTS_FILE)
        .pipe(gulp.dest("."));
    execPiped("python", [bin("gen_languages.py"), DOCS_DIR], LANGUAGES_FILE)
        .pipe(gulp.dest("."));
    exec("python", [bin("all_toc.py"), DOCS_DIR, DATA_DIR], done);
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

// convenience tasks
gulp.task("link-bugs", function (done) {
    exec(bin("linkify-bugs.sh"), [path.join(SOURCE_DIR, "_posts")], done);
});

gulp.task("clean", function () {
    fse.remove(BUILD_DIR);
    fse.remove(DEPLOY_DIR);
    fse.remove(path.join(DATA_DIR, "toc", "*-generated.yml"));
    fse.remove(CSS_OUT_DIR);
    fse.remove(LANGUAGES_FILE);
    fse.remove(DEFAULTS_FILE);
});
