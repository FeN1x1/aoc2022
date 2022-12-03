const input = await Deno.readTextFile("./input.txt")

let prioritiesSum = 0

input
  .split("\n")
  .map((i) => {
    const s = i.replace("\r", "")
    return Array.from(s.slice(s.length / 2, s.length)).filter((e) =>
      s.slice(0, s.length / 2).includes(e)
    )
  })
  .forEach((i) => {
    i[0].toUpperCase() === i[0]
      ? (prioritiesSum += i[0].charCodeAt(0) - 38)
      : (prioritiesSum += i[0].charCodeAt(0) - 96)
  })

console.log(prioritiesSum)
