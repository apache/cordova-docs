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

class UpdateIndex
  attr_accessor :header_title
  attr_accessor :filename
  
  def initialize
    @input_filename  = 'index.md.html'
    @output_filename = 'index.html'
    @header_title    = 'Home'
  end
  
  def run(filename)
    return false unless File.basename(filename) == @input_filename
    
    doc = Nokogiri::HTML(File.read(filename))
    
    element = doc.css('#subheader > h1')[0]
    element.content = @header_title unless element.nil?
    
    File.open(filename, 'w') { |file| file.write doc.to_html }
    
    FileUtils.mv(filename, File.join(File.dirname(filename), @output_filename))
    
    return true
  end
end