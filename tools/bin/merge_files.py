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

# globals
bad_merges = []

def merge_files(merge_spec, prefix):

    num_removed = 0
    num_created = 0
    global bad_merges

    # merge all specified files
    for dest_name, src_names in merge_spec.items():

        # start the file empty
        output_path = os.path.join(prefix, dest_name)
        output      = HEADER

        # accumulate all source files
        for src_name in src_names:
            src_path = os.path.join(prefix, src_name)

            # read in the source file
            try:
                with open(src_path, 'r') as src_file:
                    contribution = src_file.read()
            except IOError:
                continue

            # massage its contents
            contribution = strip_front_matter(contribution)
            output      += contribution + "\n"

            # remove the source file
            num_removed += 1
            os.remove(src_path)
            print '|-', src_path

        # write the merged file
        with open(output_path, 'w') as output_file:
            output_file.write(output)
            num_created += 1

        # check that the merge doesn't have repeated licenses
        status = ''
        if output.count(LICENSE_LINK) != 1:
            status += '\033[31m'
            bad_merges.append(output_path)
        else:
            status += '\033[32m'
        status += output_path + '\033[m'

        print '\ ->', status

    return num_created, num_removed

def main():

    base_path     = sys.argv[1]
    total_created = 0
    total_removed = 0
    global bad_merges

    # walk the whole doc tree
    for root_path, dir_names, file_names in os.walk(base_path):

        # find config files
        if CONFIG_FILE_NAME in file_names:

            config_file_path = os.path.join(root_path, CONFIG_FILE_NAME)

            # try to read in the config
            try:
                with open(config_file_path, 'r') as config_file:
                    config = json.loads(config_file.read())
            except IOError as e:
                continue

            # merge files
            if 'merge' in config:
                num_created, num_removed = merge_files(config['merge'], root_path)
                total_created += num_created
                total_removed += num_removed

            os.remove(config_file_path)

    print 'created', total_created, 'files'
    print 'removed', total_removed, 'files'

    if len(bad_merges) > 0:
        print 'bad merges'
        for file_path in bad_merges:
            print file_path

if __name__ == '__main__':
    main()
