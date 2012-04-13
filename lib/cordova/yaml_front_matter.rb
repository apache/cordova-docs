require 'yaml'

class YamlFrontMatter
  def initialize
  end
  
  def run(file_path)
    content = IO.read(file_path)
    yaml    = {}
    
    # This will also strip out any leading whitespace
    # Copied the RegEx from [Jekyll](http://github.com/mojombo/jekyll)
    #
    if content =~ /^(---\s*\n.*?\n?)^(---\s*$\n?)/m
      content = content[($1.size + $2.size)..-1]
      yaml    = YAML.load($1)
      
      # Save the file
      File.open(file_path, 'w+') do |file|
        file.write content
      end
    end
    
    yaml
  end
end