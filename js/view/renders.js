function getElCategory(categoryId) {
  return document.querySelector(`[data-category-id="${categoryId}"]`)
}

function renderCategories(categories) {
  const elCategories = document.querySelector('.categories')
  const elEmptyState = document.querySelector('.empty-state')

  elEmptyState.hidden = categories.length > 0
  elCategories.innerHTML = categories.map(generateCategory).join('')
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

  elHeader.outerHTML = generateFormEditCategory()

  const elForm = elCategory.querySelector('.add-form--edit-category')
  const elInput = elForm.elements.title

  elInput.value = category.title
  elInput.focus()
}

function renderFormEditCategoryError(categoryId, text) {
  const elForm = getElCategory(categoryId).querySelector(
    '.add-form--edit-category',
  )

  renderFormError(elForm, text)
}
