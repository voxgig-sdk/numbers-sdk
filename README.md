# Numbers SDK

Interesting facts about numbers — trivia, math, dates, and years

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Numbers API

The Numbers API is a small public service that returns short, human-readable facts about numbers. It covers four broad fact categories: **trivia**, **math**, **dates**, and **years**.

What you get from the API:

- A plain-text (or JSON) fact about a given integer, date, or year.
- Random facts when you don't have a specific number in mind.
- Optional filtering by fact category (trivia / math / date / year).

The service is unauthenticated and free to use. It is served over HTTP from `numbersapi.com`. As of mid-2026 the freepublicapis.com catalogue reports the upstream as unreliable, so production callers should cache responses and degrade gracefully when the upstream is unreachable.

## Try it

**TypeScript**
```bash
npm install numbers
```

**Python**
```bash
pip install numbers-sdk
```

**PHP**
```bash
composer require voxgig/numbers-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/numbers-sdk/go
```

**Ruby**
```bash
gem install numbers-sdk
```

**Lua**
```bash
luarocks install numbers-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { NumbersSDK } from 'numbers'

const client = new NumbersSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o numbers-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "numbers": {
      "command": "/abs/path/to/numbers-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **GetNumberFact** | Look up a fact for a specific number, date, or year — typically called against paths like `/{number}`, `/{month}/{day}/date`, or `/{year}/year`. | `/{number}/{type}` |
| **GetNumberTrivia** | Look up a trivia-category fact for a specific number, typically called against `/{number}/trivia`. | `/{number}` |
| **Random** | Fetch a random fact across any category, typically called against `/random` (optionally `/random/trivia`, `/random/math`, `/random/date`, `/random/year`). | `/random/{type}` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from numbers_sdk import NumbersSDK

client = NumbersSDK({})


# Load a specific getnumberfact
getnumberfact, err = client.GetNumberFact(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'numbers_sdk.php';

$client = new NumbersSDK([]);


// Load a specific getnumberfact
[$getnumberfact, $err] = $client->GetNumberFact(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/numbers-sdk/go"

client := sdk.NewNumbersSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "Numbers_sdk"

client = NumbersSDK.new({})


# Load a specific getnumberfact
getnumberfact, err = client.GetNumberFact(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("numbers_sdk")

local client = sdk.new({})


-- Load a specific getnumberfact
local getnumberfact, err = client:GetNumberFact(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = NumbersSDK.test()
const result = await client.GetNumberFact().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = NumbersSDK.test(None, None)
result, err = client.GetNumberFact(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = NumbersSDK::test(null, null);
[$result, $err] = $client->GetNumberFact(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetNumberFact(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = NumbersSDK.test(nil, nil)
result, err = client.GetNumberFact(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetNumberFact(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Numbers API

- Upstream: [http://numbersapi.com](http://numbersapi.com)

- The Numbers API does not publish an explicit licence on its homepage.
- Treat returned facts as a best-effort free public service.
- The original endpoint is HTTP-only and has historically had no CORS headers, so browser usage may require a proxy.
- The freepublicapis.com community catalogue currently lists this API as unreliable; expect intermittent outages.

---

Generated from the Numbers API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
