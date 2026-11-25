//--- Элементы ---//

// Находит категорию на странице по её id
function getElCategoryById(categoryId) {
  return document.querySelector(`[data-category-id="${categoryId}"]`)
}

// Находит товар по id внутри его категории
function getElItemById(categoryId, itemId) {
  return getElCategoryById(categoryId).querySelector(
    `[data-item-id="${itemId}"]`,
  )
}

//--- Формы ---//

// Находит форму добавления категории
function getElFormAddCategory() {
  return document.querySelector('.add-form--category')
}

// Находит форму добавления товара в категории
function getElFormAddItemByCategoryId(categoryId) {
  return getElCategoryById(categoryId).querySelector('.add-form--item')
}

// Находит форму редактирования категории
function getElFormEditCategoryByCategoryId(categoryId) {
  return getElCategoryById(categoryId).querySelector('.add-form--edit-category')
}

// Находит форму редактирования товара
function getElFormEditItemById(categoryId, itemId) {
  return getElItemById(categoryId, itemId).querySelector('.add-form--edit-item')
}

export {
  getElCategoryById,
  getElItemById,
  getElFormAddCategory,
  getElFormAddItemByCategoryId,
  getElFormEditCategoryByCategoryId,
  getElFormEditItemById,
}
