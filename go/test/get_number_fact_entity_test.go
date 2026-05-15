package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/numbers-sdk"
	"github.com/voxgig-sdk/numbers-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestGetNumberFactEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GetNumberFact(nil)
		if ent == nil {
			t.Fatal("expected non-nil GetNumberFactEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := get_number_factBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "get_number_fact." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set NUMBERS_TEST_GET_NUMBER_FACT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		getNumberFactRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.get_number_fact", setup.data)))
		var getNumberFactRef01Data map[string]any
		if len(getNumberFactRef01DataRaw) > 0 {
			getNumberFactRef01Data = core.ToMapAny(getNumberFactRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = getNumberFactRef01Data

		// LOAD
		getNumberFactRef01Ent := client.GetNumberFact(nil)
		getNumberFactRef01MatchDt0 := map[string]any{}
		getNumberFactRef01DataDt0Loaded, err := getNumberFactRef01Ent.Load(getNumberFactRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if getNumberFactRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func get_number_factBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "get_number_fact", "GetNumberFactTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read get_number_fact test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse get_number_fact test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"get_number_fact01", "get_number_fact02", "get_number_fact03", "number01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("NUMBERS_TEST_GET_NUMBER_FACT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"NUMBERS_TEST_GET_NUMBER_FACT_ENTID": idmap,
		"NUMBERS_TEST_LIVE":      "FALSE",
		"NUMBERS_TEST_EXPLAIN":   "FALSE",
		"NUMBERS_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["NUMBERS_TEST_GET_NUMBER_FACT_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["NUMBERS_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["NUMBERS_APIKEY"],
			},
			extra,
		})
		client = sdk.NewNumbersSDK(core.ToMapAny(mergedOpts))
	}

	live := env["NUMBERS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["NUMBERS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
