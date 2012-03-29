require 'rubygems'
require 'json'
require 'nokogiri'
require 'fileutils'

class VersionMenu
  def initialize(options = {})
      @version  = options[:version]
      @language = options[:lang]
  end

  def run(filename)
    doc = Nokogiri::HTML(File.read(filename))

    select = doc.css('#header small select')[0]
    select.add_child generate_set(doc)

    File.open(filename, 'w') { |file| file.write doc.to_html }

    return doc.to_html
  end

  private

  def generate_set doc
    optgroup_set = Nokogiri::XML::NodeSet.new doc
    docs_path    = File.expand_path File.join(__FILE__, '..', '..', '..', 'docs')
    versions     = {}
    languages    = {}
    html         = []

    # build hash of languages and versions
    Dir.glob(File.join docs_path, '**', 'config.json').each do |file|
      version  = File.basename(File.dirname file)
      lang     = File.basename(File.dirname(File.dirname file))
      language = JSON.parse(IO.read(file))['language']

      if language
        versions[language] ||= []
        versions[language].push version
        languages[language] = lang
      else
        puts "Warning: The key 'language' was not defined in #{file}"
      end
    end

    # generate HTML <select> output
    versions.keys.sort.each do |language|
      optgroup = Nokogiri::XML::Node.new 'optgroup', doc
      optgroup['label'] = language
      optgroup['value'] = languages[language]
      optgroup_set.push optgroup

      versions[language].sort.reverse.each do |v|
        option = Nokogiri::XML::Node.new 'option', doc
        option['selected'] = 'selected' if @version == v && @language == languages[language]
        option['value'] = v;
        option.content = v
        optgroup.add_child option
      end
    end

    return optgroup_set
  end
end
