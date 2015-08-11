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
import json
import re
import shutil

from util import *

# constants
CONFIG_FILE_NAME = 'config.json'
LICENSE_LINK     = 'http://www.apache.org/licenses/LICENSE-2.0'

HEADER = '''---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---
'''

MAX_LICENSE_SIZE = 1600 # in chars

def find_marker(text, markers, start=0):
    for marker in markers:
        try:
            return marker, text.index(marker, start)
        except ValueError as e:
            continue
    return None, 0

def strip_license(text):

    start_markers = [
        '---',
        '* * *',
    ]

    end_markers  = [
        '---',
        '## under the License.',
        '## unter der Lizenz.',
        '## aux termes de la licence.',
        '## bajo la licencia.',
        '## con la licenza.',
        '## ライセンス。',
        '## 라이센스.',
        '## na licencji.',
        '## 根據許可證。',
        '* * *',
    ]

    first_marker, first_index = find_marker(text, start_markers)

    if first_marker is None:
        return text

    second_marker, second_index = find_marker(text, end_markers, first_index + len(first_marker))

    if second_index == first_index:
        return text

    if second_marker is None:
        return text

    if second_index - first_index > MAX_LICENSE_SIZE:
        return text

    start = second_index + len(second_marker)
    return text[start:]

def fix_file(file_path):

    content = ''
    print file_path

    with open(file_path, 'r') as target_file:
        content = target_file.read()

    content = strip_license(content)
    content = HEADER + content

    with open(file_path, 'w') as target_file:
        target_file.write(content)

    # check that the output contains exactly one license
    if content.lower().count(LICENSE_LINK.lower()) != 1:
        return False

    return True

def main():

    base_path = sys.argv[1]
    num_files = 0
    bad_files = []

    # walk the whole doc tree
    for root_path, dir_names, file_names in os.walk(base_path):
        for file_name in file_names:

            if not file_name.endswith('.md'):
                continue

            file_path = os.path.join(root_path, file_name)
            passed    = fix_file(file_path)
            num_files += 1

            if not passed:
                bad_files.append(file_path)

    print 'processed', num_files, 'files'

    if len(bad_files) > 0:
        print 'bad merges'
        for file_path in bad_files:
            print '\033[31m' + file_path + '\033[m'

if __name__ == '__main__':
    main()
