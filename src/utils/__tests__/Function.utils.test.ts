import { FunctionUtils } from '..'

describe('Function.utils', () => {
  it('should call all functions', () => {
    const fn1 = jest.fn()
    const fn2 = jest.fn()

    FunctionUtils.composeFn(fn1, fn2)()

    expect(fn1).toBeCalledTimes(1)
    expect(fn2).toBeCalledTimes(1)
  })
})
