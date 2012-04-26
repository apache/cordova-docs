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
require 'jodoc'

describe JoDoc do
  before :all do
    @tmp_public_directory = Helper::tmp_public_directory
    DocsGenerator.new(Helper::create_tmp_directory_assets, @tmp_public_directory).run
  end
  
  it 'should run on a validate directory' do
    File.directory?(@tmp_public_directory).should be_true
  end
  
  it 'should not run on a non-existent directory' do
    bad_input_directory = File.expand_path File.join(File.dirname(__FILE__), 'hello', 'world')
    lambda { JoDoc.new bad_input_directory,  @tmp_public_directory }.should raise_exception
  end
  
  it 'should generate HTML assets from Markdown' do
    File.exists?(File.join(@tmp_public_directory, 'en', 'edge', 'phonegap_accelerometer_accelerometer.md.html')).should be_true
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end
