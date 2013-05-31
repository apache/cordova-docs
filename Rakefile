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
require 'rake'
require 'rspec/core/rake_task'
require 'fileutils'

task :default => :spec

desc "Run specs"
RSpec::Core::RakeTask.new('spec') do |t|
  t.spec_opts  = %w(-fs --color)
  t.warning    = true
  t.spec_files = FileList['spec/**/*.rb']
end
task :spec

desc "Increment the version - generates a release and updates the edge documentation"
task :version, :nextVersion do |t, args|
    # get current and next version
    nextVersion = args[:nextVersion].strip
    prevVersion = File.read('VERSION').sub(/rc\d+$/, '').strip # remove release candidate
    
    # generate a release
    edge_dir = File.join('docs', 'en', 'edge')
    release_dir = File.join('docs', 'en', nextVersion)
    FileUtils.cp_r(edge_dir, release_dir)
    
    # update version number in new release directory
    _nextVersion = nextVersion.sub(/rc\d+$/, '') # cordova file references do not include the RC
    unless prevVersion == _nextVersion
        files = Dir.glob(File.join('docs', 'en', nextVersion, '**', '*'))
        
        files.sort.each do |file|
          next if File.directory?(file) or file !~ /md|html/
          content = File.read(file)
          content.gsub!('x.x.x', _nextVersion)
          File.open(file, 'w') { |f| f.write(content) }
        end
    end
    
    # update VERSION file
    File.open('VERSION', 'w') do |f|
        f.write(nextVersion)
    end
    
    # echo results
    puts "Generated version #{nextVersion}"
    puts ""
    puts "Next steps:"
    puts "  1. Review the update using `git status`"
    puts "  2. Commit the changes as 'Version #{nextVersion}'"
    puts "  3. Tag the commit as '#{nextVersion}'"
    puts ""
end
