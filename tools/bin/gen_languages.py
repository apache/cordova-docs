# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

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
