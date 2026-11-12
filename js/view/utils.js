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
function getElFormEditCategoryById(categoryId) {
  return getElCategoryById(categoryId).querySelector('.add-form--edit-category')
}

// Находит форму редактирования товара
function getElFormEditItemById(categoryId, itemId) {
  return getElItemById(categoryId, itemId).querySelector('.add-form--edit-item')
}

//--- Данные из события ---//

// Возвращает id категории, в которой нажали кнопку или отправили форму
function getCategoryIdFromEvent(e) {
  return +e.currentTarget.closest('.category').dataset.categoryId
}

// Возвращает id товара, в котором нажали кнопку или отправили форму
function getItemIdFromEvent(e) {
  return +e.currentTarget.closest('.item').dataset.itemId
}

// Возвращает текст, который ввели в поле title отправленной формы
function getInputTitleValueFromEvent(e) {
  return e.currentTarget.elements.title.value
}

export {
  getElCategoryById,
  getElItemById,
  getElFormAddCategory,
  getElFormAddItemByCategoryId,
  getElFormEditCategoryById,
  getElFormEditItemById,
  getCategoryIdFromEvent,
  getItemIdFromEvent,
  getInputTitleValueFromEvent,
}
