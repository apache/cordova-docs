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

// constants
var CONFIG_FILES = ["_config.yml", "_defaults.yml"];
var JEKYLL_FLAGS = ["--trace", "--config", CONFIG_FILES.join(",")];

var SOURCE_DIR = "www";
var BUILD_DIR  = "public";

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
gulp.task("default", ["build"], function () {
    gulp.run("serve");
    gulp.run("watch");
});

gulp.task("watch", function () {
    gulp.watch(
        [
            path.join(CSS_SRC_DIR, "**", "*"),
        ],
        ["styles", "regenerate"]
    );
    gulp.watch(
        [
            path.join(DOCS_DIR, "**", "*.md"),
            path.join(DOCS_DIR, "**", "*.html"),
        ],
        ["configs", "regenerate"]
    );
    gulp.watch(
        [
            path.join("**", "*.yml"),
            path.join(SOURCE_DIR, "**", "*.html"),
            path.join(SOURCE_DIR, "**", "*.md"),
            path.join(SOURCE_DIR, "**", "*.js"),
            path.join(CSS_OUT_DIR, "**", "*.css"),
        ],
        ["regenerate"]
    );
});

gulp.task("generate", function (done) {
    exec("C:\\Ruby21\\bin\\jekyll.bat", ["build"].concat(JEKYLL_FLAGS), done);
});

gulp.task("regenerate", ["generate"], function () {
    browsersync.reload();
});

gulp.task("build", ["styles", "configs"], function () {
    gulp.run("generate");
});

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
        .pipe(gulp.dest(CSS_OUT_DIR));
    gulp.src(path.join(CSS_SRC_DIR, "**", "*.css"))
        .pipe(gulp.dest(CSS_OUT_DIR));
    gulp.src(path.join(CSS_SRC_DIR, "**", "*.scss"))
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(CSS_OUT_DIR));
});

// convenience tasks
gulp.task("link-bugs", function (done) {
    exec(bin("linkify-bugs.sh"), [path.join(SOURCE_DIR, "_posts")], done);
});

gulp.task("clean", function () {
    fse.remove(BUILD_DIR);
    fse.remove(path.join(DATA_DIR, "toc", "*.yml"));
    fse.remove(CSS_OUT_DIR);
    fse.remove(LANGUAGES_FILE);
    fse.remove(DEFAULTS_FILE);
});
