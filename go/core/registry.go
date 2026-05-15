package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGetNumberFactEntityFunc func(client *NumbersSDK, entopts map[string]any) NumbersEntity

var NewGetNumberTriviaEntityFunc func(client *NumbersSDK, entopts map[string]any) NumbersEntity

var NewRandomEntityFunc func(client *NumbersSDK, entopts map[string]any) NumbersEntity

