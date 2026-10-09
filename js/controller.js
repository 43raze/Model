const ERROR_TITLE = 'Название должно быть от 3 до 20 символов'

function handleAddCategory(title) {
  const result = addCategory(title)
  if (result === null) return renderFormAddCategoryError(ERROR_TITLE)

  renderFormAddCategoryReset()
  renderCategories(categories)
}

function handleAddItem(categoryId, title) {
  const result = addItemToCategory(categoryId, title)
  if (result === null) return renderFormAddItemError(categoryId, ERROR_TITLE)

  renderCategories(categories)
}

function handleOpenCategoryForEditing(categoryId) {
  const category = getCategoryById(categoryId)
  if (!category) return

  renderFormEditCategory(category)
}

function handleEditCategory(categoryId, title) {
  const result = editCategoryById(categoryId, title)
  if (result === null) return renderFormEditCategoryError(categoryId, ERROR_TITLE)

  renderCategories(categories)
}

function handleCancelEditCategory() {
  renderCategories(categories)
}

function handleRemoveCategory(categoryId) {
  removeCategoryById(categoryId)
  renderCategories(categories)
}

initListeners()
renderCategories(categories)
