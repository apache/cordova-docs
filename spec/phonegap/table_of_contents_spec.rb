$: << File.join(File.dirname(__FILE__), '..', '..', 'lib')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'phonegap')
require 'table_of_contents'
require 'spec_helpers'

describe TableOfContents do
  before :each do
    directory = Helper::create_tmp_directory_assets(__FILE__)
    @file = {
      :normal    => File.join(directory, 'example.html'),
      :no_source => File.join(directory, 'example_no_source.html'),
      :no_target => File.join(directory, 'example_no_target.html')
    }
    @toc = TableOfContents.new
  end
  
  it 'should find the table of content values' do
    contents = @toc.run @file[:normal]
    contents.should have(32).items
  end

  it 'should find all <h1> elements' do
    contents = @toc.run @file[:normal]
	
    headers = []
    contents.each { |header| headers.push(header) if (header =~ /-/).nil? }
    headers.should have(8).items
  end

  it 'should find all <h2> elements' do
    contents = @toc.run @file[:normal]
	
    headers = []
    contents.each { |header| headers.push(header) if nil != (header =~ /-/) and (header =~ /-/) > 0 }
    headers.should have(24).items
  end
  
  it 'should ignore whitespace in the target name' do
    contents = @toc.run @file[:normal]
    contents = contents.reverse

    names = []
    doc = Nokogiri::HTML(File.read @file[:normal])
    doc.xpath("id('content')/h1 | id('content')/h2").each do |tag| 
      tag.child[:name].should == contents.pop.match(/value=\"([^\"]*)\"/)[1]
    end
  end
   
  it 'should create a HTML select element' do
    @toc.run @file[:normal]
    
    doc = Nokogiri::HTML(File.read @file[:normal])
    doc.css('#subheader > small > select').should have(1).item
  end
  
  it 'should skip files with no source (no H1 or H2 available)' do
    @toc.run(@file[:no_source]).should be_nil
  end
  
  it 'should skip files with no target (no <select> available)' do
    @toc.run(@file[:no_target]).should be_nil
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end