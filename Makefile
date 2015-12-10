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
CAT    = type
LS     = ls
else
SHELL  = sh
JEKYLL = bundle exec jekyll
CAT    = cat
LS     = ls
endif

# macros
slugify       = $(subst /,_,$(subst .,-,$(1)))
slug2language = $(subst /,,$(dir $(subst _,/,$(1))))
slug2version  = $(subst -,.,$(notdir $(subst _,/,$(1))))

ifdef WINDOWS
copydir = xcopy "$(subst /,\,$(1))" "$(subst /,\,$(2))" /E /I
else
copydir = cp -r $(1) $(2)
endif

ifdef WINDOWS
copyfile = copy "$(subst /,\,$(1))" "$(subst /,\,$(2))"
else
copyfile = cp $(1) $(2)
endif

ifdef WINDOWS
makedir = mkdir $(subst /,\,$(1))
else
makedir = mkdir -p $(1)
endif

ifdef WINDOWS
printfile = type $(subst /,\,$(1))
else
printfile = cat $(1)
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
DATA_DIR         = $(SRC_DIR)/_data
TOC_DIR          = $(DATA_DIR)/toc
STATIC_DIR       = $(SRC_DIR)/static
CSS_SRC_DIR      = $(STATIC_DIR)/css-src
CSS_DEST_DIR     = $(STATIC_DIR)/css
PLUGINS_SRC_DIR  = $(STATIC_DIR)/plugins
PLUGINS_DEST_DIR = $(STATIC_DIR)/js

# executables
NODE       = node
CROWDIN    = crowdin-cli
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
MAKE       := $(subst /,\,$(MAKE))
endif

# existing files
MAIN_CONFIG         = $(CONFIG_DIR)/_config.yml
DEV_CONFIG          = $(CONFIG_DIR)/_dev.yml
PROD_CONFIG         = $(CONFIG_DIR)/_prod.yml
DOCS_EXCLUDE_CONFIG = $(CONFIG_DIR)/_nodocs.yml
FETCH_CONFIG        = $(DATA_DIR)/fetched-files.yml
REDIRECTS_FILE      = $(DATA_DIR)/redirects.yml
PLUGINS_SRC         = $(PLUGINS_SRC_DIR)/app.js
VERSION_FILE        = VERSION
FETCH_SCRIPT        = $(BIN_DIR)/fetch_docs.js
CROWDIN_CONFIG      = $(CONFIG_DIR)/crowdin.yml

ifdef WINDOWS
CROWDIN_IDENTITY_FILE = %HOME%/.crowdin.yml
else
CROWDIN_IDENTITY_FILE = $$HOME/.crowdin.yml
endif

# NOTE:
#      the .scss files are separate because they combine into MAIN_STYLE_FILE,
#      which includes them on its own, and the SCSS compiler takes care of them;
#      because of this, there is also no .scss -> .css pattern rule
ifdef WINDOWS
SCSS_SRC   = $(subst $(PWD)/,,$(subst \,/,$(shell cd $(CSS_SRC_DIR) && dir *.scss /S /B)))
STYLES_SRC = $(subst $(PWD)/,,$(subst \,/,$(shell cd $(CSS_SRC_DIR) && dir *.less *.css /S /B)))
else
SCSS_SRC   = $(shell find $(CSS_SRC_DIR) -name "*.scss")
STYLES_SRC = $(shell find $(CSS_SRC_DIR) -name "*.less" -or -name "*.css")
endif

LANGUAGES = $(shell $(LS) $(DOCS_DIR))

LATEST_DOCS_VERSION = $(strip $(shell $(CAT) $(VERSION_FILE)))
NEXT_DOCS_VERSION   = $(shell $(NODE) $(BIN_DIR)/nextversion.js $(LATEST_DOCS_VERSION))

NEXT_DOCS_VERSION_SLUG   = $(call slugify,$(NEXT_DOCS_VERSION))

DEV_DOCS      = $(addprefix $(DOCS_DIR)/,$(addsuffix /dev,$(LANGUAGES)))
DEV_DOCS_TOCS = $(addprefix $(TOC_DIR)/,$(addsuffix _dev-src.yml, $(LANGUAGES)))

# generated files
VERSION_CONFIG    = $(CONFIG_DIR)/_version.yml
DEFAULTS_CONFIG   = $(CONFIG_DIR)/_defaults.yml
DOCS_VERSION_DATA = $(DATA_DIR)/docs-versions.yml
DOCS_PAGE_LIST    = $(DATA_DIR)/all-pages.yml
PLUGINS_APP       = $(PLUGINS_DEST_DIR)/plugins.js
MAIN_STYLE_FILE   = $(CSS_DEST_DIR)/main.css

STYLES = $(MAIN_STYLE_FILE) $(addsuffix .css,$(basename $(subst $(CSS_SRC_DIR),$(CSS_DEST_DIR),$(STYLES_SRC))))

