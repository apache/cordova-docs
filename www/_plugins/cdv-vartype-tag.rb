module Jekyll
  class CdvVarTypeTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text.downcase.strip
    end

    def render(context)
      "<span class=\"cdv-var-type #{@text}\">#{@text.capitalize}</span>"
    end
  end
end

Liquid::Template.register_tag('cdv_vartype', Jekyll::CdvVarTypeTag)
