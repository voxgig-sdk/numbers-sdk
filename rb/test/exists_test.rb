# Numbers SDK exists test

require "minitest/autorun"
require_relative "../Numbers_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = NumbersSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
