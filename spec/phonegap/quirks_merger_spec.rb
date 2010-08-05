$: << File.join(File.dirname(__FILE__), '..')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'phonegap')
require 'spec_helpers'
require 'quirks_merger'

describe QuirksMerger do
  include SpecHelpers
  
  before :each do
    FileUtils.cp_r spec_input_directory, spec_tmp_directory
    @merger = QuirksMerger.new
  end
  
  it 'should not merge platform-only files' do
    platform_file = File.join spec_tmp_directory, 'android', 'droid', 'text_to_speech.md'
    File.exists?(platform_file).should be_true
    
    @merger.run platform_file
    File.exists?(platform_file).should be_true
  end
  
  it 'should merge phonegap-core files' do
    platform_file = File.join spec_tmp_directory, 'android', 'accelerometer', 'watch_acceleration.md'
    
    # Merge the file
    File.exists?(platform_file).should be_true
    @merger.run platform_file
    File.exists?(platform_file).should be_false
    
    # Verify that it is a concatination
    cat_data      = File.read( File.join spec_tmp_directory,      'phonegap', 'accelerometer', 'watch_acceleration.md' )
    expected_data = File.read( File.join spec_expected_directory, 'phonegap', 'accelerometer', 'watch_acceleration.md' )
    cat_data.should == expected_data
  end
  
  after :each do
    FileUtils.rm_rf spec_tmp_directory
  end
end