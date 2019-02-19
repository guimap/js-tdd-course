const expect = require('chai').expect
const calc = require('../src/main.js')

describe('Calc', function () {
  //  smoke tests
  describe('smoke tests', () => {
  })

  describe('sum', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(calc.sum(2, 2)).to.be.equal(4)
    })
  })

  describe('sub', () => {
    it('should return 4 when sub(6,2)', () => {
      expect(calc.sub(6, 2)).to.be.equal(4)
    })
    it('should return -4 when sub(2,6)', () => {
      expect(calc.sub(2, 6)).to.be.equal(-4)
    })
  })

  describe('mult', () => {
    it('should return 4 when mult(2,2)', () => {
      expect(calc.mult(2, 2)).to.be.equal(4)
    })
  })

  describe('div', () => {
    it('should return 2 when div(4,2)', () => {
      expect(calc.div(4, 2)).to.be.equal(2)
    })
    it('should return 0.5 when div(2,4)', () => {
      expect(calc.div(2, 4)).to.be.equal(0.5)
    })
    it('should return "Não é possível divisão por zero" ehen divide by 0', () => {
      expect(calc.div(4, 0)).to.be.equal('Não é possível divisão por zero')
    })
  })
})
