import { PaginationUtils } from '..'

describe('Pagination.utils', () => {
  it('should return pagination params', () => {
    const params = PaginationUtils.getPaginationParams({
      page: 1,
      pageSize: 10,
    })

    expect(Array.from(params.keys())).toEqual(
      expect.arrayContaining(['_page', '_limit']),
    )

    expect(Array.from(params.values())).toEqual(
      expect.arrayContaining(['1', '10']),
    )
  })

  it('should return pagination params even if pass zeros', () => {
    const params = PaginationUtils.getPaginationParams({
      page: 0,
      pageSize: 0,
    })

    expect(Array.from(params.keys())).toEqual(
      expect.arrayContaining(['_page', '_limit']),
    )

    expect(Array.from(params.values())).toEqual(
      expect.arrayContaining(['0', '0']),
    )
  })

  it('should return empty params object when page and pageSize are undefined', () => {
    const params = PaginationUtils.getPaginationParams({})
    expect(Array.from(params.keys())).toHaveLength(0)
    expect(Array.from(params.values())).toHaveLength(0)
  })

  it('should return total of items from headers object', () => {
    const total = PaginationUtils.getTotalFromHeaders({ 'x-total-count': 777 })
    expect(total).toBe(777)
  })

  it('should return zero when there is no total', () => {
    const total = PaginationUtils.getTotalFromHeaders({})
    expect(total).toBe(0)
  })
})
