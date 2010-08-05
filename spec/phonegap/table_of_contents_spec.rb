$: << File.join(File.dirname(__FILE__), '..', '..', 'lib')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'phonegap')
require 'table_of_contents'
require 'spec_helpers'

describe TableOfContents do
  include SpecHelpers
  
  it 'should define run' do
    TableOfContents.new.should respond_to 'run'
  end
end