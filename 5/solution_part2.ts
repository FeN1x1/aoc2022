import { processInstructionsInput } from "./instructions.ts"
import { processStacksInput } from "./stacks.ts"

const instructions = await processInstructionsInput()
const stacks = await processStacksInput()

instructions.forEach((ins, _idx) => {
  let tempArray = []
  for (let i = 0; i < +ins[0]; i++) {
    const shiftedItem = stacks[+ins[1] - 1].shift()
    tempArray.push(shiftedItem)
  }

  tempArray.reverse().forEach((item) => {
    stacks[+ins[2] - 1].unshift(item ?? "")
  })
  tempArray = []
})

let finalLetters = ""

stacks.forEach((item) => {
  finalLetters += item[0]
})

console.log(`Part 2: ${finalLetters}`)
