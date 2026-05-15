# Numbers SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

NumbersUtility.registrar = ->(u) {
  u.clean = NumbersUtilities::Clean
  u.done = NumbersUtilities::Done
  u.make_error = NumbersUtilities::MakeError
  u.feature_add = NumbersUtilities::FeatureAdd
  u.feature_hook = NumbersUtilities::FeatureHook
  u.feature_init = NumbersUtilities::FeatureInit
  u.fetcher = NumbersUtilities::Fetcher
  u.make_fetch_def = NumbersUtilities::MakeFetchDef
  u.make_context = NumbersUtilities::MakeContext
  u.make_options = NumbersUtilities::MakeOptions
  u.make_request = NumbersUtilities::MakeRequest
  u.make_response = NumbersUtilities::MakeResponse
  u.make_result = NumbersUtilities::MakeResult
  u.make_point = NumbersUtilities::MakePoint
  u.make_spec = NumbersUtilities::MakeSpec
  u.make_url = NumbersUtilities::MakeUrl
  u.param = NumbersUtilities::Param
  u.prepare_auth = NumbersUtilities::PrepareAuth
  u.prepare_body = NumbersUtilities::PrepareBody
  u.prepare_headers = NumbersUtilities::PrepareHeaders
  u.prepare_method = NumbersUtilities::PrepareMethod
  u.prepare_params = NumbersUtilities::PrepareParams
  u.prepare_path = NumbersUtilities::PreparePath
  u.prepare_query = NumbersUtilities::PrepareQuery
  u.result_basic = NumbersUtilities::ResultBasic
  u.result_body = NumbersUtilities::ResultBody
  u.result_headers = NumbersUtilities::ResultHeaders
  u.transform_request = NumbersUtilities::TransformRequest
  u.transform_response = NumbersUtilities::TransformResponse
}
