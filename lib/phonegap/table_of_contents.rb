require 'rubygems'
require 'nokogiri'

class TableOfContents
  def run(filename)
    doc        = Nokogiri::HTML(File.read(filename))
    option_set = Nokogiri::XML::NodeSet.new(doc)
    
    # Find all the H1 and H2 elements in the content area
    #
    current_h1  = ""
    indentation = "&nbsp;" * 6
    
    doc.xpath("id('content')/h1 | id('content')/h2").each do |tag| 
      if (tag.name == 'h1' && tag.child[:name]) then
        current_h1 = tag.content

        option = Nokogiri::XML::Node.new 'option', doc
        option['value'] = tag.child[:name]
        option.content = tag.content
        option_set.push option
      else
        # Remove all leading and trailing non-word characters
        # Replace all inner non-word characters with an underscore
        s = tag.content.gsub(/^\W+|\W+$/, '').gsub(/\W+/, '_').downcase

        option = Nokogiri::XML::Node.new 'option', doc
        option['value'] = "#{current_h1}_#{s}"
        option.content = "#{indentation}- #{tag.content}"
        option_set.push option

        a = Nokogiri::XML::Node.new 'a', doc
        a['name'] = "#{current_h1}_#{s}"
        a.content = tag.content

        tag.content = ''
        tag.add_child a
      end
    end
    
    # Return if one or less elments found (useless selection box)
    #
    return nil if option_set.length <= 1
    
    # Add select menu to the subheader
    #
    select = Nokogiri::XML::Node.new 'select', doc
    select.add_child option_set
    subheader = doc.css('#subheader > small')[0]
    subheader.add_child select
    
    # Save Table of Contents
    # Add Nokogiri hack to properly render spaces
    File.open(filename, 'w') { |file| file.write doc.to_html.gsub('&amp;nbsp;', '&nbsp;') }
    
    return option_set
  end
end