DOCS_VERSION_DIRS  = $(filter-out %.md,$(wildcard $(DOCS_DIR)/**/*))
DOCS_VERSION_SLUGS = $(call slugify,$(subst $(DOCS_DIR)/,,$(DOCS_VERSION_DIRS)))
TOC_FILES          = $(addprefix $(TOC_DIR)/,$(addsuffix -gen.yml,$(DOCS_VERSION_SLUGS)))

FETCH_FLAGS   = --config $(FETCH_CONFIG) --docsRoot $(DOCS_DIR)
FETCHED_FILES = $(shell $(NODE) $(FETCH_SCRIPT) $(FETCH_FLAGS) --dump)

NEXT_DOCS      = $(addprefix $(DOCS_DIR)/,$(addsuffix /$(NEXT_DOCS_VERSION),$(LANGUAGES)))
NEXT_DOCS_TOCS = $(addprefix $(TOC_DIR)/,$(addsuffix _$(NEXT_DOCS_VERSION_SLUG)-src.yml, $(LANGUAGES)))

# other variables
# NOTE:
#      the order of config files matters to Jekyll
JEKYLL_CONFIGS = $(MAIN_CONFIG) $(DEFAULTS_CONFIG) $(VERSION_CONFIG)
JEKYLL_FLAGS   =

BUILD_DATA = $(DOCS_VERSION_DATA) $(DOCS_PAGE_LIST) $(TOC_FILES)

# convenience targets
help usage default:
	@echo ""
	@echo "Usage:"
	@echo ""
	@echo "    make build:      build site with dev config"
	@echo "    make install:    install dependencies"
	@echo ""
	@echo "    make data:       generate data files (Generated ToCs, $(DOCS_VERSION_DATA), $(DOCS_PAGE_LIST))"
	@echo "    make configs:    generate Jekyll configs ($(DEFAULTS_CONFIG), $(VERSION_CONFIG))"
	@echo "    make styles:     generate CSS"
	@echo "    make plugins:    generate plugins app ($(PLUGINS_APP))"
	@echo ""
	@echo "    make snapshot:   copy dev docs to $(LATEST_DOCS_VERSION) docs"
	@echo "    make newversion: create $(NEXT_DOCS_VERSION) docs from dev docs"
	@echo ""
	@echo "    make clean:      remove all generated output"
	@echo "    make nuke:       run 'make clean' and remove all dependencies"
	@echo ""
	@echo "Arguments:"
	@echo ""
	@echo "    NODOCS: (defined or undefined) - excludes docs from build"
	@echo "    PROD:   (defined or undefined) - uses production config instead of dev config"
	@echo ""

fetch: $(FETCHED_FILES)
data: $(BUILD_DATA)
configs: $(DEFAULTS_CONFIG) $(VERSION_CONFIG)
styles: $(STYLES)
plugins: $(PLUGINS_APP)
toc: $(TOC_FILES)

ifdef PROD

JEKYLL_CONFIGS += $(PROD_CONFIG)
ifdef NODOCS
$(error Cannot ignore docs during a production build)
endif

else

JEKYLL_CONFIGS += $(DEV_CONFIG)
JEKYLL_FLAGS += --trace
ifdef NODOCS
JEKYLL_CONFIGS += $(DOCS_EXCLUDE_CONFIG)
endif

endif

build: JEKYLL_FLAGS += --config $(subst $(SPACE),$(COMMA),$(strip $(JEKYLL_CONFIGS)))
build: $(JEKYLL_CONFIGS) $(FETCHED_FILES) $(BUILD_DATA) $(STYLES) $(PLUGINS_APP)
	$(JEKYLL) build $(JEKYLL_FLAGS)

install:
	bundle install
	npm install

serve:
	cd $(DEV_DIR) && python -m SimpleHTTPServer 8000

# doing this in Make in a cross-platform way is pretty ugly
snapshot: $(FETCHED_FILES)
	$(GULP) snapshot

newversion: $(NEXT_DOCS) $(NEXT_DOCS_TOCS)
	echo $(NEXT_DOCS_VERSION) > $(VERSION_FILE)

# real targets
$(FETCHED_FILES): $(FETCH_CONFIG) $(FETCH_SCRIPT)
	$(NODE) $(FETCH_SCRIPT) $(FETCH_FLAGS)

# NOTE:
#      the ">>" operator appends to a file in both CMD and SH
$(PLUGINS_APP): $(PLUGINS_SRC)
	echo ---> $@
	echo --->> $@
	$(BROWSERIFY) -t reactify -t envify $< | $(UGLIFY) >> $@

$(DOCS_VERSION_DATA): $(BIN_DIR)/gen_versions.js $(DOCS_DIR)
	$(NODE) $(BIN_DIR)/gen_versions.js $(DOCS_DIR) > $@

