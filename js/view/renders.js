import {
  generateCategory,
  generateFormEditCategory,
  generateFormEditItem,
} from './generators.js'
import {
  addListenersCategory,
  addListenersFormEditCategory,
  addListenersFormEditItem,
} from './listeners.js'
import {
  getElCategoryById,
  getElItemById,
  getElFormAddCategory,
  getElFormAddItemByCategoryId,
  getElFormEditCategoryById,
  getElFormEditItemById,
} from './utils.js'

function renderCategories(categories) {
  const elCategories = document.querySelector('.categories')
  const elEmptyState = document.querySelector('.empty-state')

  elEmptyState.hidden = categories.length > 0
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
  const elForm = getElFormAddCategory()
  elForm.reset()
  clearFormError(elForm)
}

function renderFormAddCategoryError(text) {
  const elForm = getElFormAddCategory()
  renderFormError(elForm, text)
}

function renderFormAddItemError(categoryId, text) {
  const elForm = getElFormAddItemByCategoryId(categoryId)
  renderFormError(elForm, text)
}

function renderFormEditCategory(category) {
  const elCategory = getElCategoryById(category.id)
  const elHeader = elCategory.querySelector('.category__header')

  elHeader.outerHTML = generateFormEditCategory()

  const elForm = getElFormEditCategoryById(category.id)
  const elInput = elForm.elements.title

  addListenersFormEditCategory(elForm)

  elInput.value = category.title
  elInput.focus()
}

function renderFormEditCategoryError(categoryId, text) {
  const elForm = getElFormEditCategoryById(categoryId)

  renderFormError(elForm, text)
}

function renderFormEditItem(categoryId, item) {
  const elItem = getElItemById(categoryId, item.id)

  elItem.innerHTML = generateFormEditItem()

  const elForm = getElFormEditItemById(categoryId, item.id)
  const elInput = elForm.elements.title

  addListenersFormEditItem(elForm)
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
