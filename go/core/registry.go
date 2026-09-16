package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewGetNumberFactEntityFunc func(client *NumbersSDK, entopts map[string]any) NumbersEntity

var NewGetNumberTriviaEntityFunc func(client *NumbersSDK, entopts map[string]any) NumbersEntity

var NewRandomEntityFunc func(client *NumbersSDK, entopts map[string]any) NumbersEntity

