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
var vstream     = require("vinyl-source-stream");
var buffer      = require("vinyl-buffer");
var browsersync = require("browser-sync");
var header      = require("gulp-header");

var browserify = require("browserify");
var reactify   = require("reactify");
var uglify     = require("gulp-uglify");
var envify     = require("envify");

// constants
var CONFIG_FILES = ["_config.yml", "_defaults.yml"];
var DEV_FLAGS    = ["--config", CONFIG_FILES.concat(["_dev.yml"]).join(","), "--trace"];
var PROD_FLAGS   = ["--config", CONFIG_FILES.concat(["_prod.yml"]).join(",")];

var YAML_FRONT_MATTER = "---\n---\n";
var WATCH_INTERVAL    = 1000; // in milliseconds

var ROOT_DIR   = ".";
var SOURCE_DIR = path.join(ROOT_DIR, "www");
var DEV_DIR    = path.join(ROOT_DIR, "build-dev");
var PROD_DIR   = path.join(ROOT_DIR, "build-prod");

var DATA_DIR         = path.join(SOURCE_DIR, "_data");
var DOCS_DIR         = path.join(SOURCE_DIR, "docs");
var CSS_SRC_DIR      = path.join(SOURCE_DIR, "static", "css-src");
var CSS_OUT_DIR      = path.join(SOURCE_DIR, "static", "css");
var PLUGINS_SRC_DIR  = path.join(SOURCE_DIR, "static", "plugins");
var JS_DIR           = path.join(SOURCE_DIR, "static", "js");
var BIN_DIR          = path.join(ROOT_DIR, "tools", "bin");

var CONFIG_FILE       = path.join(ROOT_DIR, "_config.yml");
var DEFAULTS_FILE     = path.join(ROOT_DIR, "_defaults.yml");
var LANGUAGES_FILE    = path.join(DATA_DIR, "languages.yml");
var PLUGINS_FILE_NAME = "plugins.js";
var PLUGINS_FILE      = path.join(JS_DIR, PLUGINS_FILE_NAME);
var PLUGINS_SRC_FILE  = path.join(PLUGINS_SRC_DIR, "app.js");

// default variables
var prod = false;

// passed options
if (gutil.env.prod) {
    prod = true;
}

// computed variables
var out_dir = prod ? PROD_DIR : DEV_DIR;

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

function jekyllBuild(done) {
    var flags  = prod ? PROD_FLAGS : DEV_FLAGS;
    var jekyll = (process.platform === 'darwin') ? 'jekyll' : 'jekyll.bat';
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
    browsersync({
        notify: true,
        server: {
            baseDir: out_dir
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

gulp.task("defaults", function () {
    return execPiped("node", [bin("gen_defaults.js"), DOCS_DIR], DEFAULTS_FILE)
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
        .pipe(gulp.dest(CSS_OUT_DIR.replace(SOURCE_DIR, out_dir)))
        .pipe(browsersync.reload({stream: true}));
})

gulp.task("css", function () {
    return gulp
        .src(path.join(CSS_SRC_DIR, "**", "*.css"))
        .pipe(header(YAML_FRONT_MATTER))
        .pipe(gulp.dest(CSS_OUT_DIR))
        .pipe(gulp.dest(CSS_OUT_DIR.replace(SOURCE_DIR, out_dir)))
        .pipe(browsersync.reload({stream: true}));
})

gulp.task("sass", function() {
    return gulp
        .src(path.join(CSS_SRC_DIR, "**", "*.scss"))
        .pipe(sass().on("error", sass.logError))
        .pipe(header(YAML_FRONT_MATTER))
        .pipe(gulp.dest(CSS_OUT_DIR))
        .pipe(gulp.dest(CSS_OUT_DIR.replace(SOURCE_DIR, out_dir)))
        .pipe(browsersync.reload({stream: true}));
});

gulp.task("plugins", function() {

    if (prod) {
        process.env.NODE_ENV = "production";
    }

    var stream = browserify(PLUGINS_SRC_FILE, {debug: !prod})
        .transform(reactify)
        .transform(envify)
        .bundle()
        .on("error", gutil.log)
        .pipe(vstream(PLUGINS_FILE_NAME))
        .pipe(buffer());

    if (prod) {
        stream = stream
            .pipe(uglify())
            .on("error", gutil.log);
    }

    return stream

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
gulp.task("configs", ["languages", "defaults"]);
gulp.task("styles", ["less", "css", "sass"]);
gulp.task("build", ["gen-full"]);
gulp.task("default", ["watch"]);

// convenience tasks
gulp.task("link-bugs", function (done) {
    exec(bin("linkify-bugs.sh"), [path.join(SOURCE_DIR, "_posts")], done);
});

gulp.task("clean", function () {
    remove(DEV_DIR);
    remove(PROD_DIR);
    remove(path.join(DATA_DIR, "toc", "*-generated.yml"));
    remove(CSS_OUT_DIR);
    remove(PLUGINS_FILE);
    remove(LANGUAGES_FILE);
    remove(DEFAULTS_FILE);
});
