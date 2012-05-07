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
require 'update_index'
require 'rubygems'
require 'nokogiri'

describe UpdateIndex do
  before :each do
    directory = Helper::create_tmp_directory_assets(__FILE__)
    @file = {
      :input    => File.join(directory, 'index.md.html'),
      :output   => File.join(directory, 'index.html')
    }
    @update_index = UpdateIndex.new
  end

  it 'should skip all files but index.md.html' do
    @update_index.run('index.md').should       be_false
    @update_index.run('index.html').should     be_false
    @update_index.run('_index.md.html').should be_false
  end
  
  it 'should rename the title' do
    Nokogiri::HTML( File.read @file[:input] ).css('#subheader > h1')[0].content.should_not == @update_index.header_title
    @update_index.run @file[:input]
    Nokogiri::HTML( File.read @file[:output] ).css('#subheader > h1')[0].content.should    == @update_index.header_title
  end

  it 'should rename the file' do
    File.exists?(@file[:input]).should  be_true
    File.exists?(@file[:output]).should be_false
    
    @update_index.run @file[:input]
    
    File.exists?(@file[:input]).should  be_false
    File.exists?(@file[:output]).should be_true
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end