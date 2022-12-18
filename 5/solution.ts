import { processInstructionsInput } from "./instructions.ts"
import { processStacksInput } from "./stacks.ts"

const instructions = await processInstructionsInput()
const stacks = await processStacksInput()

instructions.forEach((ins, _idx) => {
  for (let i = 0; i < +ins[0]; i++) {
    const shiftedItem = stacks[+ins[1] - 1].shift()
    stacks[+ins[2] - 1].unshift(shiftedItem ?? "")
  }
})

let finalLetters = ""

stacks.forEach((item) => {
  finalLetters += item[0]
})

console.log(`Part 1: ${finalLetters}`)
