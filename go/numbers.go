package voxgignumberssdk

import (
	"github.com/voxgig-sdk/numbers-sdk/go/core"
	"github.com/voxgig-sdk/numbers-sdk/go/entity"
	"github.com/voxgig-sdk/numbers-sdk/go/feature"
	_ "github.com/voxgig-sdk/numbers-sdk/go/utility"
)

// Type aliases preserve external API.
type NumbersSDK = core.NumbersSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type NumbersEntity = core.NumbersEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type NumbersError = core.NumbersError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetNumberFactEntityFunc = func(client *core.NumbersSDK, entopts map[string]any) core.NumbersEntity {
		return entity.NewGetNumberFactEntity(client, entopts)
	}
	core.NewGetNumberTriviaEntityFunc = func(client *core.NumbersSDK, entopts map[string]any) core.NumbersEntity {
		return entity.NewGetNumberTriviaEntity(client, entopts)
	}
	core.NewRandomEntityFunc = func(client *core.NumbersSDK, entopts map[string]any) core.NumbersEntity {
		return entity.NewRandomEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewNumbersSDK = core.NewNumbersSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
