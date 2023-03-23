import { QueryKeyUtils } from '..'

describe('QueryKey.utils', () => {
  it('should return a query key for findMany request', () => {
    const pagination = { page: 1, pageSize: 10 }
    const filters = { search: 'test' }
    const simpleText = 'text'
    const simpleNumber = 100
    const numberArray = [1, 2, 3]

    const key = QueryKeyUtils.findMany(
      'Asset',
      pagination,
      filters,
      simpleText,
      simpleNumber,
      numberArray,
    )

    expect(key).toEqual([
      'Asset.findMany',
      pagination,
      filters,
      simpleText,
      simpleNumber,
      numberArray,
    ])
  })

  it('should return a query key for findById request', () => {
    const id = 999
    const key = QueryKeyUtils.findById('Asset', id)
    expect(key).toEqual(['Asset.findById', id])
  })
})
