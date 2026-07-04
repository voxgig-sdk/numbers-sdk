-- Typed models for the Numbers SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetNumberFact
---@field found? boolean
---@field number? number
---@field text? string
---@field type? string

---@class GetNumberFactLoadMatch
---@field number string
---@field type string

---@class GetNumberTrivia
---@field found? boolean
---@field number? number
---@field text? string
---@field type? string

---@class GetNumberTriviaLoadMatch
---@field id string

---@class Random
---@field found? boolean
---@field number? number
---@field text? string
---@field type? string

---@class RandomLoadMatch
---@field id string

local M = {}

return M
