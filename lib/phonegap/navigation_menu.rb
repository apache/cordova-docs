$: << File.join(File.dirname(__FILE__))
require 'rubygems'
require 'nokogiri'
require 'fileutils'
require 'file_helpers'

class NavigationMenu
  include FileHelpers

  def initialize(options = {})
    filename = Dir.glob(File.join tmp_directory, '**', 'index.md.html')[0]
    html          = Nokogiri::HTML(File.read(filename))
    @sidebar_html = []

    html.css('ul:first h2').each do |element|
        @sidebar_html.push "<li>#{element.inner_html}</li>"
    end
  end

  def run(filename)
    doc = Nokogiri::HTML(File.read(filename))

    ul_element = doc.css('#sidebar ul:first')[0]
    ul_element.inner_html = @sidebar_html.join("\n")

    File.open(filename, 'w') { |file| file.write doc.to_html }

    return doc.to_html
  end
end
