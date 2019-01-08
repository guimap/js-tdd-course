import * as R from 'ramda'

const arr1 = [1, 1, 1]
const arr2 = [2, 2, 2]

const arr3 = R.union(arr1, arr2)
const arr4 = R.uniq(arr1)

console.log(arr3)
console.log(arr4)
