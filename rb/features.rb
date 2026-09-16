# Numbers SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module NumbersFeatures
  def self.make_feature(name)
    case name
    when "base"
      NumbersBaseFeature.new
    when "ratelimit"
      NumbersRatelimitFeature.new
    when "retry"
      NumbersRetryFeature.new
    when "test"
      NumbersTestFeature.new
    when "timeout"
      NumbersTimeoutFeature.new
    else
      NumbersBaseFeature.new
    end
  end
end
