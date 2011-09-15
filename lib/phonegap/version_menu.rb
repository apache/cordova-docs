require 'rubygems'
require 'json'
require 'nokogiri'
require 'fileutils'

class VersionMenu
  def initialize(options = {})
    @versions  = {}
    @languages = {}
    docs_path = File.expand_path File.join(__FILE__, '..', '..', '..', 'docs')

    # build hash of languages and versions
    Dir.glob(File.join docs_path, '**', 'config.json').each do |file|
      version  = File.basename(File.dirname file)
      lang     = File.basename(File.dirname(File.dirname file))
      language = JSON.parse(IO.read(file))['language']

      if language
        @versions[language] ||= []
        @versions[language].push version
        @languages[language] = lang
      else
        puts "Warning: The key 'language' was not defined in #{file}"
      end
    end

    @html = []

    # generate HTML <select> output
    @versions.keys.sort.each do |language|
      @html.push "<optgroup label=\"#{language}\" value=\"#{@languages[language]}\">"

      @versions[language].sort.reverse.each do |version|
        if version == options[:version]
            @html.push "  <option value=\"#{version}\" selected>#{version}</option>"
        else
            @html.push "  <option value=\"#{version}\">#{version}</option>"
        end
      end

      @html.push "</optgroup>"
    end

    @html = @html.join("\n").concat("\n")
  end

  def run(filename)
    doc = Nokogiri::HTML(File.read(filename))

    select_element = doc.css('#header small select')[0]
    select_element.inner_html = @html

    File.open(filename, 'w') { |file| file.write doc.to_html }

    return doc.to_html
  end
end
