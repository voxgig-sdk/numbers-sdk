// Typed models for the Numbers SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// GetNumberFact is the typed data model for the get_number_fact entity.
type GetNumberFact struct {
	Found *bool `json:"found,omitempty"`
	Number *float64 `json:"number,omitempty"`
	Text *string `json:"text,omitempty"`
	Type *string `json:"type,omitempty"`
}

// GetNumberFactLoadMatch is the typed request payload for GetNumberFact.LoadTyped.
type GetNumberFactLoadMatch struct {
	Number string `json:"number"`
	Type string `json:"type"`
}

// GetNumberTrivia is the typed data model for the get_number_trivia entity.
type GetNumberTrivia struct {
	Found *bool `json:"found,omitempty"`
	Number *float64 `json:"number,omitempty"`
	Text *string `json:"text,omitempty"`
	Type *string `json:"type,omitempty"`
}

// GetNumberTriviaLoadMatch is the typed request payload for GetNumberTrivia.LoadTyped.
type GetNumberTriviaLoadMatch struct {
	Id string `json:"id"`
}

// Random is the typed data model for the random entity.
type Random struct {
	Found *bool `json:"found,omitempty"`
	Number *float64 `json:"number,omitempty"`
	Text *string `json:"text,omitempty"`
	Type *string `json:"type,omitempty"`
}

// RandomLoadMatch is the typed request payload for Random.LoadTyped.
type RandomLoadMatch struct {
	Id string `json:"id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
