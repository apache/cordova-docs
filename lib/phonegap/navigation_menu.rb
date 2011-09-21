$: << File.join(File.dirname(__FILE__))
require 'rubygems'
require 'nokogiri'
require 'fileutils'
require 'file_helpers'

class NavigationMenu
  include FileHelpers

  def initialize(options = {})
    filename = Dir.glob(File.join tmp_directory, '**', 'index.md.html')[0]
    doc      = Nokogiri::HTML(File.read(filename))
    @li_set  = Nokogiri::XML::NodeSet.new doc

    doc.css('ul:first h2 a').each do |element|
      li = Nokogiri::XML::Node.new 'li', doc
      li.add_child element
      @li_set.push li
    end
  end

  def run(filename)
    doc = Nokogiri::HTML(File.read(filename))

    ul_element = doc.css('#sidebar ul:first')[0]
    ul_element.add_child @li_set

    File.open(filename, 'w') { |file| file.write doc.to_html }

    return doc.to_html
  end
end
