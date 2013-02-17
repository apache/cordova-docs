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

class JoDoc
  JO_DOC_CLI    = 'jodoc'
  TEMPLATE_PATH = File.expand_path File.join(File.dirname(__FILE__), '..', '..', 'template', 'docs' )
  
  attr_accessor :input_directory
  attr_accessor :output_directory
  
  def initialize(input_directory, output_directory, options)
    @input_directory      = input_directory
    @output_directory     = output_directory
    @template_directories = [ File.join TEMPLATE_PATH, 'default' ]

    # add custom language template
    if options[:lang]
      @template_directories.push(File.join TEMPLATE_PATH, options[:lang])
    end

    check_dependencies
  end
  
  def run
    # Copy HTML template assets
    @template_directories.each do |template|
      next unless File.directory? template
      FileUtils.cp_r File.join(template, '.'), @output_directory
    end

    # Run joDoc
    FileUtils.cd @input_directory do
        `jodoc --output "#{@output_directory}" --title "Cordova API Documentation" --template "#{@output_directory}/index.html" ./ > /dev/null 2> /dev/null`
    end
  end
  
  protected
  
  def check_dependencies
    die 'The jodoc script is not in your path' unless command_exists?(JO_DOC_CLI)

    [@input_directory, @template_directories[0]].each do |directory|
      die "The directory #{directory}/ should exist." unless File.directory? directory
    end
  end
  
  def command_exists?(command)
    system("which #{command} > /dev/null 2> /dev/null")
  end
  
  def die(message)
    raise StandardError, message
  end
end
