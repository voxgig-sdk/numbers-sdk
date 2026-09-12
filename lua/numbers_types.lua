-- Typed models for the Numbers SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class GetNumberFact
---@field found? boolean
---@field id? string
---@field number? number
---@field text? string
---@field type? string

---@class GetNumberFactLoadMatch
---@field number string
---@field type string
---@field fragment? boolean
---@field json? boolean
---@field notfound? string

---@class GetNumberTrivia
---@field found? boolean
---@field id? string
---@field number? number
---@field text? string
---@field type? string

---@class GetNumberTriviaLoadMatch
---@field id string
---@field fragment? boolean
---@field json? boolean
---@field notfound? string

---@class Random
---@field found? boolean
---@field id? string
---@field number? number
---@field text? string
---@field type? string

---@class RandomLoadMatch
---@field id string
---@field fragment? boolean
---@field json? boolean
---@field max? number
---@field min? number

local M = {}

return M
