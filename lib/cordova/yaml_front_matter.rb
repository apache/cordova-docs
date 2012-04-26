# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
# 
#  http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

require 'yaml'

class YamlFrontMatter
  def initialize
  end
  
  def run(file_path)
    content = IO.read(file_path)
    yaml    = {}
    
    # This will also strip out any leading whitespace
    # Copied the RegEx from [Jekyll](http://github.com/mojombo/jekyll)
    #
    if content =~ /^(---\s*\n.*?\n?)^(---\s*$\n?)/m
      content = content[($1.size + $2.size)..-1]
      yaml    = YAML.load($1)
      
      # Save the file
      File.open(file_path, 'w+') do |file|
        file.write content
      end
    end
    
    yaml
  end
end