$: << File.join(File.dirname(__FILE__), '..', '..', 'lib')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'phonegap')
require 'prettify'
require 'spec_helpers'

describe Prettify do
  before :each do
    directory = Helper::create_tmp_directory_assets(__FILE__)
    @file = {
      :normal => File.join(directory, 'example.html'),
    }
    @prettify = Prettify.new
  end
  
  it 'should find some code blocks' do
    code_tags = @prettify.run @file[:normal]
    code_tags.should have_at_least(1).item
  end
  
  it 'should add the prettyprint class to each code block' do
    @prettify.run @file[:normal]
    
    doc = Nokogiri::HTML(File.read @file[:normal])
    doc.css('#content pre.prettyprint').should have_at_least(1).item
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end