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
import errno

def strip_front_matter(text):

    marker = '---'

    try:
        first_marker = text.index(marker)
    except ValueError as e:
        return text

    second_marker = text.index(marker, first_marker + len(marker))
    start         = second_marker + len(marker)

    return text[start:]

def listdirs(root_path):
    for subdir_name in os.listdir(root_path):
        subdir_path = os.path.join(root_path, subdir_name)
        if not os.path.isdir(subdir_path):
            continue
        yield subdir_name

def mkdirp(path):
    try:
        os.makedirs(path)
    except OSError as e:
        if e.errno == errno.EEXIST and os.path.isdir(path):
            pass
        else:
            raise

def tocfile_name(language, version, suffix):
    version_slug = version.replace('.', '-')
    if suffix:
        suffix = '-' + suffix
    return '{l}-{v}{s}.yml'.format(l=language, v=version_slug, s=suffix)

def manual_tocfile_name(language, version):
    return tocfile_name(language, version, 'manual')

def generated_tocfile_name(language, version):
    return tocfile_name(language, version, 'generated')
