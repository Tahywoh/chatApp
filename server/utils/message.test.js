var expect = require('expect')
var {generateMessage, generateLocationMessage} = require('./message')
describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'John'
    var text = 'some msg'
    var message = generateMessage(from, text)

    expect(message.createdAt).toBeA('number')
    expect(message).toInclude({
      from, text
    })
  })
})

describe('generateLocationMessage', () =>{
  it('should generate correct location object', () => {
    var from = 'Adeshina'
    var latitude = 10
    var longitude = 20
    var url = 'https://www.google.com/maps?q=10,20'
    var message = generateLocationMessage(from, latitude, longitude)
  })
})