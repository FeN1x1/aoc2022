const input = await Deno.readTextFile("./input.txt")

let containedPairsPart1 = 0
let containedPairsPart2 = 0

const filteredInput = input.split("\n").map((i) => {
  return i
    .replace("\r", "")
    .split(",")
    .map((k) => {
      const rangeArray: number[] = []
      for (
        let start = +k.split("-")[0];
        start < +k.split("-")[1] + 1;
        start++
      ) {
        rangeArray.push(start)
      }
      return rangeArray
    })
})

filteredInput.forEach((k) => {
  if (
    k[0].every((l) => k[1].includes(l)) ||
    k[1].every((l) => k[0].includes(l))
  ) {
    containedPairsPart1++
  }
  if (
    k[0].some((l) => k[1].includes(l)) ||
    k[1].some((l) => k[0].includes(l))
  ) {
    containedPairsPart2++
  }
})

console.log(
  `Part 1 solution: ${containedPairsPart1}\nPart 2 solution: ${containedPairsPart2}`
)
