# Numbers SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Numbers",
            "slug": "numbers",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "http://numbersapi.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_number_fact": {},
                "get_number_trivia": {},
                "random": {},
            },
        },
        "entity": {
      "get_number_fact": {
        "fields": [
          {
            "name": "found",
            "short": "Whether a fact was found for the requested number",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "number",
            "short": "The number the fact is about",
            "type": "`$NUMBER`",
          },
          {
            "name": "text",
            "short": "The fact about the number",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "The type of the fact",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "from": {
            "number": "number",
            "type": "type",
          },
          "name": "id",
          "parts": [
            "number",
            "type",
          ],
          "sep": "/",
        },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "type",
                      "orig": "type",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": False,
                      "kind": "query",
                      "name": "fragment",
                      "orig": "fragment",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "json",
                      "orig": "json",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": "default",
                      "kind": "query",
                      "name": "notfound",
                      "orig": "notfound",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{number}/{type}",
                "segments": [
                  {
                    "var": "number",
                  },
                  {
                    "var": "type",
                  },
                ],
                "select": {
                  "exist": [
                    "fragment",
                    "json",
                    "notfound",
                    "number",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "{number}",
                  "{type}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "get_number_trivia": {
        "fields": [
          {
            "name": "found",
            "short": "Whether a fact was found for the requested number",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "number",
            "short": "The number the fact is about",
            "type": "`$NUMBER`",
          },
          {
            "name": "text",
            "short": "The trivia fact about the number",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "The type of the fact",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": False,
                      "kind": "query",
                      "name": "fragment",
                      "orig": "fragment",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "json",
                      "orig": "json",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": "default",
                      "kind": "query",
                      "name": "notfound",
                      "orig": "notfound",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{number}",
                "rename": {
                  "param": {
                    "number": "id",
                  },
                },
                "segments": [
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "fragment",
                    "id",
                    "json",
                    "notfound",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "random": {
        "fields": [
          {
            "name": "found",
            "short": "Whether a fact was found",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "number",
            "short": "The number the fact is about",
            "type": "`$NUMBER`",
          },
          {
            "name": "text",
            "short": "The fact about the number",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "short": "The type of the fact",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "example": False,
                      "kind": "query",
                      "name": "fragment",
                      "orig": "fragment",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "json",
                      "orig": "json",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "max",
                      "orig": "max",
                      "type": "`$INTEGER`",
                    },
                    {
                      "kind": "query",
                      "name": "min",
                      "orig": "min",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/random/{type}",
                "rename": {
                  "param": {
                    "type": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "random",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "fragment",
                    "id",
                    "json",
                    "max",
                    "min",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "random",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
