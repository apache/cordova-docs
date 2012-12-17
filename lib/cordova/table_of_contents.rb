# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
# 
#  http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.

require 'rubygems'
require 'nokogiri'
require 'uri'

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
        option['value'] = URI.escape(tag.child[:name])
        option.content = tag.content
        option_set.push option
      else
        # Remove all leading and trailing non-word characters
        # Replace all inner non-word characters with an underscore
        s = tag.content.gsub(/^\W+|\W+$/, '').gsub(/\W+/, '_').downcase

        option = Nokogiri::XML::Node.new 'option', doc
        option['value'] = URI.escape("#{current_h1}_#{s}")
        option.content = "#{indentation}- #{tag.content}"
        option_set.push option

        a = Nokogiri::XML::Node.new 'a', doc
        a['name'] = "#{current_h1}_#{s}"
        a.content = tag.content

        tag.content = ''
        tag.add_child a
      end
    end
    
    # Return if one or less elements found (useless selection box)
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
