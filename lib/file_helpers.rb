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

require 'fileutils'

module FileHelpers
  #
  # Directory Paths
  #
  
  def default_input_directory
    File.join root_directory, 'docs'
  end
  
  def default_output_directory
    File.join root_directory, 'public'
  end
  
  def tmp_directory
    File.join root_directory, 'tmp'
  end
  
  #
  # Directory Operations
  #
  
  def copy_directory(source, destination)
    FileUtils.rm_rf   destination
    FileUtils.mkdir_p File.dirname(destination)
    FileUtils.cp_r    source, destination
  end
  
  def move_directory(source, destination)
    FileUtils.rm_rf   destination
    FileUtils.mkdir_p File.dirname(destination)
    FileUtils.mv      source, destination
  end
  
  def empty_tmp_directory
    FileUtils.rm_rf tmp_directory
  end

  def empty_output_directory
    FileUtils.rm_rf @output_directory
  end

  #
  # File Operations
  #
  
  def each_file(directory)
    directory_glob = Dir.glob(File.join(directory, '**', '*'))
    
    directory_glob.sort.each do |entry|
      yield(entry) unless File.directory?(entry) or entry !~ /md|html/
    end
  end

  private
  
  def root_directory
    File.expand_path(File.join(File.dirname(__FILE__), '..'))
  end
end
