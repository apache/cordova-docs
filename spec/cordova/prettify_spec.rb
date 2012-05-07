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

$: << File.join(File.dirname(__FILE__), '..', '..', 'lib')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'cordova')
require 'prettify'
require 'spec_helpers'

describe Prettify do
  before :each do
    directory = Helper::create_tmp_directory_assets(__FILE__)
    @file = {
      :normal => File.join(directory, 'example.html'),
    }
    @prettify = Prettify.new
  end
  
  it 'should find some code blocks' do
    code_tags = @prettify.run @file[:normal]
    code_tags.should have_at_least(1).item
  end
  
  it 'should add the prettyprint class to each code block' do
    @prettify.run @file[:normal]
    
    doc = Nokogiri::HTML(File.read @file[:normal])
    doc.css('#content pre.prettyprint').should have_at_least(1).item
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end