"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GetNumberFactEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when NUMBERS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('NUMBERS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.NumbersSDK.test();
        const ent = testsdk.GetNumberFact();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.NUMBERS_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'get_number_fact.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "found", "req": false, "short": "Whether a fact was found for the requested number", "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "number", "req": false, "short": "The number the fact is about", "type": "`$NUMBER`", "index$": 2 }, { "active": true, "name": "text", "req": false, "short": "The fact about the number", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "type", "req": false, "short": "The type of the fact", "type": "`$STRING`", "index$": 4 }], "id": { "field": "id", "from": { "number": "number", "type": "type" }, "name": "id", "parts": ["number", "type"], "sep": "/" }, "name": "get_number_fact", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "42", "kind": "param", "name": "number", "orig": "number", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "type", "orig": "type", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "example": false, "kind": "query", "name": "fragment", "orig": "fragment", "reqd": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "example": false, "kind": "query", "name": "json", "orig": "json", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "example": "default", "kind": "query", "name": "notfound", "orig": "notfound", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /{number}/{type}", "json": "{\"operationId\":\"getNumberFact\",\"parameters\":[{\"description\":\"The number to get a fact about. Can be an integer, 'random', or a date in the format month/day for date type.\",\"examples\":{\"date\":{\"summary\":\"January 1st (for date type)\",\"value\":\"1/1\"},\"integer\":{\"summary\":\"A specific number\",\"value\":\"42\"},\"random\":{\"summary\":\"Random number\",\"value\":\"random\"}},\"in\":\"path\",\"name\":\"number\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The type of fact to return\",\"in\":\"path\",\"name\":\"type\",\"required\":true,\"schema\":{\"enum\":[\"trivia\",\"math\",\"date\",\"year\"],\"type\":\"string\"}},{\"description\":\"Return the fact as a sentence fragment that can be easily included as part of a sentence\",\"in\":\"query\",\"name\":\"fragment\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Specifies what to return if the number is not found. Options: 'default' (return a canned message), 'floor' (return fact for largest number less than requested), 'ceil' (return fact for smallest number greater than requested)\",\"in\":\"query\",\"name\":\"notfound\",\"required\":false,\"schema\":{\"default\":\"default\",\"enum\":[\"default\",\"floor\",\"ceil\"],\"type\":\"string\"}},{\"description\":\"Return the result as JSON\",\"in\":\"query\",\"name\":\"json\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"found\":{\"description\":\"Whether a fact was found for the requested number\",\"example\":true,\"type\":\"boolean\"},\"number\":{\"description\":\"The number the fact is about\",\"example\":42,\"type\":\"number\"},\"text\":{\"description\":\"The fact about the number\",\"example\":\"42 is the number of minutes in one degree of a circle.\",\"type\":\"string\"},\"type\":{\"description\":\"The type of the fact\",\"enum\":[\"trivia\",\"math\",\"date\",\"year\"],\"example\":\"math\",\"type\":\"string\"}},\"type\":\"object\"}},\"text/plain\":{\"schema\":{\"example\":\"42 is the number of minutes in one degree of a circle.\",\"type\":\"string\"}}},\"description\":\"Successful response with a number fact\"},\"404\":{\"content\":{\"text/plain\":{\"schema\":{\"type\":\"string\"}}},\"description\":\"Number not found (when using strict mode)\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/{number}/{type}", "segments": [{ "var": "number" }, { "var": "type" }], "select": { "exist": ["fragment", "json", "notfound", "number", "type"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "get_number_fact", "name__orig": "get_number_fact", "Name": "GetNumberFact", "name_": "get_number_fact", "name-": "get-number-fact", "NAME": "GET_NUMBER_FACT", "index$": 0 }, { "active": true, "entity": "get_number_fact", "key$": "BasicGetNumberFactFlow", "kind": "basic", "name": "BasicGetNumberFactFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "get_number_fact_ref01", "srcdatavar": "get_number_fact_ref01_data", "suffix": "_dt0" }, "match": { "id": "get_number_fact01", "number": "number01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-get_number_fact_ref01" } }], "index$": 0 }] }, 'GetNumberFact');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let get_number_fact_ref01_data = Object.values(setup.data.existing.get_number_fact)[0];
        // LOAD
        const get_number_fact_ref01_ent = client.GetNumberFact();
        const get_number_fact_ref01_match_dt0 = {};
        get_number_fact_ref01_match_dt0.id = get_number_fact_ref01_data.id;
        const get_number_fact_ref01_data_dt0 = (await get_number_fact_ref01_ent.load(get_number_fact_ref01_match_dt0)).data();
        (0, node_assert_1.default)(get_number_fact_ref01_data_dt0.id === get_number_fact_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/get_number_fact/GetNumberFactTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.NumbersSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['get_number_fact01', 'get_number_fact02', 'get_number_fact03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'NUMBERS_TEST_GET_NUMBER_FACT_ENTID': idmap,
        'NUMBERS_TEST_LIVE': 'FALSE',
        'NUMBERS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['NUMBERS_TEST_GET_NUMBER_FACT_ENTID'];
    const live = 'TRUE' === env.NUMBERS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['NUMBERS_TEST_GET_NUMBER_FACT_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.NumbersSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.NUMBERS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=GetNumberFactEntity.test.js.map