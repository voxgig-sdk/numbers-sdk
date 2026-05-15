# Numbers SDK utility: make_context
require_relative '../core/context'
module NumbersUtilities
  MakeContext = ->(ctxmap, basectx) {
    NumbersContext.new(ctxmap, basectx)
  }
end
