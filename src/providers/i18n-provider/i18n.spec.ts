import { format } from './i18n'

describe('format', () => {
  it('format date', () => {
    expect(format('2021-06-15T22:00:35.664Z', 'date', 'en')).toEqual(
      'June 16, 2021'
    )
    expect(format('2021-06-15T22:00:35.664Z', 'date', 'de-DE')).toEqual(
      '16. Juni 2021'
    )
    expect(format(undefined, 'date', 'de-DE')).toEqual(undefined)
  })
})
