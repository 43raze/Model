function getCategoryId(e) {
  return +e.target.closest('.category').dataset.categoryId
}

function onSubmitFormAddCategory(e) {
  e.preventDefault()
  handleAddCategory(e.target.elements.title.value)
}

function onSubmitFormAddItem(e) {
  e.preventDefault()
  handleAddItem(getCategoryId(e), e.target.elements.title.value)
}

function onClickButtonEditCategory(e) {
  handleOpenCategoryForEditing(getCategoryId(e))
}

function onSubmitFormEditCategory(e) {
  e.preventDefault()
  handleEditCategory(getCategoryId(e), e.target.elements.title.value)
}

function onClickButtonCancelEditCategory() {
  handleCancelEditCategory()
}

function onClickButtonDeleteCategory(e) {
  handleRemoveCategory(getCategoryId(e))
}

function onSubmitCategories(e) {
  if (e.target.matches('.add-form--item')) onSubmitFormAddItem(e)
  if (e.target.matches('.add-form--edit-category')) onSubmitFormEditCategory(e)
}

function onClickCategories(e) {
  if (e.target.closest('.category__action--edit')) onClickButtonEditCategory(e)
  if (e.target.closest('.category__action--delete'))
    onClickButtonDeleteCategory(e)
  if (e.target.closest('.add-form__button--cancel'))
    onClickButtonCancelEditCategory()
}

function initListeners() {
  document
    .querySelector('.add-form--category')
    .addEventListener('submit', onSubmitFormAddCategory)

  const elCategories = document.querySelector('.categories')
  elCategories.addEventListener('submit', onSubmitCategories)
  elCategories.addEventListener('click', onClickCategories)
}
