require 'rubygems'
require 'nokogiri'

class Prettify
  def run(filename)
    doc = Nokogiri::HTML(File.read(filename))
    
    code_tags = doc.css('#content pre').each do |tag|
      tag['class'] = 'prettyprint'
    end

    File.open(filename, 'w') { |file| file.write doc.to_html }
    
    return code_tags
  end
end