const input = await Deno.readTextFile("./input.txt")

const filteredInput = input.split("")

for (let i = 0; i < filteredInput.length; i++) {
  if (
    new Set([
      filteredInput[i],
      filteredInput[i + 1],
      filteredInput[i + 2],
      filteredInput[i + 3],
    ]).size === 4
  ) {
    console.log(i + 4)
    break
  }
}
