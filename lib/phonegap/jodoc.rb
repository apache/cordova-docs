class JoDoc
  JO_DOC_CLI    = 'jodoc'
  TEMPLATE_PATH = File.expand_path File.join(File.dirname(__FILE__), '..', '..', 'template', 'docs' )
  
  attr_accessor :input_directory
  attr_accessor :output_directory
  attr_accessor :template_directory
  
  def initialize(input_directory, output_directory, options)
    options[:lang] ||= 'en'

    @input_directory    = input_directory
    @output_directory   = output_directory
    @template_directory = File.join TEMPLATE_PATH, options[:lang]

    check_dependencies
  end
  
  def run
    # Copy HTML template assets
    FileUtils.cp_r @template_directory, @output_directory

    # Run joDoc
    FileUtils.cd @input_directory do
      `jodoc --output #{@output_directory} --title "PhoneGap API Documentation" --template #{@template_directory}/index.html ./`
    end
  end
  
  protected
  
  def check_dependencies
    die 'The jodoc script is not in your path' unless command_exists?(JO_DOC_CLI)

    [@input_directory, @template_directory].each do |directory|
      die "The directory #{directory}/ should exist." unless File.directory? directory
    end
  end
  
  def command_exists?(command)
    system("which #{command} > /dev/null 2>/dev/null")
  end
  
  def die(message)
    raise StandardError, message
  end
end
