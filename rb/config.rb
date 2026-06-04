# Numbers SDK configuration

module NumbersConfig
  def self.make_config
    {
      "main" => {
        "name" => "Numbers",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "http://numbersapi.com",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "get_number_fact" => {},
          "get_number_trivia" => {},
          "random" => {},
        },
      },
      "entity" => {
        "get_number_fact" => {
          "fields" => [
            {
              "name" => "found",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "number",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "text",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "type",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
          ],
          "name" => "get_number_fact",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "42",
                        "kind" => "param",
                        "name" => "number",
                        "orig" => "number",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                      {
                        "kind" => "param",
                        "name" => "type",
                        "orig" => "type",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                    "query" => [
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "fragment",
                        "orig" => "fragment",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                        "active" => true,
                      },
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "json",
                        "orig" => "json",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                        "active" => true,
                      },
                      {
                        "example" => "default",
                        "kind" => "query",
                        "name" => "notfound",
                        "orig" => "notfound",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/{number}/{type}",
                  "parts" => [
                    "{number}",
                    "{type}",
                  ],
                  "select" => {
                    "exist" => [
                      "fragment",
                      "json",
                      "notfound",
                      "number",
                      "type",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "get_number_trivia" => {
          "fields" => [
            {
              "name" => "found",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "number",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "text",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "type",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
          ],
          "name" => "get_number_trivia",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => "42",
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "number",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                    "query" => [
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "fragment",
                        "orig" => "fragment",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                        "active" => true,
                      },
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "json",
                        "orig" => "json",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                        "active" => true,
                      },
                      {
                        "example" => "default",
                        "kind" => "query",
                        "name" => "notfound",
                        "orig" => "notfound",
                        "reqd" => false,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/{number}",
                  "parts" => [
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "number" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "fragment",
                      "id",
                      "json",
                      "notfound",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "random" => {
          "fields" => [
            {
              "name" => "found",
              "req" => false,
              "type" => "`$BOOLEAN`",
              "active" => true,
              "index$" => 0,
            },
            {
              "name" => "number",
              "req" => false,
              "type" => "`$NUMBER`",
              "active" => true,
              "index$" => 1,
            },
            {
              "name" => "text",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 2,
            },
            {
              "name" => "type",
              "req" => false,
              "type" => "`$STRING`",
              "active" => true,
              "index$" => 3,
            },
          ],
          "name" => "random",
          "op" => {
            "load" => {
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "type",
                        "reqd" => true,
                        "type" => "`$STRING`",
                        "active" => true,
                      },
                    ],
                    "query" => [
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "fragment",
                        "orig" => "fragment",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                        "active" => true,
                      },
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "json",
                        "orig" => "json",
                        "reqd" => false,
                        "type" => "`$BOOLEAN`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "max",
                        "orig" => "max",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                      {
                        "kind" => "query",
                        "name" => "min",
                        "orig" => "min",
                        "reqd" => false,
                        "type" => "`$INTEGER`",
                        "active" => true,
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/random/{type}",
                  "parts" => [
                    "random",
                    "{id}",
                  ],
                  "rename" => {
                    "param" => {
                      "type" => "id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "fragment",
                      "id",
                      "json",
                      "max",
                      "min",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "active" => true,
                  "index$" => 0,
                },
              ],
              "input" => "data",
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    NumbersFeatures.make_feature(name)
  end
end
