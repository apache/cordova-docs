$:.unshift File.join(File.dirname(__FILE__), '..')
require 'spec_helpers'
require 'yaml_front_matter'

describe YamlFrontMatter do
  before :each do
    directory = Helper::create_tmp_directory_assets(__FILE__)
    @file = {
      :yaml    => File.join(directory, 'has_yaml.md'),
      :no_yaml => File.join(directory, 'no_yaml.md')
    }
    @yaml_front_matter = YamlFrontMatter.new
  end
    
  it 'should skip files with no YAML Front Matter' do
    expected_data = File.read(@file[:no_yaml])
    @yaml_front_matter.run(@file[:no_yaml]).should == {}
    actual_data = File.read(@file[:no_yaml])
    
    actual_data.should == expected_data
  end
  
  it 'should parse files with YAML Front Matter' do
    @yaml_front_matter.run(@file[:yaml]).should == {
      'platforms' => 'Android, BlackBerry, iOS',
      'type'      => 'Function'
    }
  end
  
  it 'should strip YAML Front Matter from the file' do
    File.read(@file[:yaml]).should match(/\A\W+/)
    @yaml_front_matter.run(@file[:yaml])
    File.read(@file[:yaml]).should_not match(/\A\W+/) # No whitespace
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end