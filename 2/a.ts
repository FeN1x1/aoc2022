const input = await Deno.readTextFile("./input.txt")

const rockPaperScissors = {
  itemMapping: {
    A: "X",
    B: "Y",
    C: "Z",
  },
  itemScore: {
    X: 1,
    Y: 2,
    Z: 3,
  },
  gameScore: {
    XY: 0,
    XX: 3,
    XZ: 6,
    YX: 6,
    YY: 3,
    YZ: 0,
    ZX: 0,
    ZZ: 3,
    ZY: 6,
  },
}

let totalScore = 0

export const sortedInput = input
  .split("\n")
  .map((s) => {
    return {
      me: s[2],
      opponent:
        rockPaperScissors.itemMapping[
          s[0] as keyof typeof rockPaperScissors.itemMapping
        ],
    }
  })
  .forEach((s) => {
    const tempScore =
      rockPaperScissors.itemScore[
        s.me as keyof typeof rockPaperScissors.itemScore
      ] +
      rockPaperScissors.gameScore[
        (s.me + s.opponent) as keyof typeof rockPaperScissors.gameScore
      ]
    totalScore += tempScore
  })

console.log(totalScore)
