const numbers = [3, 5, 7]

function getNumbers() {
  // return numbers.map(n => n)
  return [...numbers]
}

const numbersCopy = getNumbers()
const numbersCopy2 = getNumbers()
numbersCopy2.length = 0
console.log(numbersCopy)
console.log(numbersCopy2)

console.log('===')
console.log(numbers)
