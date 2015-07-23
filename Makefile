# constants
SOURCE_DIR = www
BUILD_DIR  = public
BIN_DIR    = tools/bin

SUDO = sudo
LESS = ./node_modules/.bin/lessc

RUBY_DEPS = jekyll rdiscount

LESS_FILES    = $(wildcard $(SOURCE_DIR)/static/css/*.less)
GEN_CSS_FILES = $(LESS_FILES:.less=.css)

LANGUAGES_FILE = $(SOURCE_DIR)/_data/languages.yml
DEFAULTS_FILE  = _defaults.yml
JEKYLL_CONFIGS = _config.yml $(DEFAULTS_FILE)
COMMA          = ,
EMPTY          =
SPACE          = $(EMPTY) $(EMPTY)
CONFIGS_ARG    = $(subst $(SPACE),$(COMMA),$(JEKYLL_CONFIGS))
JEKYLL_FLAGS   = --trace --config $(CONFIGS_ARG)

# OS-specific config
ifdef $(WINDOWS)
SUDO =
endif

# targets
help usage:
	@echo make build
	@echo make serve
	@echo
	@echo make install/uninstall
	@echo make link-bugs
	@echo
	@echo make clean
	@echo make nuke

build serve: $(GEN_CSS_FILES) $(DEFAULTS_FILE) $(LANGUAGES_FILE) toc

build:
	jekyll build $(JEKYLL_FLAGS)

serve:
	jekyll serve --watch $(JEKYLL_FLAGS)

$(DEFAULTS_FILE):
	python $(BIN_DIR)/gen_defaults.py $(SOURCE_DIR)/docs/ > $@

$(LANGUAGES_FILE):
	python $(BIN_DIR)/gen_languages.py $(SOURCE_DIR)/docs/ > $@

toc:
	python $(BIN_DIR)/gen_toc.py $(SOURCE_DIR)

link-bugs:
	$(BIN_DIR)/linkify-bugs.sh $(SOURCE_DIR)/_posts

$(LESS):
	$(MAKE) install

install:
	npm install
	$(SUDO) gem install $(RUBY_DEPS)

uninstall:
	$(RM) -r node_modules
	$(SUDO) gem uninstall $(RUBY_DEPS)

clean:
	$(RM) -r $(BUILD_DIR)
	$(RM) $(GEN_CSS_FILES)
	$(RM) -r $(SOURCE_DIR)/_data/toc/*
	$(RM) $(LANGUAGES_FILE) $(DEFAULTS_FILE)

nuke: clean uninstall

# pattern rules
%.css: %.less $(LESS)
	$(LESS) $< > $@

