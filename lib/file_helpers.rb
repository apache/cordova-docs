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
