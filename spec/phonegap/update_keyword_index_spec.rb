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

$:.unshift File.join(File.dirname(__FILE__), '..')
require 'spec_helpers'
require 'update_keyword_index'
require 'rubygems'
require 'nokogiri'

describe UpdateKeywordIndex do
  before :each do
    directory = Helper::create_tmp_directory_assets(__FILE__)
    @file = File.join(directory, '_index.html')
    @update_keyword = UpdateKeywordIndex.new
  end
  
  it 'should skip all files but _index.html' do
    # All false
    @update_keyword.run('index.html').should    be_false
    @update_keyword.run('index.htm').should     be_false
    @update_keyword.run('_index.htm').should    be_false
    @update_keyword.run('index.md.html').should be_false
  end
  
  it 'should rename the title' do
    Nokogiri::HTML(File.read @file).css('#subheader > h1' )[0].content.should_not == @update_keyword.header_title
    @update_keyword.run @file
    Nokogiri::HTML(File.read @file).css('#subheader > h1' )[0].content.should     == @update_keyword.header_title
  end
  
  it 'should rename the h1' do
    Nokogiri::HTML(File.read @file).css('#content > h1')[0].content.should_not == @update_keyword.content_title
    @update_keyword.run @file
    Nokogiri::HTML(File.read @file).css('#content > h1')[0].content.should     == @update_keyword.content_title
  end
  
  it 'should remove the <hr/>' do
    Nokogiri::HTML(File.read @file).css('#content > hr').should have_at_least(1).items
    @update_keyword.run @file
    Nokogiri::HTML(File.read @file).css('#content > hr').should have(0).items
  end
  
  it 'should update references from index.md.html to index.html' do
    Nokogiri::HTML(File.read @file).to_html.scan('index.md.html').length.should_not == 0
    @update_keyword.run @file
    Nokogiri::HTML(File.read @file).to_html.scan('index.md.html').length.should     == 0
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end