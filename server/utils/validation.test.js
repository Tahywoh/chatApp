const expect = require('expect')

const {isRealString} = require('./validation')

describe('isRealString', () => {
  it('should reject none-string values', () => {
    var res = isRealString(98)
    expect(res).toBe('false')
  })
  it('should reject string with only spaces', () => {
    var res = isRealString('                   ')
    expect(res).toBe('false')
  })
  it('should allow string with non space character', () => {
    var res = isRealString('                  Adeshina           $#@')
    expect(res).toBe('true')
  })
}) 