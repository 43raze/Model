const objects = [{ x: 3 }, { x: 5 }, { x: 7 }]

function getObjects() {
  return [...objects].map(o => structuredClone(o))
}

const objectsCopy = getObjects()
const objectsCopy2 = getObjects()
objectsCopy2.length = 0
objectsCopy[0].x = 'foo'
console.log(objectsCopy)
console.log(objectsCopy2)

console.log('===')
console.log(objects)
