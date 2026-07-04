# frozen_string_literal: true

# Typed models for the Numbers SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# GetNumberFact entity data model.
#
# @!attribute [rw] found
#   @return [Boolean, nil]
#
# @!attribute [rw] number
#   @return [Float, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
GetNumberFact = Struct.new(
  :found,
  :number,
  :text,
  :type,
  keyword_init: true
)

# Request payload for GetNumberFact#load.
#
# @!attribute [rw] number
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
GetNumberFactLoadMatch = Struct.new(
  :number,
  :type,
  keyword_init: true
)

# GetNumberTrivia entity data model.
#
# @!attribute [rw] found
#   @return [Boolean, nil]
#
# @!attribute [rw] number
#   @return [Float, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
GetNumberTrivia = Struct.new(
  :found,
  :number,
  :text,
  :type,
  keyword_init: true
)

# Request payload for GetNumberTrivia#load.
#
# @!attribute [rw] id
#   @return [String]
GetNumberTriviaLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Random entity data model.
#
# @!attribute [rw] found
#   @return [Boolean, nil]
#
# @!attribute [rw] number
#   @return [Float, nil]
#
# @!attribute [rw] text
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Random = Struct.new(
  :found,
  :number,
  :text,
  :type,
  keyword_init: true
)

# Request payload for Random#load.
#
# @!attribute [rw] id
#   @return [String]
RandomLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

