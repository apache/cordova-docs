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

def main():
    counts = {}

    for root_path, dir_names, file_names in os.walk(sys.argv[1]):
        for file_name in file_names:

            name, extension = os.path.splitext(file_name)

            if extension not in counts:
                counts[extension] = 0

            counts[extension] += 1

    for extension, count in counts.items():
        print "{0:>10} = {1:<30}".format(repr(extension), count)

if __name__ == '__main__':
    main()
