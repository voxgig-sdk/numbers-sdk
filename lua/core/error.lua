-- Numbers SDK error

local NumbersError = {}
NumbersError.__index = NumbersError


function NumbersError.new(code, msg, ctx)
  local self = setmetatable({}, NumbersError)
  self.is_sdk_error = true
  self.sdk = "Numbers"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function NumbersError:error()
  return self.msg
end


function NumbersError:__tostring()
  return self.msg
end


return NumbersError
