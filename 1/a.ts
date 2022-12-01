const input = await Deno.readTextFile("./input.txt")

const sortedInput = input.split("\n")

const removedChars = sortedInput.map((s) => +s.replace("\r", ""))

let elfInventorySum = 0
const finalArray: number[] = []

removedChars.forEach((rc) => {
  if (rc !== 0) {
    elfInventorySum += rc
  } else {
    finalArray.push(elfInventorySum)
    elfInventorySum = 0
  }
})

console.log(`Part 1: ${Math.max(...finalArray)}`)

export default finalArray
