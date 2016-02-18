# Function Reference:
# 	https://www.gnu.org/software/make/manual/html_node/Text-Functions.html
#  	https://www.gnu.org/software/make/manual/html_node/File-Name-Functions.html
# Variable Reference:
# 	https://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html

# Makefile's own config
ifeq ($(OS),Windows_NT)
WINDOWS=1
endif

ifdef WINDOWS
SHELL  = cmd
JEKYLL = bundle.bat exec jekyll
MKDIRP = mkdir
else
SHELL  = sh
JEKYLL = bundle exec jekyll
MKDIRP = mkdir -p
endif

# constants
EMPTY =
SPACE = $(EMPTY) $(EMPTY)
COMMA = ,

VERSION_VAR_NAME = latest_docs_version

# paths and files
BIN_DIR      = tools/bin
NODE_BIN_DIR = ./node_modules/.bin

SRC_DIR    = www
DEV_DIR    = build-dev
PROD_DIR   = build-prod
CONFIG_DIR = conf

DOCS_DIR         = $(SRC_DIR)/docs
FETCH_DIR        = $(DOCS_DIR)/en/dev/gen
DATA_DIR         = $(SRC_DIR)/_data
TOC_DIR          = $(DATA_DIR)/toc
STATIC_DIR       = $(SRC_DIR)/static
CSS_SRC_DIR      = $(STATIC_DIR)/css-src
CSS_DEST_DIR     = $(STATIC_DIR)/css
PLUGINS_SRC_DIR  = $(STATIC_DIR)/plugins
PLUGINS_DEST_DIR = $(STATIC_DIR)/js

# executables
NODE       = node
GULP       = $(NODE_BIN_DIR)/gulp
LESSC      = $(NODE_BIN_DIR)/lessc
SASSC      = $(NODE_BIN_DIR)/node-sass
BROWSERIFY = $(NODE_BIN_DIR)/browserify
UGLIFY     = $(NODE_BIN_DIR)/uglifyjs

# replace slashes in executables on Windows
ifdef WINDOWS
GULP       := $(subst /,\,$(GULP))
LESSC      := $(subst /,\,$(LESSC))
SASSC      := $(subst /,\,$(SASSC))
BROWSERIFY := $(subst /,\,$(BROWSERIFY))
UGLIFY     := $(subst /,\,$(UGLIFY))
endif

# existing files
MAIN_CONFIG         = $(CONFIG_DIR)/_config.yml
DEV_CONFIG          = $(CONFIG_DIR)/_dev.yml
PROD_CONFIG         = $(CONFIG_DIR)/_prod.yml
DOCS_EXCLUDE_CONFIG = $(CONFIG_DIR)/_nodocs.yml
FETCH_CONFIG        = $(DATA_DIR)/fetched-files.yml
PLUGINS_SRC         = $(PLUGINS_SRC_DIR)/app.js
VERSION_FILE        = VERSION

# NOTE:
#      the .scss files are separate because they combine into MAIN_STYLE_FILE,
#      which includes them on its own, and the SCSS compiler takes care of them;
#      because of this, there is also no .scss -> .css pattern rule
ifdef WINDOWS
SCSS_SRC   = $(shell cd $(CSS_SRC_DIR) && dir *.scss /S /B)
STYLES_SRC = $(shell cd $(CSS_SRC_DIR) && dir *.less *.css /S /B)
else
SCSS_SRC   = $(shell find $(CSS_SRC_DIR) -name "*.scss")
STYLES_SRC = $(shell find $(CSS_SRC_DIR) -name "*.less" -or -name "*.css")
endif

# generated files
VERSION_CONFIG    = $(CONFIG_DIR)/_version.yml
DEFAULTS_CONFIG   = $(CONFIG_DIR)/_defaults.yml
DOCS_VERSION_DATA = $(DATA_DIR)/docs-versions.yml
PLUGINS_APP       = $(PLUGINS_DEST_DIR)/plugins.js
MAIN_STYLE_FILE   = $(CSS_DEST_DIR)/main.css

STYLES = $(MAIN_STYLE_FILE) $(addsuffix .css,$(basename $(subst $(CSS_SRC_DIR),$(CSS_DEST_DIR),$(STYLES_SRC))))

# NOTE:
#      docs slugs are lang/version pairs, with "/" and "." replaced by "-"
DOCS_VERSION_DIRS  = $(filter-out %.md,$(wildcard $(DOCS_DIR)/**/*))
DOCS_VERSION_SLUGS = $(subst /,-,$(subst .,-,$(subst $(DOCS_DIR)/,,$(DOCS_VERSION_DIRS))))
TOC_FILES          = $(addprefix $(TOC_DIR)/,$(addsuffix -generated.yml,$(DOCS_VERSION_SLUGS)))

# variables
# NOTE:
#      the order of config files matters to Jekyll
JEKYLL_CONFIGS = $(MAIN_CONFIG) $(DEFAULTS_CONFIG) $(VERSION_CONFIG)

ifdef WINDOWS
LATEST_DOCS_VERSION = $(shell type $(VERSION_FILE))
else
LATEST_DOCS_VERSION = $(shell cat $(VERSION_FILE))
endif

