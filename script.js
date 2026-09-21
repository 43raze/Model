const randomId = () => Math.trunc(Math.random() * 0xffffffff)

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

//--- Validation ---//

function isValid(value) {
  if (typeof value !== 'string') {
    return null
  }

  const trimmed = value.trim()
  const lower = trimmed.toLowerCase()

  if (lower.length < 3) {
    return null
  }

  if (lower.length > 20) {
    return null
  }

  return lower
}

//--- Categories ---//

function addCategory(title) {
  const validTitle = isValid(title)
  if (!validTitle) return null

  const newCategory = {
    id: randomId(),
    title: validTitle,
    items: [],
  }
  categories.push(newCategory)

  return newCategory
}

function getCategoryById(categoryId) {
  return categories.find(category => category.id === categoryId)
}

function editCategoryById(categoryId, newTitle) {
  const category = getCategoryById(categoryId)
  const validTitle = isValid(newTitle)

  if (!category || !validTitle) return null
  category.title = validTitle

  return category
}

function removeCategoryById(categoryId) {
  categories = categories.filter(category => category.id !== categoryId)
}

//--- Items ---//

function addItemToCategory(categoryId, title) {
  const category = getCategoryById(categoryId)
  const validTitle = isValid(title)

  if (!category || !validTitle) return null

  const newItem = {
    id: randomId(),
    title: validTitle,
  }

  category.items.push(newItem)

  return newItem
}

function getItemByIdFromCategoryId(categoryId, itemId) {
  const category = getCategoryById(categoryId)
  if (!category) return null

  return category.items.find(item => item.id === itemId)
}

function editItemById(categoryId, itemId, newTitle) {
  const item = getItemByIdFromCategoryId(categoryId, itemId)
  const validTitle = isValid(newTitle)

  if (!item || !validTitle) return null
  item.title = validTitle

  return item
}

function removeItemByIdFromCategoryId(categoryId, itemId) {
  const category = getCategoryById(categoryId)
  if (!category) return

  category.items = category.items.filter(item => item.id !== itemId)
}

//--- Tests ---//

console.log('--- addCategory ---')
addCategory('Наушники')
console.log(categories)

console.log('--- getCategoryById ---')
console.log(getCategoryById(2))

console.log('--- editCategoryById ---')
editCategoryById(1, 'Телефоны')
console.log(getCategoryById(1))

console.log('--- removeCategoryById ---')
removeCategoryById(2)
console.log(categories)

console.log('--- addItemToCategory ---')
addItemToCategory(1, 'iPhone 17')
console.log(getCategoryById(1))

console.log('--- getItemByIdFromCategoryId ---')
console.log(getItemByIdFromCategoryId(1, 12))

console.log('--- editItemById ---')
editItemById(1, 11, 'iPhone 16')
console.log(getItemByIdFromCategoryId(1, 11))

console.log('--- removeItemByIdFromCategoryId ---')
removeItemByIdFromCategoryId(1, 12)
console.log(getCategoryById(1))

//--- Validation tests ---//

console.log('--- isValid ---')
console.log(isValid('  Наушники  '))
console.log(isValid('ab'))
console.log(isValid('a'.repeat(21)))
console.log(isValid('   '))
console.log(isValid(42))

console.log('--- addCategory: результат ---')
console.log(addCategory('Ноутбуки'))
console.log(addCategory('ab'))

console.log('--- editCategoryById: результат ---')
console.log(editCategoryById(1, 'Мобильные'))
console.log(editCategoryById(1, 'ab'))
console.log(editCategoryById(999, 'Название'))

console.log('--- addItemToCategory: результат ---')
console.log(addItemToCategory(1, 'Pixel 9'))
console.log(addItemToCategory(1, 'ab'))
console.log(addItemToCategory(999, 'Товар'))

console.log('--- editItemById: результат ---')
console.log(editItemById(1, 11, 'iPhone 15 Pro'))
console.log(editItemById(1, 11, 'ab'))
console.log(editItemById(1, 999, 'Товар'))
console.log(editItemById(999, 11, 'Товар'))
