require 'rubygems'
require 'nokogiri'

class AddTitle
  def run(filename)
    doc = Nokogiri::HTML(File.read(filename))
    
    title_source = doc.css('#content > h1')[0]
    return nil if title_source.nil?
    
    title_target = doc.css('#subheader > h1')[0]
    return nil if title_target.nil?
    
    title_target.content = title_source.content
    File.open(filename, 'w') { |file| file.write doc.to_html }
    
    return title_source.content
  end
end