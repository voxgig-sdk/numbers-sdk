package core

type NumbersError struct {
	IsNumbersError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewNumbersError(code string, msg string, ctx *Context) *NumbersError {
	return &NumbersError{
		IsNumbersError: true,
		Sdk:              "Numbers",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *NumbersError) Error() string {
	return e.Msg
}
