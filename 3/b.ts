import { mostFrequent, checkForSameItems } from "./helpers.ts"

const input = await Deno.readTextFile("./input.txt")

let iterationIndex = 0
let prioritiesSum = 0

const arrayOfTriples: string[][] = []
let tempArray: string[] = []

input
  .split("\n")
  .map((i) => i.replace("\r", ""))
  .forEach((i) => {
    tempArray.push(i)
    iterationIndex++

    if (iterationIndex === 3) {
      arrayOfTriples.push(tempArray)
      tempArray = []
      iterationIndex = 0
    }
  })

arrayOfTriples.forEach((i) => {
  const newArray = checkForSameItems(i[0], i[1]).concat(
    checkForSameItems(i[1], i[2]),
    checkForSameItems(i[2], i[0])
  )

  const mostFrequentChar = mostFrequent(newArray, newArray.length)

  if (mostFrequentChar) {
    mostFrequentChar.toUpperCase() === mostFrequentChar
      ? (prioritiesSum += mostFrequentChar.charCodeAt(0) - 38)
      : (prioritiesSum += mostFrequentChar.charCodeAt(0) - 96)
  }
})

console.log(prioritiesSum)
