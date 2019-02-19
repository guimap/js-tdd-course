module.exports = {
  sum: (num, num2) => {
    return num + num2
  },
  sub: (num, num2) => {
    return num - num2
  },
  mult: (num, num2) => {
    return num + num2
  },
  div: (num, num2) => {
    return num2 === 0 ? 'Não é possível divisão por zero' : (num / num2)
  }
}
