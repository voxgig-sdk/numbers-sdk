// Typed models for the Numbers SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface GetNumberFact {
  found?: boolean
  number?: number
  text?: string
  type?: string
}

export interface GetNumberFactLoadMatch {
  number: string
  type: string
}

export interface GetNumberTrivia {
  found?: boolean
  number?: number
  text?: string
  type?: string
}

export interface GetNumberTriviaLoadMatch {
  id: string
}

export interface Random {
  found?: boolean
  number?: number
  text?: string
  type?: string
}

export interface RandomLoadMatch {
  id: string
}

