const generateRandomId = () => Math.trunc(Math.random() * 0xffffffff)

const categories = [
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

// Исходные данные не меняются — модель работает с копией
let categoriesCopy = structuredClone(categories)

//--- Categories ---//

// Возвращает рабочую категорию из categoriesCopy — только для изменений внутри модели
function findCategoryById(categoryId) {
  return categoriesCopy.find(category => category.id === categoryId)
}

function getAllCategories() {
  return structuredClone(categoriesCopy)
}

// Возвращает копию категории — для отдачи наружу
function getCategoryById(categoryId) {
  const category = findCategoryById(categoryId)
  if (!category) return null

  return structuredClone(category)
}

function addCategory(title) {
  const newCategory = {
    id: generateRandomId(),
    title,
    items: [],
  }

  categoriesCopy.push(newCategory)
}

function editCategoryTitleById(categoryId, newTitle) {
  const category = findCategoryById(categoryId)
  if (!category) return null

  category.title = newTitle
}

function removeCategoryById(categoryId) {
  categoriesCopy = categoriesCopy.filter(category => category.id !== categoryId)
}

//--- Items ---//

// Возвращает рабочий товар из categoriesCopy — только для изменений внутри модели
function findItemByIdFromCategoryId(categoryId, itemId) {
  const category = findCategoryById(categoryId)
  if (!category) return null

  return category.items.find(item => item.id === itemId)
}

// Возвращает копию товара — для отдачи наружу
function getItemByIdFromCategoryId(categoryId, itemId) {
  const item = findItemByIdFromCategoryId(categoryId, itemId)
  if (!item) return null

  return structuredClone(item)
}

function addItemToCategory(categoryId, title) {
  const category = findCategoryById(categoryId)
  if (!category) return null

  const newItem = {
    id: generateRandomId(),
    title,
  }

  category.items.push(newItem)
}

function editItemTitleByIdFromCategoryId(categoryId, itemId, newTitle) {
  const item = findItemByIdFromCategoryId(categoryId, itemId)
  if (!item) return null

  item.title = newTitle
}

function removeItemByIdFromCategoryId(categoryId, itemId) {
  const category = findCategoryById(categoryId)
  if (!category) return

  category.items = category.items.filter(item => item.id !== itemId)
}

export {
  getAllCategories,
  getCategoryById,
  addCategory,
  editCategoryTitleById,
  removeCategoryById,
  getItemByIdFromCategoryId,
  addItemToCategory,
  editItemTitleByIdFromCategoryId,
  removeItemByIdFromCategoryId,
}
