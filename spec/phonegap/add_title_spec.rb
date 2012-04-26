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

$: << File.join(File.dirname(__FILE__), '..')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'cordova')
require 'spec_helpers'
require 'add_title'
require 'nokogiri'  # Nokogiri may not be the best way to test this suite. Any thoughts?

describe AddTitle do
  # Create a fresh copy of the test file for each test run
  before :all do
    tmp_directory = Helper::create_tmp_directory_assets(__FILE__)
    @file = {
      :normal    => File.join(tmp_directory, 'example.html'),
      :no_source => File.join(tmp_directory, 'example_no_source.html'),
      :no_target => File.join(tmp_directory, 'example_no_target.html')
    }
    @add_title = AddTitle.new
  end

  it 'should set the title' do
    @add_title.run(@file[:normal]).should == 'Accelerometer'
    Nokogiri::HTML(File.read @file[:normal]).css('#subheader > h1')[0].content.should == 'Accelerometer'
  end
  
  it 'should skip files with no source title' do
    @add_title.run(@file[:no_source]).should be_nil
  end
  
  it 'should skip files with no target title' do
    @add_title.run(@file[:no_target]).should be_nil
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end