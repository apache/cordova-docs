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

class NoIndex
  @@latest_version = nil;
  @versions = nil
  @languages = {}

  def initialize(options = {})
      @@latest_version = get_latest_version()
      @version  = options[:version]
      @language = options[:lang]
  end

  def run(filename)
    if (@@latest_version == @version && @language == 'en')
      return;
    end

    doc = Nokogiri::HTML(File.read(filename))

    meta_tags = doc.css('head meta')
    meta_tags.last.add_next_sibling(meta_element_noindex(doc))

    File.open(filename, 'w') { |file| file.write doc.to_html }

    return doc.to_html
  end

  private

  def get_latest_version
    # skip if we have the latest version
    if !@@latest_version.nil?
      return @@latest_version
    end

    docs_path = File.expand_path File.join(__FILE__, '..', '..', '..', 'docs')
    glob_exp  = File.join(docs_path, 'en', '*', 'config.json')
    versions  = []

    # collect all english versions because they are the most up-to-date
    Dir.glob(glob_exp).each do |file|
        version = File.basename(File.dirname(file))
        versions.push(version)
    end

    # sort the version list because Dir does not guarantee an order
    versions.sort!

    # we want the latest stable release
    # if edge is the most recent, remove it
    if (versions.last == 'edge')
      versions.pop
    end

    # return the latest version
    return versions.last
  end

  def meta_element_noindex(doc)
    # create and return: <meta name="robots" content="noindex" />
    element = Nokogiri::XML::Node.new('meta', doc)
    element['name'] = 'robots'
    element['content'] = 'noindex'
    return element
  end
end