# convenience targets
help usage default:
	@echo ""
	@echo "Usage:"
	@echo ""
	@echo "    make dev:     build site with dev config"
	@echo "    make prod:    build site with prod config"
	@echo "    make install: install dependencies"
	@echo ""
	@echo "    make data:    generate data files (Generated ToCs, $(DOCS_VERSION_DATA))"
	@echo "    make configs: generate Jekyll configs ($(DEFAULTS_CONFIG), $(VERSION_CONFIG))"
	@echo "    make styles:  generate CSS"
	@echo "    make plugins: generate plugins app ($(PLUGINS_APP))"
	@echo ""
	@echo "    make clean:   remove all generated output"
	@echo "    make nuke:    run 'make clean' and remove all dependencies"
	@echo ""
	@echo "Arguments:"
	@echo ""
	@echo "    NODOCS: (defined or undefined) - excludes docs from build"
	@echo ""

data: fetch $(TOC_FILES) $(DOCS_VERSION_DATA)
configs: $(DEFAULTS_CONFIG) $(VERSION_CONFIG)
styles: $(STYLES)
plugins: $(PLUGINS_APP)
toc: $(TOC_FILES)

dev: JEKYLL_CONFIGS += $(DEV_CONFIG)
dev: JEKYLL_FLAGS += --trace

prod: JEKYLL_CONFIGS += $(PROD_CONFIG)
prod: JEKYLL_FLAGS +=

dev prod: build

ifdef NODOCS
build: JEKYLL_CONFIGS += $(DOCS_EXCLUDE_CONFIG)
endif

build: JEKYLL_FLAGS += --config $(subst $(SPACE),$(COMMA),$(strip $(JEKYLL_CONFIGS)))
build: $(JEKYLL_CONFIGS) data styles plugins
	$(JEKYLL) build $(JEKYLL_FLAGS)

install:
	bundle install
	npm install

serve:
	cd $(DEV_DIR) && python -m SimpleHTTPServer 8000

$(FETCH_DIR): $(FETCH_CONFIG) $(BIN_DIR)/fetch_docs.js
	$(NODE) $(BIN_DIR)/fetch_docs.js $(FETCH_CONFIG) $@
	touch $@

fetch: $(FETCH_DIR)

# real targets
# NOTE:
#      the ">>" operator appends to a file in both CMD and SH
$(PLUGINS_APP): $(PLUGINS_SRC)
	echo ---> $@
	echo --->> $@
	$(BROWSERIFY) -t reactify -t envify $< | $(UGLIFY) >> $@

$(DOCS_VERSION_DATA): $(BIN_DIR)/gen_versions.js
	$(NODE) $(BIN_DIR)/gen_versions.js $(DOCS_DIR) > $@

$(DEFAULTS_CONFIG): $(BIN_DIR)/gen_defaults.js $(VERSION_FILE)
	$(NODE) $(BIN_DIR)/gen_defaults.js $(DOCS_DIR) "$(LATEST_DOCS_VERSION)" > $@

$(VERSION_CONFIG): $(VERSION_FILE)
	sed -e "s/^/$(VERSION_VAR_NAME): /" < $< > $@

$(TOC_FILES): $(BIN_DIR)/toc.js
	$(NODE) $(BIN_DIR)/toc.js $(DOCS_DIR) $(DATA_DIR)

$(MAIN_STYLE_FILE): $(SCSS_SRC)

# pattern rules

# NODE:
#      $(@D) means "directory part of target"
$(CSS_DEST_DIR)/%.css: $(CSS_SRC_DIR)/%.less
ifdef WINDOWS
	-$(MKDIRP) $(subst /,\,$(@D))
else
	$(MKDIRP) $(@D)
endif
	echo ---> $@
	echo --->> $@
	$(LESSC) $< >> $@

$(CSS_DEST_DIR)/%.css: $(CSS_SRC_DIR)/%.scss
ifdef WINDOWS
	-$(MKDIRP) $(subst /,\,$(@D))
else
	$(MKDIRP) $(@D)
endif
	echo ---> $@
	echo --->> $@
	$(SASSC) $< >> $@

$(CSS_DEST_DIR)/%.css: $(CSS_SRC_DIR)/%.css
ifdef WINDOWS
	-$(MKDIRP) $(subst /,\,$(@D))
else
	$(MKDIRP) $(@D)
endif
	echo ---> $@
	echo --->> $@
	cat $< >> $@

# maintenance
clean:

	$(RM) -r $(PROD_DIR) $(DEV_DIR)
	$(RM) -r $(FETCH_DIR)
	$(RM) $(VERSION_CONFIG)
	$(RM) $(DEFAULTS_CONFIG)
	$(RM) $(TOC_FILES)
	$(RM) $(DOCS_VERSION_DATA)
	$(RM) $(PLUGINS_APP)
	$(RM) -r $(CSS_DEST_DIR)

nuke: clean
	$(RM) -r node_modules
	$(RM) Gemfile.lock

.PHONY: clean usage help default build
