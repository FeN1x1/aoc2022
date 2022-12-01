import finalArray from "./a.ts"

const sortedArray = finalArray.sort()

console.log(
  `Part 2: ${
    sortedArray[sortedArray.length - 1] +
    sortedArray[sortedArray.length - 2] +
    sortedArray[sortedArray.length - 3]
  }`
)
