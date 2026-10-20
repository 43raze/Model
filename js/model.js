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

//--- Categories ---//

function addCategory(title) {
  const newCategory = {
    id: randomId(),
    title,
    items: [],
  }

  categories.push(newCategory)
}

function getCategoryById(categoryId) {
  return categories.find(category => category.id === categoryId)
}

function editCategoryById(categoryId, newTitle) {
  const category = getCategoryById(categoryId)
  if (!category) return null

  category.title = newTitle
}

function removeCategoryById(categoryId) {
  categories = categories.filter(category => category.id !== categoryId)
}

//--- Items ---//

function addItemToCategory(categoryId, title) {
  const category = getCategoryById(categoryId)
  if (!category) return null

  const newItem = {
    id: randomId(),
    title,
  }

  category.items.push(newItem)
}

function getItemByIdFromCategoryId(categoryId, itemId) {
  const category = getCategoryById(categoryId)
  if (!category) return null

  return category.items.find(item => item.id === itemId)
}

function editItemById(categoryId, itemId, newTitle) {
  const item = getItemByIdFromCategoryId(categoryId, itemId)
  if (!item) return null

  item.title = newTitle
}

function removeItemByIdFromCategoryId(categoryId, itemId) {
  const category = getCategoryById(categoryId)
  if (!category) return

  category.items = category.items.filter(item => item.id !== itemId)
}

export {
  categories,
  addCategory,
  getCategoryById,
  editCategoryById,
  removeCategoryById,
  addItemToCategory,
  getItemByIdFromCategoryId,
  editItemById,
  removeItemByIdFromCategoryId,
}
