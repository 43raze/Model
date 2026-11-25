import {
  generateCategory,
  generateFormEditCategory,
  generateFormEditItem,
} from './generators.js'
import {
  getElCategoryById,
  getElItemById,
  getElFormAddCategory,
  getElFormAddItemByCategoryId,
  getElFormEditCategoryByCategoryId,
  getElFormEditItemById,
} from './utils.js'

function renderCategories(categories) {
  const elCategories = document.querySelector('.categories')
  const elEmptyState = document.querySelector('.empty-state')

  elEmptyState.hidden = categories.length > 0
  elCategories.replaceChildren(...categories.map(generateCategory))
}

function renderFormError(elForm, text) {
  elForm.querySelector('.form-error').textContent = text
}

function clearFormError(elForm) {
  renderFormError(elForm, '')
}

function resetFormAddCategory() {
  const elForm = getElFormAddCategory()
  elForm.reset()
  clearFormError(elForm)
}

function renderFormAddCategoryError(text) {
  const elForm = document.querySelector('.add-form--category')
  renderFormError(elForm, text)
}

function renderFormAddItemError(categoryId, text) {
  const elForm = getElFormAddItemByCategoryId(categoryId)
  renderFormError(elForm, text)
}

function renderFormEditCategory(category) {
  const elCategory = getElCategoryById(category.id)
  const elHeader = elCategory.querySelector('.category__header')

  const elForm = generateFormEditCategory()
  const elInput = elForm.elements.title

  elHeader.replaceWith(elForm)

  elInput.value = category.title
  elInput.focus()
}

function renderFormEditCategoryError(categoryId, text) {
  const elForm = getElFormEditCategoryByCategoryId(categoryId)

  renderFormError(elForm, text)
}

function renderFormEditItem(categoryId, item) {
  const elItem = getElItemById(categoryId, item.id)

  const elForm = generateFormEditItem()
  const elInput = elForm.elements.title

  elItem.replaceChildren(elForm)

  elInput.value = item.title
  elInput.focus()
}

function renderFormEditItemError(categoryId, itemId, text) {
  const elForm = getElFormEditItemById(categoryId, itemId)

  renderFormError(elForm, text)
}

export {
  renderCategories,
  resetFormAddCategory,
  renderFormAddCategoryError,
  renderFormAddItemError,
  renderFormEditCategory,
  renderFormEditCategoryError,
  renderFormEditItem,
  renderFormEditItemError,
}
