import {
  generateCategory,
  generateFormEditCategory,
  generateFormEditItem,
} from './generators.js'
import {
  addCategoryListeners,
  addFormEditCategoryListeners,
  addFormEditItemListeners,
} from './listeners.js'

function getElCategory(categoryId) {
  return document.querySelector(`[data-category-id="${categoryId}"]`)
}

function getElItem(categoryId, itemId) {
  return getElCategory(categoryId).querySelector(`[data-item-id="${itemId}"]`)
}

function renderCategories(categories) {
  const elCategories = document.querySelector('.categories')
  const elEmptyState = document.querySelector('.empty-state')

  elEmptyState.hidden = categories.length > 0
  elCategories.innerHTML = categories.map(generateCategory).join('')
  elCategories.querySelectorAll('.category').forEach(addCategoryListeners)
}

function renderFormError(elForm, text) {
  elForm.querySelector('.form-error').textContent = text
}

function clearFormError(elForm) {
  renderFormError(elForm, '')
}

function renderFormAddCategoryReset() {
  const elForm = document.querySelector('.add-form--category')
  elForm.reset()
  clearFormError(elForm)
}

function renderFormAddCategoryError(text) {
  const elForm = document.querySelector('.add-form--category')
  renderFormError(elForm, text)
}

function renderFormAddItemError(categoryId, text) {
  const elForm = getElCategory(categoryId).querySelector('.add-form--item')
  renderFormError(elForm, text)
}

function renderFormEditCategory(category) {
  const elCategory = getElCategory(category.id)
  const elHeader = elCategory.querySelector('.category__header')

  elHeader.outerHTML = generateFormEditCategory(category)

  const elForm = elCategory.querySelector('.add-form--edit-category')

  addFormEditCategoryListeners(elForm)
  elForm.elements.title.focus()
}

function renderFormEditCategoryError(categoryId, text) {
  const elForm = getElCategory(categoryId).querySelector(
    '.add-form--edit-category',
  )

  renderFormError(elForm, text)
}

function renderFormEditItem(categoryId, item) {
  const elItem = getElItem(categoryId, item.id)

  elItem.innerHTML = generateFormEditItem(item)

  const elForm = elItem.querySelector('.add-form--edit-item')

  addFormEditItemListeners(elForm)
  elForm.elements.title.focus()
}

function renderFormEditItemError(categoryId, itemId, text) {
  const elForm = getElItem(categoryId, itemId).querySelector(
    '.add-form--edit-item',
  )

  renderFormError(elForm, text)
}

export {
  renderCategories,
  renderFormAddCategoryReset,
  renderFormAddCategoryError,
  renderFormAddItemError,
  renderFormEditCategory,
  renderFormEditCategoryError,
  renderFormEditItem,
  renderFormEditItemError,
}
