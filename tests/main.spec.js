const expect = require('chai').expect

describe('Main', function () {
  var arr = []
  //  Roda uma unica vez
  before(() => {

  })

  after(() => {

  })

  beforeEach(() => {
    arr = [1, 2, 3]
  })

  afterEach(() => {

  })
  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4)
    expect(arr).to.have.lengthOf(4)
  })

  it('should have a size of 2 when pop vale from the array', () => {
    arr.pop()
    expect(arr).to.have.lengthOf(2)
  })

  it('should remove the value 3 when use pop in the array', () => {
    arr.pop()
    expect(arr).to.not.include(3)
  })
})
