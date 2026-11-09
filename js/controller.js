import {
  getAllCategories,
  addCategory,
  getCategoryById,
  editCategoryTitleById,
  removeCategoryById,
  addItemToCategory,
  getItemByIdFromCategoryId,
  editItemTitleByIdFromCategoryId,
  removeItemByIdFromCategoryId,
} from './model.js'
import { ERROR_TITLE_LENGTH, getValidTitle } from './validation.js'
import {
  renderCategories,
  resetFormAddCategory,
  renderFormAddCategoryError,
  renderFormAddItemError,
  renderFormEditCategory,
  renderFormEditCategoryError,
  renderFormEditItem,
  renderFormEditItemError,
} from './view/renders.js'
import { addListenersFormAddCategory, onDOMContentLoaded } from './view/listeners.js'

function handleContentLoaded() {
  addListenersFormAddCategory()
  renderCategories(getAllCategories())
}

function handleAddCategory(title) {
  const validTitle = getValidTitle(title)
  if (!validTitle) return renderFormAddCategoryError(ERROR_TITLE_LENGTH)

  addCategory(validTitle)

  resetFormAddCategory()
  renderCategories(getAllCategories())
}

function handleAddItem(categoryId, title) {
  const validTitle = getValidTitle(title)
  if (!validTitle) return renderFormAddItemError(categoryId, ERROR_TITLE_LENGTH)

  addItemToCategory(categoryId, validTitle)

  renderCategories(getAllCategories())
}

function handleOpenCategoryForEditing(categoryId) {
  const category = getCategoryById(categoryId)
  if (!category) return

  renderFormEditCategory(category)
}

function handleSaveCategory(categoryId, title) {
  const validTitle = getValidTitle(title)
  if (!validTitle) return renderFormEditCategoryError(categoryId, ERROR_TITLE_LENGTH)

  editCategoryTitleById(categoryId, validTitle)

  renderCategories(getAllCategories())
}

function handleCancelEditCategory() {
  renderCategories(getAllCategories())
}

function handleRemoveCategory(categoryId) {
  removeCategoryById(categoryId)
  renderCategories(getAllCategories())
}

function handleOpenItemForEditing(categoryId, itemId) {
  const item = getItemByIdFromCategoryId(categoryId, itemId)
  if (!item) return

  renderFormEditItem(categoryId, item)
}

function handleSaveItem(categoryId, itemId, title) {
  const validTitle = getValidTitle(title)
  if (!validTitle)
    return renderFormEditItemError(categoryId, itemId, ERROR_TITLE_LENGTH)

  editItemTitleByIdFromCategoryId(categoryId, itemId, validTitle)

  renderCategories(getAllCategories())
}

function handleCancelEditItem() {
  renderCategories(getAllCategories())
}

function handleRemoveItem(categoryId, itemId) {
  removeItemByIdFromCategoryId(categoryId, itemId)
  renderCategories(getAllCategories())
}

export {
  handleContentLoaded,
  handleAddCategory,
  handleAddItem,
  handleOpenCategoryForEditing,
  handleSaveCategory,
  handleCancelEditCategory,
  handleRemoveCategory,
  handleOpenItemForEditing,
  handleSaveItem,
  handleCancelEditItem,
  handleRemoveItem,
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded)
