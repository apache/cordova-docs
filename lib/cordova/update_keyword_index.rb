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
require 'nokogiri'
require 'fileutils'

class UpdateKeywordIndex
  attr_accessor :header_title
  attr_accessor :content_title
  attr_accessor :filename
  
  def initialize
    @header_title  = 'Keyword Index'
    @content_title = 'Keyword Index'
  end
  
  def run(filename)
    return false unless File.basename(filename) == '_index.html'

    doc = Nokogiri::HTML(File.read(filename))
    
    element = doc.css('#subheader > h1')[0]
    element.content = @header_title unless element.nil?
    
    element = doc.css('#content > h1')[0]
    element.content = @content_title unless element.nil?
    
    element = doc.css('#content > hr')[0]
    element.remove unless element.nil?
    
    # Update referenced to index.md.html
    # Then save
    File.open(filename, 'w') { |file| file.write doc.to_html.gsub('"index.md.html', '"index.html') }
    return true
  end
end