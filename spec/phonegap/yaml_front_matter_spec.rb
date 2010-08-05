$: << File.join(File.dirname(__FILE__), '..')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'phonegap')
require 'spec_helpers'
require 'yaml_front_matter'
require 'fileutils'

describe YamlFrontMatter do
  include SpecHelpers
  
  before :all do
    @no_yaml_file = {
      :source => File.join(spec_input_directory, 'index_no_yaml.md'),
      :tmp    => File.join(spec_tmp_directory,   'index_no_yaml.md')
    }
    
    @yaml_file = {
      :source => File.join(spec_input_directory, 'index.md'),
      :tmp    => File.join(spec_tmp_directory,   'index.md')
    }
    
    FileUtils.mkdir spec_tmp_directory
    FileUtils.cp @no_yaml_file[:source], @no_yaml_file[:tmp]
    FileUtils.cp @yaml_file[:source],    @yaml_file[:tmp]
    
    @yaml_front_matter = YamlFrontMatter.new
  end
  
  it 'should skip files with no YAML Front Matter' do
    @yaml_front_matter.run(@no_yaml_file[:tmp]).should == {}

    expected_data = File.read(@no_yaml_file[:source])
    actual_data   = File.read(@no_yaml_file[:tmp])
    
    actual_data.should == expected_data
  end
  
  it 'should parse files with YAML Front Matter' do
    yaml = @yaml_front_matter.run(@yaml_file[:tmp])
    
    yaml.should be_kind_of(Hash)
    yaml['platforms'].should == 'Android, BlackBerry, iOS'
    yaml['type'].should      == 'Function'
  end
  
  it 'should strip YAML Front Matter from the file' do
    File.read(@yaml_file[:source]).should match(/\A\W+/)
    File.read(@yaml_file[:tmp]).should_not match(/\A\W+/) # No whitespace
  end
  
  after :all do
    FileUtils.rm_rf spec_tmp_directory
  end
end