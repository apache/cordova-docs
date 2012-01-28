$: << File.join(File.dirname(__FILE__))
require 'rubygems'
require 'nokogiri'
require 'fileutils'
require 'file_helpers'

class NavigationMenu
  include FileHelpers

  def initialize(options = {})
    @sections = []

    filename = Dir.glob(File.join tmp_directory, '**', 'index.md.html')[0]
    doc     = Nokogiri::HTML(File.read(filename))

    h1_set   = doc.css('#home > h1')
    ul_set   = doc.css('#home > ul')
    count    = h1_set.length

    count.times do |index|
      links = []
      ul_set[index].css('li > h2 > a').each { |a| links.push(a) }

      @sections.push({
        'title' => h1_set[index].text,
        'links' => links
      })
    end
  end

  def run(filename)
    doc = Nokogiri::HTML(File.read(filename))

    @sections.each do |section|
      insert_title(section['title'], doc)
      insert_links(section['links'], doc)
    end

    File.open(filename, 'w') { |file| file.write doc.to_html }

    return doc.to_html
  end

  def insert_title(title, doc)
    h1 = Nokogiri::XML::Node.new 'h1', doc
    h1.content = title
    doc.css('#sidebar').first.add_child(h1)
  end

  def insert_links(links, doc)
    ul = Nokogiri::XML::Node.new 'ul', doc

    links.each do |link|
      li = Nokogiri::XML::Node.new 'li', doc
      li.add_child(link)
      ul.add_child(li)
    end

    doc.css('#sidebar').first.add_child(ul)
  end
end
