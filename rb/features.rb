# Numbers SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module NumbersFeatures
  def self.make_feature(name)
    case name
    when "base"
      NumbersBaseFeature.new
    when "test"
      NumbersTestFeature.new
    else
      NumbersBaseFeature.new
    end
  end
end
