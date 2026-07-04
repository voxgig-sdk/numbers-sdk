# Numbers PHP SDK Reference

Complete API reference for the Numbers PHP SDK.


## NumbersSDK

### Constructor

```php
require_once __DIR__ . '/numbers_sdk.php';

$client = new NumbersSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `NumbersSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = NumbersSDK::test();
```


### Instance Methods

#### `GetNumberFact($data = null)`

Create a new `GetNumberFactEntity` instance. Pass `null` for no initial data.

#### `GetNumberTrivia($data = null)`

Create a new `GetNumberTriviaEntity` instance. Pass `null` for no initial data.

#### `Random($data = null)`

Create a new `RandomEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## GetNumberFactEntity

```php
$get_number_fact = $client->GetNumberFact();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `found` | ``$BOOLEAN`` | No |  |
| `number` | ``$NUMBER`` | No |  |
| `text` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GetNumberFact()->load(["id" => "get_number_fact_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GetNumberFactEntity`

Create a new `GetNumberFactEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## GetNumberTriviaEntity

```php
$get_number_trivia = $client->GetNumberTrivia();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `found` | ``$BOOLEAN`` | No |  |
| `number` | ``$NUMBER`` | No |  |
| `text` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GetNumberTrivia()->load(["id" => "get_number_trivia_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GetNumberTriviaEntity`

Create a new `GetNumberTriviaEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## RandomEntity

```php
$random = $client->Random();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `found` | ``$BOOLEAN`` | No |  |
| `number` | ``$NUMBER`` | No |  |
| `text` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Random()->load(["id" => "random_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RandomEntity`

Create a new `RandomEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new NumbersSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

