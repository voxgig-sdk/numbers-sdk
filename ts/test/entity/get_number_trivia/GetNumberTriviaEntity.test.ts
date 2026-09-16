

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { NumbersSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetNumberTriviaEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when NUMBERS_TEST_LIVE=TRUE.
  afterEach(liveDelay('NUMBERS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = NumbersSDK.test()
    const ent = testsdk.GetNumberTrivia()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.NUMBERS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_number_trivia.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"found","req":false,"short":"Whether a fact was found for the requested number","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"number","req":false,"short":"The number the fact is about","type":"`$NUMBER`","index$":2},{"active":true,"name":"text","req":false,"short":"The trivia fact about the number","type":"`$STRING`","index$":3},{"active":true,"name":"type","req":false,"short":"The type of the fact","type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"get_number_trivia","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"42","kind":"param","name":"id","orig":"number","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":false,"kind":"query","name":"fragment","orig":"fragment","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":false,"kind":"query","name":"json","orig":"json","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"example":"default","kind":"query","name":"notfound","orig":"notfound","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /{number}","json":"{\"operationId\":\"getNumberTrivia\",\"parameters\":[{\"description\":\"The number to get a trivia fact about. Can be an integer or 'random'.\",\"examples\":{\"integer\":{\"summary\":\"A specific number\",\"value\":\"42\"},\"random\":{\"summary\":\"Random number\",\"value\":\"random\"}},\"in\":\"path\",\"name\":\"number\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Return the fact as a sentence fragment\",\"in\":\"query\",\"name\":\"fragment\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Specifies what to return if the number is not found\",\"in\":\"query\",\"name\":\"notfound\",\"required\":false,\"schema\":{\"default\":\"default\",\"enum\":[\"default\",\"floor\",\"ceil\"],\"type\":\"string\"}},{\"description\":\"Return the result as JSON\",\"in\":\"query\",\"name\":\"json\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"found\":{\"description\":\"Whether a fact was found for the requested number\",\"type\":\"boolean\"},\"number\":{\"description\":\"The number the fact is about\",\"type\":\"number\"},\"text\":{\"description\":\"The trivia fact about the number\",\"type\":\"string\"},\"type\":{\"description\":\"The type of the fact\",\"example\":\"trivia\",\"type\":\"string\"}},\"type\":\"object\"}},\"text/plain\":{\"schema\":{\"example\":\"42 is the answer to the Ultimate Question of Life, the Universe, and Everything.\",\"type\":\"string\"}}},\"description\":\"Successful response with a number trivia fact\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{number}","rename":{"param":{"number":"id"}},"segments":[{"var":"id"}],"select":{"exist":["fragment","id","json","notfound"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_number_trivia","name__orig":"get_number_trivia","Name":"GetNumberTrivia","name_":"get_number_trivia","name-":"get-number-trivia","NAME":"GET_NUMBER_TRIVIA","index$":1}, {"active":true,"entity":"get_number_trivia","key$":"BasicGetNumberTriviaFlow","kind":"basic","name":"BasicGetNumberTriviaFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_number_trivia_ref01","srcdatavar":"get_number_trivia_ref01_data","suffix":"_dt0"},"match":{"id":"get_number_trivia01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_number_trivia_ref01"}}],"index$":0}]}, 'GetNumberTrivia')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_number_trivia_ref01_data = Object.values(setup.data.existing.get_number_trivia)[0] as any

    // LOAD
    const get_number_trivia_ref01_ent = client.GetNumberTrivia()
    const get_number_trivia_ref01_match_dt0: any = {}
    get_number_trivia_ref01_match_dt0.id = get_number_trivia_ref01_data.id
    const get_number_trivia_ref01_data_dt0 = (await get_number_trivia_ref01_ent.load(get_number_trivia_ref01_match_dt0)).data()
    assert(get_number_trivia_ref01_data_dt0.id === get_number_trivia_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_number_trivia/GetNumberTriviaTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = NumbersSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_number_trivia01','get_number_trivia02','get_number_trivia03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'NUMBERS_TEST_GET_NUMBER_TRIVIA_ENTID': idmap,
    'NUMBERS_TEST_LIVE': 'FALSE',
    'NUMBERS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['NUMBERS_TEST_GET_NUMBER_TRIVIA_ENTID']

  const live = 'TRUE' === env.NUMBERS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['NUMBERS_TEST_GET_NUMBER_TRIVIA_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new NumbersSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
