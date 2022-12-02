const input = await Deno.readTextFile("./input.txt")

const rockPaperScissors = {
  itemMapping: {
    A: "X",
    B: "Y",
    C: "Z",
  },
  itemScore: {
    X0: 3,
    X3: 1,
    X6: 2,
    Y0: 1,
    Y3: 2,
    Y6: 3,
    Z0: 2,
    Z3: 3,
    Z6: 1,
  },
  gameScore: {
    X: 0,
    Y: 3,
    Z: 6,
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
    const gameScore =
      rockPaperScissors.gameScore[
        s.me as keyof typeof rockPaperScissors.gameScore
      ]
    const tempScore =
      gameScore +
      rockPaperScissors.itemScore[
        (s.opponent + gameScore) as keyof typeof rockPaperScissors.itemScore
      ]
    totalScore += tempScore
  })

console.log(totalScore)
