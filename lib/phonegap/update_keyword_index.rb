require 'rubygems'
require 'nokogiri'
require 'fileutils'

class UpdateKeywordIndex
  attr_accessor :header_title
  attr_accessor :content_title
  attr_accessor :filename
  
  def initialize
    @header_title  = 'Keyword Index'
    @content_title = 'Keyword Index'
  end
  
  def run(filename)
    return false unless File.basename(filename) == '_index.html'
    
    doc = Nokogiri::HTML(File.read(filename))
    
    element = doc.css('#subheader > h1')[0]
    element.content = @header_title unless element.nil?
    
    element = doc.css('#content > h1')[0]
    element.content = @content_title unless element.nil?
    
    element = doc.css('#content > hr')[0]
    element.remove unless element.nil?
    
    # Update referenced to index.md.html
    # Then save
    File.open(filename, 'w') { |file| file.write doc.to_html.gsub('index.md.html', 'index.html') }
    
    return true
  end
end