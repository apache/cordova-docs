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
require 'quirks_merger'

describe QuirksMerger do
  before :all do
    @directory = Helper::create_tmp_directory_assets(__FILE__)
    @merger    = QuirksMerger.new
  end
  
  it 'should not merge platform-only files' do
    filename = File.join(@directory, 'android', 'droid', 'text_to_speech.md')
    @merger.run filename
    
    File.exists?(filename).should be_true
  end
  
  it 'should merge phonegap-core files' do
    filename = File.join(@directory, 'android', 'accelerometer', 'watch_acceleration.md')
    
    # Merge the file
    @merger.run filename
    File.exists?(filename).should be_false
    
    # Verify that it is a concatination
    cat_data      = File.read( File.join @directory, 'phonegap', 'accelerometer', 'watch_acceleration.md' )
    expected_data = File.read( File.join @directory, 'expected', 'watch_acceleration.md' )
    cat_data.should == expected_data
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end