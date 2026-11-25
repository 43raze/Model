//--- Constants ---//

const TITLE_MIN_LENGTH = 3
const TITLE_MAX_LENGTH = 20
const ERROR_TITLE_LENGTH = `Название должно быть от ${TITLE_MIN_LENGTH} до ${TITLE_MAX_LENGTH} символов`
const ERROR_CATEGORY_NOT_FOUND = 'Категория не найдена'

const generateRandomId = () => Math.trunc(Math.random() * 0xffffffff)

// Единственный источник данных модели
const categories = [
  {
    id: 1,
    title: 'Смартфоны',
    isEditing: false,
    error: '',
    items: [
      // >>> item <<<
      { id: 11, title: 'iPhone 15', isEditing: false, error: '' },
      { id: 12, title: 'Samsung Galaxy S15', isEditing: false, error: '' },
      { id: 13, title: 'Huawei H15', isEditing: false, error: '' },
    ],
  },
  {
    id: 2,
    title: 'Ноутбуки',
    isEditing: false,
    error: '',
    items: [
      { id: 21, title: 'Lenovo idonknow', isEditing: false, error: '' },
      { id: 22, title: 'Macbook Air', isEditing: false, error: '' },
    ],
  },
  {
    id: 3,
    title: 'Пылесосы',
    isEditing: false,
    error: '',
    items: [
      { id: 31, title: 'Dream', isEditing: false, error: '' },
      { id: 32, title: 'Ecovox T50', isEditing: false, error: '' },
    ],
  },
  {
    id: 4,
    title: 'Цветы',
    isEditing: false,
    error: '',
    items: [
      { id: 41, title: 'Белые розы', isEditing: false, error: '' },
      { id: 42, title: 'Желтые тюльпаны', isEditing: false, error: '' },
    ],
  },
]

//--- Categories ---//

// Возвращает оригинал категории — только для изменений внутри модели
function findCategoryById(categoryId) {
  return categories.find(category => category.id === categoryId)
}

// Возвращает копию всех категорий — для отдачи наружу
function getAllCategories() {
  return structuredClone(categories)
}

// Возвращает копию категории — для отдачи наружу
function getCategoryById(categoryId) {
  const category = findCategoryById(categoryId)
  if (!category) return null

  return structuredClone(category)
}

// Добавляет категорию. Возвращает текст ошибки или '', если добавлено
function addCategory(title) {
  const validTitle = getValidTitle(title)
  if (!validTitle) return ERROR_TITLE_LENGTH

  const newCategory = {
    id: generateRandomId(),
    title: validTitle,
    isEditing: false,
    error: '',
    items: [],
  }

  categories.push(newCategory)
  console.log('addCategory → новая:', newCategory)
  console.log('addCategory → categories:', structuredClone(categories))
  return ''
}

// Включает режим редактирования категории
function openEditingCategoryTitleById(categoryId) {
  const category = findCategoryById(categoryId)
  if (!category) return

  category.isEditing = true
  category.error = ''
}

// Сохраняет название; при ошибке форма остаётся открытой, текст ошибки в category.error
function saveEditingCategoryTitleById(categoryId, categoryTitle) {
  const category = findCategoryById(categoryId)
  if (!category) return

  const validTitle = getValidTitle(categoryTitle)
  if (!validTitle) {
    category.error = ERROR_TITLE_LENGTH
    category.isEditing = true
  } else {
    editCategoryTitleById(categoryId, validTitle)
    category.error = ''
    category.isEditing = false
  }
}

// Выключает режим редактирования категории без сохранения
function cancelEditingCategoryTitleById(categoryId) {
  const category = findCategoryById(categoryId)
  if (!category) return

  category.isEditing = false
  category.error = ''
}

function editCategoryTitleById(categoryId, newTitle) {
  const category = findCategoryById(categoryId)
  if (!category) return null

  category.title = newTitle
}

function deleteCategoryById(categoryId) {
  const index = categories.findIndex(category => category.id === categoryId)
  if (index === -1) return

  categories.splice(index, 1)
}

//--- Items ---//

// Возвращает оригинал товара — только для изменений внутри модели
function findItemById(categoryId, itemId) {
  const category = findCategoryById(categoryId)
  if (!category) return null

  return category.items.find(item => item.id === itemId)
}

// Возвращает копию товара — для отдачи наружу
function getItemById(categoryId, itemId) {
  const item = findItemById(categoryId, itemId)
  if (!item) return null

  return structuredClone(item)
}

// Добавляет товар. Возвращает текст ошибки или '', если добавлено
function addItemToCategory(categoryId, title) {
  const category = findCategoryById(categoryId)
  if (!category) return ERROR_CATEGORY_NOT_FOUND

  const validTitle = getValidTitle(title)
  if (!validTitle) return ERROR_TITLE_LENGTH

  const newItem = {
    id: generateRandomId(),
    title: validTitle,
    isEditing: false,
    error: '',
  }

  category.items.push(newItem)
  console.log('addItemToCategory → новый:', newItem)
  console.log('addItemToCategory → category:', structuredClone(category))
  console.log('addItemToCategory → categories:', structuredClone(categories))
  return ''
}

// Включает режим редактирования товара
function openEditingItemTitleById(categoryId, itemId) {
  const item = findItemById(categoryId, itemId)
  if (!item) return

  item.isEditing = true
  item.error = ''
}

// Сохраняет название; при ошибке форма остаётся открытой, текст ошибки в item.error
function saveEditingItemTitleById(categoryId, itemId, itemTitle) {
  const item = findItemById(categoryId, itemId)
  if (!item) return

  const validTitle = getValidTitle(itemTitle)
  if (!validTitle) {
    item.error = ERROR_TITLE_LENGTH
    item.isEditing = true
  } else {
    editItemTitleById(categoryId, itemId, validTitle)
    item.error = ''
    item.isEditing = false
  }
}

// Выключает режим редактирования товара без сохранения
function cancelEditingItemTitleById(categoryId, itemId) {
  const item = findItemById(categoryId, itemId)
  if (!item) return

  item.isEditing = false
  item.error = ''
}

function editItemTitleById(categoryId, itemId, newTitle) {
  const item = findItemById(categoryId, itemId)
  if (!item) return null

  item.title = newTitle
}

function deleteItemById(categoryId, itemId) {
  const category = findCategoryById(categoryId)
  if (!category) return

  category.items = category.items.filter(item => item.id !== itemId)
}

//--- Validation ---//

function isValidStringLength(str, min, max) {
  return str.length >= min && str.length <= max
}

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

// Возвращает очищенное название с большой буквы или null, если длина не подходит
function getValidTitle(title) {
  const trimmed = title.trim()
  if (!isValidStringLength(trimmed, TITLE_MIN_LENGTH, TITLE_MAX_LENGTH))
    return null

  return capitalize(trimmed)
}

export {
  getAllCategories,
  getCategoryById,
  addCategory,
  openEditingCategoryTitleById,
  saveEditingCategoryTitleById,
  cancelEditingCategoryTitleById,
  deleteCategoryById,
  getItemById,
  addItemToCategory,
  openEditingItemTitleById,
  saveEditingItemTitleById,
  cancelEditingItemTitleById,
  deleteItemById,
}
