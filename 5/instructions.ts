export const processInstructionsInput = async () => {
  const input = await Deno.readTextFile("./input.txt")
  const filteredInput = input.split("\n").map((item) => item.replace("\r", ""))

  let detectInstructions = false
  const parsedInstructions: string[] = []

  filteredInput.forEach((item) => {
    if (detectInstructions) {
      parsedInstructions.push(item)
    }

    if (item === "") {
      detectInstructions = true
    }
  })

  return parsedInstructions.map((item) => {
    return item.split(" ").filter((_item, idx) => idx % 2)
  })
}

processInstructionsInput()
