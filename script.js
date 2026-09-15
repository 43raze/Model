const randomId = () => +Math.trunc(Math.random() * 0xffffffff)

console.log(randomId())

let categories = [
  {
    id: 1,
    title: 'Смартфоны',
    items: [
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

function getCategoryById(id) {
  return categories.find(category => category.id === id)
}

function removeCategoryById(id) {
  categories = categories.filter(category => category.id !== id)
}

function getItemByIdFromCategoryId(categoryId, itemId) {
  const category = getCategoryById(categoryId)
  return category.items.find(item => item.id === itemId)
}

function removeItemByIdFromCategoryId(categoryId, itemId) {
  const category = getCategoryById(categoryId)
  category.items = category.items.filter(item => item.id !== itemId)
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
