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

$:.unshift File.join(File.dirname(__FILE__))
require 'spec_helpers'

describe FileHelpers do
  before :all do
    @helpers = Object.new.extend FileHelpers
  end
  
  before :each do
    Helper::remove_tmp_directory
    
    @tmp_docs_directory   = Helper::create_tmp_directory_assets
    @tmp_public_directory = Helper::tmp_public_directory
  end
  
  it 'should have a default input directory that exists' do
    File.exists?(@helpers.default_input_directory).should be_true
  end
  
  it 'should copy directories' do
    @helpers.copy_directory(@tmp_docs_directory, @tmp_public_directory)
    
    input_content = Dir.glob File.join(@tmp_docs_directory, '**', '*')
    tmp_content   = Dir.glob File.join(@tmp_public_directory, '**', '*')
    input_content.length.should == tmp_content.length
  end
  
  it 'should move a directory' do
    File.exists?(@tmp_public_directory).should be_false
    
    @helpers.move_directory(@tmp_docs_directory, @tmp_public_directory)
    
    File.exists?(@tmp_docs_directory).should be_false
    File.exists?(@tmp_public_directory).should be_true
  end
  
  it 'should yield each file in the directory' do
    files = []
    
    @helpers.each_file @tmp_docs_directory do |file|
      files.push(file)
    end
    
    files.should have_at_least(1).items
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end