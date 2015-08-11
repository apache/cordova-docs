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
import yaml

from util import *

def main():

    root_dir = sys.argv[1]
    config   = {'defaults': list()}

    # extract configuration
    for lang_name in listdirs(root_dir):

        lang_path = os.path.join(root_dir, lang_name)

        # configure language scope
        config['defaults'].append({
            'scope': {
                'path': 'docs/' + lang_name
            },
            'values': {
                'language': lang_name,
                'layout': 'docs-' + lang_name
            }
        })

        # configure each version scope
        for version_name in listdirs(lang_path):

            manual = manual_tocfile_name(lang_name, version_name)
            generated = generated_tocfile_name(lang_name, version_name)

            config['defaults'].append({
                'scope': {
                    'path': 'docs/' + lang_name + '/' + version_name
                },
                'values': {
                    'version':       version_name,
                    'manual_toc':    manual.replace('.yml', ''),
                    'generated_toc': generated.replace('.yml', ''),
                }
            })

    print yaml.dump(config)

if __name__ == '__main__':
    main()
