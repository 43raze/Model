import {
  getAllCategories,
  getCategoryById,
  addCategory,
  openEditingCategoryTitleById,
  saveEditingCategoryTitleById,
  cancelEditingCategoryTitleById,
  deleteCategoryById,
  getItemByIdFromCategoryId,
  addItemToCategory,
  openEditingItemTitleByIdFromCategoryId,
  saveEditingItemTitleByIdFromCategoryId,
  cancelEditingItemTitleByIdFromCategoryId,
  deleteItemByIdFromCategoryId,
} from './model.js'
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
import { onDOMContentLoaded, addFormAddCategoryListener } from './view/listeners.js'

function handleContentLoaded() {
  addFormAddCategoryListener()
  renderCategories(getAllCategories())
}

function handleAddCategory(title) {
  const error = addCategory(title)
  if (error) return renderFormAddCategoryError(error)

  resetFormAddCategory()
  renderCategories(getAllCategories())
}

function handleAddItem(categoryId, title) {
  const error = addItemToCategory(categoryId, title)
  if (error) return renderFormAddItemError(categoryId, error)

  renderCategories(getAllCategories())
}

function handleOpenCategoryForEditing(categoryId) {
  openEditingCategoryTitleById(categoryId)

  const category = getCategoryById(categoryId)
  if (!category) return

  renderFormEditCategory(category)
}

function handleSaveCategory(categoryId, title) {
  saveEditingCategoryTitleById(categoryId, title)

  const category = getCategoryById(categoryId)
  if (!category) return
  if (category.error) return renderFormEditCategoryError(categoryId, category.error)

  renderCategories(getAllCategories())
}

function handleCancelEditCategory(categoryId) {
  cancelEditingCategoryTitleById(categoryId)
  renderCategories(getAllCategories())
}

function handleDeleteCategory(categoryId) {
  deleteCategoryById(categoryId)
  renderCategories(getAllCategories())
}

function handleOpenItemForEditing(categoryId, itemId) {
  openEditingItemTitleByIdFromCategoryId(categoryId, itemId)

  const item = getItemByIdFromCategoryId(categoryId, itemId)
  if (!item) return

  renderFormEditItem(categoryId, item)
}

function handleSaveItem(categoryId, itemId, title) {
  saveEditingItemTitleByIdFromCategoryId(categoryId, itemId, title)

  const item = getItemByIdFromCategoryId(categoryId, itemId)
  if (!item) return
  if (item.error)
    return renderFormEditItemError(categoryId, itemId, item.error)

  renderCategories(getAllCategories())
}

function handleCancelEditItem(categoryId, itemId) {
  cancelEditingItemTitleByIdFromCategoryId(categoryId, itemId)
  renderCategories(getAllCategories())
}

function handleDeleteItem(categoryId, itemId) {
  deleteItemByIdFromCategoryId(categoryId, itemId)
  renderCategories(getAllCategories())
}

export {
  handleContentLoaded,
  handleAddCategory,
  handleAddItem,
  handleOpenCategoryForEditing,
  handleSaveCategory,
  handleCancelEditCategory,
  handleDeleteCategory,
  handleOpenItemForEditing,
  handleSaveItem,
  handleCancelEditItem,
  handleDeleteItem,
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded)
