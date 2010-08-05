module SpecHelpers
  def spec_input_directory
    File.join root_directory, 'spec_data', 'docs'
  end
  
  def spec_output_directory
    File.join root_directory, 'spec_tmp'
  end
  
  def spec_tmp_directory
    File.expand_path( File.join root_directory, '..', 'tmp' )
  end
  
  def spec_expected_directory
    File.join root_directory, 'spec_data', 'expected_docs'
  end
  
  def spec_empty_output_directory
    FileUtils.rm_rf spec_output_directory
  end
  
  protected
  
  def root_directory
    File.expand_path File.dirname(__FILE__)
  end
end