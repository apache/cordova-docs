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

require 'rubygems'
require 'json'
require 'nokogiri'
require 'fileutils'

class VersionMenu
  def initialize(options = {})
      @version  = options[:version]
      @language = options[:lang]
  end

  def run(filename)
    doc = Nokogiri::HTML(File.read(filename))

    select = doc.css('#header small select')[0]
    select.add_child generate_set(doc)

    File.open(filename, 'w') { |file| file.write doc.to_html }

    return doc.to_html
  end

  private

  def generate_set doc
    optgroup_set = Nokogiri::XML::NodeSet.new doc
    docs_path    = File.expand_path File.join(__FILE__, '..', '..', '..', 'docs')
    versions     = {}
    languages    = {}
    html         = []

    # build hash of languages and versions
    Dir.glob(File.join docs_path, '**', 'config.json').each do |file|
      version  = File.basename(File.dirname file)
      lang     = File.basename(File.dirname(File.dirname file))
      language = JSON.parse(IO.read(file))['language']

      if language
        versions[language] ||= []
        versions[language].push version
        languages[language] = lang
      else
        puts "Warning: The key 'language' was not defined in #{file}"
      end
    end

    # generate HTML <select> output
    versions.keys.sort.each do |language|
      optgroup = Nokogiri::XML::Node.new 'optgroup', doc
      optgroup['label'] = language
      optgroup['value'] = languages[language]
      optgroup_set.push optgroup

      versions[language].sort.reverse.each do |v|
        option = Nokogiri::XML::Node.new 'option', doc
        option['selected'] = 'selected' if @version == v && @language == languages[language]
        option['value'] = v;
        option.content = v
        optgroup.add_child option
      end
    end

    return optgroup_set
  end
end
