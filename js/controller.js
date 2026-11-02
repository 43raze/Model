import {
  categories,
  addCategory,
  getCategoryById,
  editCategoryById,
  removeCategoryById,
  addItemToCategory,
} from './model.js'
import { ERROR_TITLE, normalizeTitle } from './validation.js'
import {
  renderCategories,
  renderFormAddCategoryReset,
  renderFormAddCategoryError,
  renderFormAddItemError,
  renderFormEditCategory,
  renderFormEditCategoryError,
} from './view/renders.js'
import { initListeners } from './view/listeners.js'

function handleAddCategory(title) {
  const validTitle = normalizeTitle(title)
  if (!validTitle) return renderFormAddCategoryError(ERROR_TITLE)

  addCategory(validTitle)

  renderFormAddCategoryReset()
  renderCategories(categories)
}

function handleAddItem(categoryId, title) {
  const validTitle = normalizeTitle(title)
  if (!validTitle) return renderFormAddItemError(categoryId, ERROR_TITLE)

  addItemToCategory(categoryId, validTitle)

  renderCategories(categories)
}

function handleOpenCategoryForEditing(categoryId) {
  const category = getCategoryById(categoryId)
  if (!category) return

  renderFormEditCategory(category)
}

function handleEditCategory(categoryId, title) {
  const validTitle = normalizeTitle(title)
  if (!validTitle) return renderFormEditCategoryError(categoryId, ERROR_TITLE)

  editCategoryById(categoryId, validTitle)

  renderCategories(categories)
}

function handleCancelEditCategory() {
  renderCategories(categories)
}

function handleRemoveCategory(categoryId) {
  removeCategoryById(categoryId)
  renderCategories(categories)
}

initListeners() // ?
renderCategories(categories)

export {
  handleAddCategory,
  handleAddItem,
  handleOpenCategoryForEditing,
  handleEditCategory,
  handleCancelEditCategory,
  handleRemoveCategory,
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded)
