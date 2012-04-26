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

class AddTitle
  def run(filename)
    doc = Nokogiri::HTML(File.read(filename))
    
    title_source = doc.css('#content > h1')[0]
    return nil if title_source.nil?
    
    title_target = doc.css('#subheader > h1')[0]
    return nil if title_target.nil?
    
    title_target.content = title_source.content
    File.open(filename, 'w') { |file| file.write doc.to_html }
    
    return title_source.content
  end
end