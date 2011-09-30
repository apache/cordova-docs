require 'rubygems'
require 'rake'
require 'spec/rake/spectask'

desc "Run specs"
Spec::Rake::SpecTask.new('spec') do |t|
  t.spec_opts  = %w(-fs --color)
  t.warning    = true
  t.spec_files = FileList['spec/**/*.rb']
end
task :spec

task :default => :spec