$(DOCS_PAGE_LIST): $(BIN_DIR)/gen_pages_dict.js $(FETCHED_FILES) $(REDIRECTS_FILE) $(SRC_DIR)
	$(NODE) $(BIN_DIR)/gen_pages_dict.js \
		--siteRoot $(SRC_DIR) \
		--redirectsFile $(REDIRECTS_FILE) \
		--latestVersion $(LATEST_DOCS_VERSION) \
		--languages $(subst $(SPACE),$(COMMA),$(LANGUAGES)) \
		> $@

$(DEFAULTS_CONFIG): $(BIN_DIR)/gen_defaults.js $(VERSION_FILE) $(DOCS_DIR)
	$(NODE) $(BIN_DIR)/gen_defaults.js $(DOCS_DIR) "$(LATEST_DOCS_VERSION)" > $@

$(VERSION_CONFIG): $(VERSION_FILE)
	sed -e "s/^/$(VERSION_VAR_NAME): /" < $< > $@

$(MAIN_STYLE_FILE): $(SCSS_SRC)

# pattern rules
$(DOCS_DIR)/%/$(NEXT_DOCS_VERSION): $(DOCS_DIR)/%/dev
	$(call copydir,$^,$@)
ifndef WINDOWS
	touch $(DOCS_DIR)
endif

$(TOC_DIR)/%_$(NEXT_DOCS_VERSION_SLUG)-src.yml: $(TOC_DIR)/%_dev-src.yml $(DOCS_DIR)
	$(call copyfile,$<,$@)

$(TOC_DIR)/%_dev-gen.yml: $(FETCHED_FILES)

$(TOC_DIR)/%-gen.yml: $(TOC_DIR)/%-src.yml $(BIN_DIR)/augment_toc.js $(DOCS_DIR)
	$(NODE) $(BIN_DIR)/augment_toc.js --srcToc $< --srcRoot $(DOCS_DIR)/$(call slug2language,$*)/$(call slug2version,$*) > $@

# NOTE:
#      $(@D) means "directory part of target"
$(CSS_DEST_DIR)/%.css: $(CSS_SRC_DIR)/%.less
	-$(call makedir,$(@D))
	echo ---> $@
	echo --->> $@
	$(LESSC) $< >> $@

$(CSS_DEST_DIR)/%.css: $(CSS_SRC_DIR)/%.scss
	-$(call makedir,$(@D))
	echo ---> $@
	echo --->> $@
	$(SASSC) $< >> $@

$(CSS_DEST_DIR)/%.css: $(CSS_SRC_DIR)/%.css
	-$(call makedir,$(@D))
	echo ---> $@
	echo --->> $@
	$(call printfile,$<) >> $@

# crowdin
CROWDIN_SRC      = www/docs/en/dev
CROWDIN_JAIL     = crowdin-jail
CROWDIN_COPY_DIR = $(CROWDIN_JAIL)/cordova-docs/docs/en
CROWDIN_COPY     = $(CROWDIN_COPY_DIR)/dev

$(CROWDIN_JAIL) $(CROWDIN_COPY_DIR):
ifdef WINDOWS
	-$(MKDIRP) $(subst /,\,$@)
else
	$(MKDIRP) $@
endif

$(CROWDIN_COPY): $(CROWDIN_SRC) $(CROWDIN_COPY_DIR) $(FETCHED_FILES)
	cp -R $(CROWDIN_SRC) $(CROWDIN_COPY_DIR)

cw_project: CW_COMMAND = list project
cw_translations: CW_COMMAND = list translations
cw_sources: CW_COMMAND = list sources
cw_upload: CW_COMMAND = upload sources --auto-update
cw_download: CW_COMMAND = download en
cw_project cw_translations cw_sources cw_upload cw_download: crowdin

crowdin: $(CROWDIN_JAIL) $(CROWDIN_COPY)
	(cd $(CROWDIN_JAIL) && $(CROWDIN) --identity=$(CROWDIN_IDENTITY_FILE) --config=../$(CROWDIN_CONFIG) $(CW_COMMAND))

on_disk.txt: $(CROWDIN_COPY)
	$(MAKE) cw_sources | grep "^/cordova-docs" | sort > $@

on_crowdin.txt: $(CROWDIN_COPY)
	$(MAKE) cw_project | grep "^/cordova-docs" | sort > $@

cw_diff: on_disk.txt on_crowdin.txt
	comm -3 $^
	$(RM) $^

# maintenance
clean:

	$(RM) -r $(CROWDIN_JAIL)
	$(RM) -r $(PROD_DIR) $(DEV_DIR)
	$(RM) $(VERSION_CONFIG)
	$(RM) $(DEFAULTS_CONFIG)
	$(RM) $(DOCS_PAGE_LIST)
	$(RM) $(DOCS_VERSION_DATA)
	$(RM) -r $(PROD_DIR) $(DEV_DIR)
	$(RM) $(TOC_FILES)
	$(RM) $(PLUGINS_APP)
	$(RM) -r $(CSS_DEST_DIR)
	$(RM) $(FETCHED_FILES)

nuke: clean
	$(RM) -r node_modules
	$(RM) Gemfile.lock

.PHONY: clean usage help default build fetch $(DEV_DOCS)
