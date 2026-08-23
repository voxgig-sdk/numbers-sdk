
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Numbers',
        slug: "numbers",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "http://numbersapi.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      get_number_fact: {
      },

      get_number_trivia: {
      },

      random: {
      },

    }
  }


  entity = {
    "get_number_fact": {
      "fields": [
        {
          "name": "found",
          "short": "Whether a fact was found for the requested number",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "number",
          "short": "The number the fact is about",
          "type": "`$NUMBER`"
        },
        {
          "name": "text",
          "short": "The fact about the number",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "The type of the fact",
          "type": "`$STRING`"
        }
      ],
      "name": "get_number_fact",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "42",
                    "kind": "param",
                    "name": "number",
                    "orig": "number",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "type",
                    "orig": "type",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": false,
                    "kind": "query",
                    "name": "fragment",
                    "orig": "fragment",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "json",
                    "orig": "json",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "default",
                    "kind": "query",
                    "name": "notfound",
                    "orig": "notfound",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{number}/{type}",
              "parts": [
                "{number}",
                "{type}"
              ],
              "select": {
                "exist": [
                  "fragment",
                  "json",
                  "notfound",
                  "number",
                  "type"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "get_number_trivia": {
      "fields": [
        {
          "name": "found",
          "short": "Whether a fact was found for the requested number",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "number",
          "short": "The number the fact is about",
          "type": "`$NUMBER`"
        },
        {
          "name": "text",
          "short": "The trivia fact about the number",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "The type of the fact",
          "type": "`$STRING`"
        }
      ],
      "name": "get_number_trivia",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "42",
                    "kind": "param",
                    "name": "id",
                    "orig": "number",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": false,
                    "kind": "query",
                    "name": "fragment",
                    "orig": "fragment",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "json",
                    "orig": "json",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "default",
                    "kind": "query",
                    "name": "notfound",
                    "orig": "notfound",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{number}",
              "parts": [
                "{id}"
              ],
              "rename": {
                "param": {
                  "number": "id"
                }
              },
              "select": {
                "exist": [
                  "fragment",
                  "id",
                  "json",
                  "notfound"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "random": {
      "fields": [
        {
          "name": "found",
          "short": "Whether a fact was found",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "number",
          "short": "The number the fact is about",
          "type": "`$NUMBER`"
        },
        {
          "name": "text",
          "short": "The fact about the number",
          "type": "`$STRING`"
        },
        {
          "name": "type",
          "short": "The type of the fact",
          "type": "`$STRING`"
        }
      ],
      "name": "random",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "type",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "example": false,
                    "kind": "query",
                    "name": "fragment",
                    "orig": "fragment",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": false,
                    "kind": "query",
                    "name": "json",
                    "orig": "json",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "kind": "query",
                    "name": "max",
                    "orig": "max",
                    "type": "`$INTEGER`"
                  },
                  {
                    "kind": "query",
                    "name": "min",
                    "orig": "min",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/random/{type}",
              "parts": [
                "random",
                "{id}"
              ],
              "rename": {
                "param": {
                  "type": "id"
                }
              },
              "select": {
                "exist": [
                  "fragment",
                  "id",
                  "json",
                  "max",
                  "min"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

