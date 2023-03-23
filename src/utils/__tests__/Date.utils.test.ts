import { DateUtils } from '..'

describe('Date.utils', () => {
  it('should format date', () => {
    const formattedDate = DateUtils.format(
      new Date('2000-01-20 00:00:00'),
      'dd/MM/yyy',
    )

    expect(formattedDate).toBe('20/01/2000')
  })
})
