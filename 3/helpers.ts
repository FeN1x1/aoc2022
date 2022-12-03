export const mostFrequent = <T>(arr: T[], n: number) => {
  let maxcount = 0
  let element_having_max_freq
  for (let i = 0; i < n; i++) {
    let count = 0
    for (let j = 0; j < n; j++) {
      if (arr[i] == arr[j]) {
        count++
      }
    }

    if (count > maxcount) {
      maxcount = count
      element_having_max_freq = arr[i]
    }
  }

  return element_having_max_freq
}

export const checkForSameItems = (str1: string, str2: string) => {
  return [...new Set(Array.from(str1).filter((s) => str2.includes(s)))]
}
