# -*- coding: utf-8 -*-

import os
import sys
import yaml

from util import *

LANGUAGE_MAP = {
    'de': u'Deutsch',
    'en': u'English',
    'es': u'Español',
    'fr': u'Français',
    'it': u'Italiano',
    'ja': u'日本語',
    'ko': u'한국어',
    'pl': u'Polski',
    'ru': u'Русский',
    'sl': u'Slovene',
    'zh': u'汉语',
}

def main():

    root_dir = sys.argv[1]
    config   = {}

    # extract configuration
    for lang_id in listdirs(root_dir):

        lang_path     = os.path.join(root_dir, lang_id)
        version_names = list(listdirs(lang_path))

        version_names.reverse()

        config[lang_id] = {
            'name':     LANGUAGE_MAP[lang_id],
            'versions': version_names
        }

    print yaml.dump(config)

if __name__ == '__main__':
    main()
