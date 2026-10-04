import { categories } from './model.js'
import {
  generateCategory,
  generateEmptyState,
  generateFormError,
} from './templates.js'

const categoriesContainer = document.querySelector('.categories')

function renderCategories() {
  if (!categories.length) {
    categoriesContainer.innerHTML = generateEmptyState('Категорий пока нет')
    return
  }

  categoriesContainer.innerHTML = categories.map(generateCategory).join('')
}

function renderFormError(elForm, text) {
  clearFormError(elForm)
  elForm.insertAdjacentHTML('beforeend', generateFormError(text))
}

function clearFormError(elForm) {
  const elError = elForm.querySelector('.form-error')
  if (elError) elError.remove()
}

export { renderCategories, renderFormError, clearFormError }
