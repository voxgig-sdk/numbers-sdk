<?php
declare(strict_types=1);

// Numbers SDK configuration

class NumbersConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Numbers",
                "slug" => "numbers",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "http://numbersapi.com",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_number_fact" => [],
                    "get_number_trivia" => [],
                    "random" => [],
                ],
            ],
            "entity" => [
        'get_number_fact' => [
          'fields' => [
            [
              'name' => 'found',
              'short' => 'Whether a fact was found for the requested number',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'number',
              'short' => 'The number the fact is about',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'text',
              'short' => 'The fact about the number',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'The type of the fact',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'from' => [
              'number' => 'number',
              'type' => 'type',
            ],
            'name' => 'id',
            'parts' => [
              'number',
              'type',
            ],
            'sep' => '/',
          ],
          'name' => 'get_number_fact',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '42',
                        'kind' => 'param',
                        'name' => 'number',
                        'orig' => 'number',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'type',
                        'orig' => 'type',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'fragment',
                        'orig' => 'fragment',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => 'default',
                        'kind' => 'query',
                        'name' => 'notfound',
                        'orig' => 'notfound',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{number}/{type}',
                  'segments' => [
                    [
                      'var' => 'number',
                    ],
                    [
                      'var' => 'type',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'fragment',
                      'json',
                      'notfound',
                      'number',
                      'type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    '{number}',
                    '{type}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'get_number_trivia' => [
          'fields' => [
            [
              'name' => 'found',
              'short' => 'Whether a fact was found for the requested number',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'number',
              'short' => 'The number the fact is about',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'text',
              'short' => 'The trivia fact about the number',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'The type of the fact',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'get_number_trivia',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '42',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'number',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'fragment',
                        'orig' => 'fragment',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => 'default',
                        'kind' => 'query',
                        'name' => 'notfound',
                        'orig' => 'notfound',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{number}',
                  'rename' => [
                    'param' => [
                      'number' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'fragment',
                      'id',
                      'json',
                      'notfound',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'random' => [
          'fields' => [
            [
              'name' => 'found',
              'short' => 'Whether a fact was found',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'number',
              'short' => 'The number the fact is about',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'text',
              'short' => 'The fact about the number',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'type',
              'short' => 'The type of the fact',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'random',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'type',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'fragment',
                        'orig' => 'fragment',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'json',
                        'orig' => 'json',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'max',
                        'orig' => 'max',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'min',
                        'orig' => 'min',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/random/{type}',
                  'rename' => [
                    'param' => [
                      'type' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'random',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'fragment',
                      'id',
                      'json',
                      'max',
                      'min',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'random',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return NumbersFeatures::make_feature($name);
    }
}
