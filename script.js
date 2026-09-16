const randomId = () => +Math.trunc(Math.random() * 0xffffffff)

console.log(randomId())

let categories = [
  {
    id: 1,
    title: 'Смартфоны',
    items: [
      // >>> item <<<
      { id: 11, title: 'iPhone 15' },
      { id: 12, title: 'Samsung Galaxy S15' },
      { id: 13, title: 'Huawei H15' },
    ],
  },
  {
    id: 2,
    title: 'Ноутбуки',
    items: [
      { id: 21, title: 'Lenovo idonknow' },
      { id: 22, title: 'Macbook Air' },
    ],
  },
  {
    id: 3,
    title: 'Пылесосы',
    items: [
      { id: 31, title: 'Dream' },
      { id: 32, title: 'Ecovox T50' },
    ],
  },
  {
    id: 4,
    title: 'Цветы',
    items: [
      { id: 41, title: 'Белые розы' },
      { id: 42, title: 'Желтые тюльпаны' },
    ],
  },
]
//--- Category ---//

function getCategoryById(categoryId) {
  return categories.find(category => category.id === categoryId)
}

function removeCategoryById(id) {
  categories = categories.filter(category => category.id !== id)
}

function addCategory(title) {
  const newCategory = {
    id: randomId(),
    title,
    items: [],
  }
  categories.push(newCategory)
  return newCategory
}

//--- Category ---//

//--- Items ---//

function getItemByIdFromCategoryId(categoryId, itemId) {
  const category = getCategoryById(categoryId)
  return category.items.find(item => item.id === itemId)
}

function removeItemByIdFromCategoryId(categoryId, itemId) {
  const category = getCategoryById(categoryId)
  category.items = category.items.filter(item => item.id !== itemId)
}

function addItemToCategory(categoryId, title) {
  const category = getCategoryById(categoryId)
  const newtItems = {
    id: randomId(),
    title,
  }

  category.items.push(newtItems)
}

console.log('--- getCategoryById ---')
console.log(getCategoryById(2))

console.log('--- getItemByIdFromCategoryId ---')
console.log(getItemByIdFromCategoryId(1, 12))

console.log('--- removeCategoryById ---')
removeCategoryById(2)
console.log(categories)

console.log('--- removeItemByIdFromCategoryId ---')
removeItemByIdFromCategoryId(1, 12)
console.log(getCategoryById(1))

console.log('--- addCategory ---')
addCategory('Наушники')
console.log(categories)

console.log('--- addItemToCategory ---')
addItemToCategory(1, 'iPhone 17')
console.log(getCategoryById(1))
