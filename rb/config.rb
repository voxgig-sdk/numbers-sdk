# Numbers SDK configuration

module NumbersConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
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
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "number",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "text",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
          ],
          "name" => "get_number_fact",
          "op" => {
            "load" => {
              "input" => "data",
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
                      },
                      {
                        "kind" => "param",
                        "name" => "type",
                        "orig" => "type",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                    "query" => [
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "fragment",
                        "orig" => "fragment",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "json",
                        "orig" => "json",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => "default",
                        "kind" => "query",
                        "name" => "notfound",
                        "orig" => "notfound",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
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
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "number",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "text",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
          ],
          "name" => "get_number_trivia",
          "op" => {
            "load" => {
              "input" => "data",
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
                      },
                    ],
                    "query" => [
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "fragment",
                        "orig" => "fragment",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "json",
                        "orig" => "json",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => "default",
                        "kind" => "query",
                        "name" => "notfound",
                        "orig" => "notfound",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
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
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "number",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "text",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
          ],
          "name" => "random",
          "op" => {
            "load" => {
              "input" => "data",
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
                      },
                    ],
                    "query" => [
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "fragment",
                        "orig" => "fragment",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "example" => false,
                        "kind" => "query",
                        "name" => "json",
                        "orig" => "json",
                        "type" => "`$BOOLEAN`",
                      },
                      {
                        "kind" => "query",
                        "name" => "max",
                        "orig" => "max",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "kind" => "query",
                        "name" => "min",
                        "orig" => "min",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
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
                },
              ],
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
