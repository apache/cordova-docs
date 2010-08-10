require 'rubygems'
require 'nokogiri'

class TableOfContents
  def run(filename)
    doc = Nokogiri::HTML(File.read filename)
    
    # Find all the H1 and H2 elements in the content area
    #
    source_contents = []
    #doc.xpath("id('content')/h1 | id('content')/h2").each do |tag|
    doc.xpath("id('content')/h1").each do |tag|
      source_contents.push( (tag.name == 'h1') ? tag.content : "    - #{tag.content}" )
    end
    return nil if source_contents.count <= 0
    
    # Find the parent that will hold the select element
    #
    target_select = doc.css('#header2 > small')[0]
    return nil if target_select.nil?
    
    # Generate Table of Contents
    #
    toc = '<select>'
    source_contents.each { |item| toc += "<option value=\"#{item}\">#{item}</option>" }
    toc += '</select>'
    
    # Save Table of Contents
    #
    target_select.inner_html = toc
    File.open(filename, 'w') { |file| file.write doc.to_html}
    
    return source_contents
  end
end