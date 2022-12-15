const input = await Deno.readTextFile("./input.txt")

const filteredInput = input.split("")

for (let i = 0; i < filteredInput.length; i++) {
  if (
    new Set([
      filteredInput[i],
      filteredInput[i + 1],
      filteredInput[i + 2],
      filteredInput[i + 3],
      filteredInput[i + 4],
      filteredInput[i + 5],
      filteredInput[i + 6],
      filteredInput[i + 7],
      filteredInput[i + 8],
      filteredInput[i + 9],
      filteredInput[i + 10],
      filteredInput[i + 11],
      filteredInput[i + 12],
      filteredInput[i + 13],
    ]).size === 14
  ) {
    console.log(i + 14)
    break
  }
}
