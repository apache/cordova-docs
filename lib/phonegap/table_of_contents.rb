require 'rubygems'
require 'nokogiri'

class TableOfContents
  def run(filename)
    doc = Nokogiri::HTML(File.read(filename))
    
    # Find all the H1 and H2 elements in the content area
    #
    source_contents = []
    current_h1 = ""
    indentation = '&nbsp;' * 6
    
    doc.xpath("id('content')/h1 | id('content')/h2").each do |tag| 
      if (tag.name == 'h1') then
        current_h1 = tag.content
        cur = "<option value=\"#{ tag.child[:name] }\">#{tag.content}</option>"
      else
        # Remove all leading and trailing non-word characters
        # Replace all inner non-word characters with an underscore
        s = tag.content.gsub(/^\W+|\W+$/, '').gsub(/\W+/, '_').downcase
        cur = "<option value=\"#{current_h1}_#{s}\">#{indentation}- #{tag.content}</option>"
        tag.inner_html = "<a name=\"#{current_h1}_#{s}\">#{tag.content}</a>"
      end
      source_contents.push( cur )
    end
    
    # Return if one or less elments found (useless selection box)
    #
    return nil if source_contents.length <= 1
    
    # Find the parent that will hold the select element
    #
    target_select = doc.css('#subheader > small')[0]
    return nil if target_select.nil?
    
    # Generate Table of Contents
    #
    toc = '<select>'
    source_contents.each { |item| toc += item}
    toc += '</select>'
    
    # Save Table of Contents
    #
    target_select.inner_html = toc
    File.open(filename, 'w') { |file| file.write doc.to_html}
    
    return source_contents
  end
end
