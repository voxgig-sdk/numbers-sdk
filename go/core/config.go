package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Numbers",
			"slug": "numbers",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "http://numbersapi.com",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"get_number_fact": map[string]any{},
				"get_number_trivia": map[string]any{},
				"random": map[string]any{},
			},
		},
		"entity": map[string]any{
			"get_number_fact": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "found",
						"short": "Whether a fact was found for the requested number",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "number",
						"short": "The number the fact is about",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "text",
						"short": "The fact about the number",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the fact",
						"type": "`$STRING`",
					},
				},
				"name": "get_number_fact",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "42",
											"kind": "param",
											"name": "number",
											"orig": "number",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "type",
											"orig": "type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "fragment",
											"orig": "fragment",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "default",
											"kind": "query",
											"name": "notfound",
											"orig": "notfound",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{number}/{type}",
								"parts": []any{
									"{number}",
									"{type}",
								},
								"select": map[string]any{
									"exist": []any{
										"fragment",
										"json",
										"notfound",
										"number",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"get_number_trivia": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "found",
						"short": "Whether a fact was found for the requested number",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "number",
						"short": "The number the fact is about",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "text",
						"short": "The trivia fact about the number",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the fact",
						"type": "`$STRING`",
					},
				},
				"name": "get_number_trivia",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "42",
											"kind": "param",
											"name": "id",
											"orig": "number",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "fragment",
											"orig": "fragment",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "default",
											"kind": "query",
											"name": "notfound",
											"orig": "notfound",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{number}",
								"parts": []any{
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"number": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"fragment",
										"id",
										"json",
										"notfound",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"random": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "found",
						"short": "Whether a fact was found",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "number",
						"short": "The number the fact is about",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "text",
						"short": "The fact about the number",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of the fact",
						"type": "`$STRING`",
					},
				},
				"name": "random",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "fragment",
											"orig": "fragment",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "json",
											"orig": "json",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "max",
											"orig": "max",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "min",
											"orig": "min",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/random/{type}",
								"parts": []any{
									"random",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"type": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"fragment",
										"id",
										"json",
										"max",
										"min",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
