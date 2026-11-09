import {
  generateCategory,
  generateFormEditCategory,
  generateFormEditItem,
} from './generators.js'
import {
  removeListenersCategory,
  addListenersCategory,
  addListenersFormEditCategory,
  addListenersFormEditItem,
} from './listeners.js'

function getElCategoryById(categoryId) {
  return document.querySelector(`[data-category-id="${categoryId}"]`)
}

function getElItemById(categoryId, itemId) {
  return getElCategoryById(categoryId).querySelector(
    `[data-item-id="${itemId}"]`,
  )
}

function renderCategories(categories) {
  const elCategories = document.querySelector('.categories')
  const elEmptyState = document.querySelector('.empty-state')

  elEmptyState.hidden = categories.length > 0
  elCategories.querySelectorAll('.category').forEach(removeListenersCategory)
  elCategories.innerHTML = ''
  elCategories.innerHTML = categories.map(generateCategory).join('')
  elCategories.querySelectorAll('.category').forEach(addListenersCategory)
}

function renderFormError(elForm, text) {
  elForm.querySelector('.form-error').textContent = text
}

function clearFormError(elForm) {
  renderFormError(elForm, '')
}

function resetFormAddCategory() {
  const elForm = document.querySelector('.add-form--category')
  elForm.reset()
  clearFormError(elForm)
}

function renderFormAddCategoryError(text) {
  const elForm = document.querySelector('.add-form--category')
  renderFormError(elForm, text)
}

function renderFormAddItemError(categoryId, text) {
  const elForm = getElCategoryById(categoryId).querySelector('.add-form--item')
  renderFormError(elForm, text)
}

function renderFormEditCategory(category) {
  const elCategory = getElCategoryById(category.id)
  const elHeader = elCategory.querySelector('.category__header')

  elHeader.outerHTML = generateFormEditCategory()

  const elForm = elCategory.querySelector('.add-form--edit-category')
  const elInput = elForm.elements.title

  // addListenersFormEditCategory(elForm)

  elForm.addEventListener('submit', onSubmitFormEditCategory)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditCategory)

  processValue(elInput)

  // elInput.value = category.title
  // elInput.focus()
}

function renderFormEditCategoryError(categoryId, text) {
  const elForm = getElCategoryById(categoryId).querySelector(
    '.add-form--edit-category',
  )

  renderFormError(elForm, text)
}

function renderFormEditItem(categoryId, item) {
  const elItem = getElItemById(categoryId, item.id)

  elItem.innerHTML = generateFormEditItem()

  const elForm = elItem.querySelector('.add-form--edit-item')
  const elInput = elForm.elements.title

  addListenersFormEditItem(elForm)
  elInput.value = item.title
  elInput.focus()
}

function renderFormEditItemError(categoryId, itemId, text) {
  const elForm = getElItemById(categoryId, itemId).querySelector(
    '.add-form--edit-item',
  )

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
