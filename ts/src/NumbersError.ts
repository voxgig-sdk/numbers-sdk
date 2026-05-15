
import { Context } from './Context'


class NumbersError extends Error {

  isNumbersError = true

  sdk = 'Numbers'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  NumbersError
}

