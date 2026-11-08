import {
  getCategoriesAll,
  addCategory,
  getCategoryById,
  editCategoryById,
  removeCategoryById,
  addItemToCategory,
  getItemByIdFromCategoryId,
  editItemById,
  removeItemByIdFromCategoryId,
} from './model.js'
import { ERROR_TITLE, normalizeTitle } from './validation.js'
import {
  renderCategories,
  renderFormAddCategoryReset,
  renderFormAddCategoryError,
  renderFormAddItemError,
  renderFormEditCategory,
  renderFormEditCategoryError,
  renderFormEditItem,
  renderFormEditItemError,
} from './view/renders.js'
import { initListeners, onDOMContentLoaded } from './view/listeners.js'

function handleContentLoaded() {
  initListeners() // ?
  renderCategories(getCategoriesAll())
}

function handleAddCategory(title) {
  const validTitle = normalizeTitle(title)
  if (!validTitle) return renderFormAddCategoryError(ERROR_TITLE)

  addCategory(validTitle)

  renderFormAddCategoryReset()
  renderCategories(getCategoriesAll())
}

function handleAddItem(categoryId, title) {
  const validTitle = normalizeTitle(title)
  if (!validTitle) return renderFormAddItemError(categoryId, ERROR_TITLE)

  addItemToCategory(categoryId, validTitle)

  renderCategories(getCategoriesAll())
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

  renderCategories(getCategoriesAll())
}

function handleCancelEditCategory() {
  renderCategories(getCategoriesAll())
}

function handleRemoveCategory(categoryId) {
  removeCategoryById(categoryId)
  renderCategories(getCategoriesAll())
}

function handleOpenItemForEditing(categoryId, itemId) {
  const item = getItemByIdFromCategoryId(categoryId, itemId)
  if (!item) return

  renderFormEditItem(categoryId, item)
}

function handleEditItem(categoryId, itemId, title) {
  const validTitle = normalizeTitle(title)
  if (!validTitle)
    return renderFormEditItemError(categoryId, itemId, ERROR_TITLE)

  editItemById(categoryId, itemId, validTitle)

  renderCategories(getCategoriesAll())
}

function handleCancelEditItem() {
  renderCategories(getCategoriesAll())
}

function handleRemoveItem(categoryId, itemId) {
  removeItemByIdFromCategoryId(categoryId, itemId)
  renderCategories(getCategoriesAll())
}

export {
  handleContentLoaded,
  handleAddCategory,
  handleAddItem,
  handleOpenCategoryForEditing,
  handleEditCategory,
  handleCancelEditCategory,
  handleRemoveCategory,
  handleOpenItemForEditing,
  handleEditItem,
  handleCancelEditItem,
  handleRemoveItem,
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded)
