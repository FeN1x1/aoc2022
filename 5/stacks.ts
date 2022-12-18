export const processStacksInput = async () => {
  const input = await Deno.readTextFile("./input.txt")

  const filteredInput = input
    .split("\n")
    .map((i) => i.replace("\r", ""))
    .map((val) => {
      return val.split("")
    })
    .map((item) => {
      return item
        .filter((_i, idx) => idx % 4 === 1)
        .filter((item) => item !== "")
    })
    .filter((item, _idx, array) => item.length <= array[0].length)
    .filter((item) => item.length !== 0)

  filteredInput.pop()
  const newArrLength = filteredInput[0].length

  const stacks: string[][] = new Array(newArrLength).fill(0).map(() => {
    return new Array(newArrLength).fill(0)
  })

  filteredInput.forEach((x, xIdx) => {
    x.forEach((y, yIdx) => {
      stacks[yIdx][xIdx] = y
    })
  })

  return stacks.map((x) => {
    return x.filter((y) => y !== " ")
  })
}
