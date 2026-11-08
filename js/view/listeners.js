import {
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
} from '../controller.js'

function getCategoryId(e) {
  return +e.currentTarget.closest('.category').dataset.categoryId
}

function getItemId(e) {
  return +e.currentTarget.closest('.item').dataset.itemId
}

function onDOMContentLoaded() {
  handleContentLoaded()
}

//--- Categories ---//

function onSubmitFormAddCategory(e) {
  e.preventDefault()
  handleAddCategory(e.currentTarget.elements.title.value)
}

function onClickButtonEditCategory(e) {
  handleOpenCategoryForEditing(getCategoryId(e))
}

function onSubmitFormEditCategory(e) {
  e.preventDefault()
  handleEditCategory(getCategoryId(e), e.currentTarget.elements.title.value)
}

function onClickButtonCancelEditCategory() {
  handleCancelEditCategory()
}

function onClickButtonDeleteCategory(e) {
  handleRemoveCategory(getCategoryId(e))
}

//--- Items ---//

function onSubmitFormAddItem(e) {
  e.preventDefault()
  handleAddItem(getCategoryId(e), e.currentTarget.elements.title.value)
}

function onClickButtonEditItem(e) {
  handleOpenItemForEditing(getCategoryId(e), getItemId(e))
}

function onSubmitFormEditItem(e) {
  e.preventDefault()
  handleEditItem(
    getCategoryId(e),
    getItemId(e),
    e.currentTarget.elements.title.value,
  )
}

function onClickButtonCancelEditItem() {
  handleCancelEditItem()
}

function onClickButtonDeleteItem(e) {
  handleRemoveItem(getCategoryId(e), getItemId(e))
}

//--- Init ---//

function initListeners() {
  document
    .querySelector('.add-form--category')
    .addEventListener('submit', onSubmitFormAddCategory)
}

function addCategoryListeners(elCategory) {
  elCategory
    .querySelector('.category__action--edit')
    .addEventListener('click', onClickButtonEditCategory)
  elCategory
    .querySelector('.category__action--delete')
    .addEventListener('click', onClickButtonDeleteCategory)
  elCategory
    .querySelector('.add-form--item')
    .addEventListener('submit', onSubmitFormAddItem)
  elCategory.querySelectorAll('.item').forEach(addItemListeners)
}

function addItemListeners(elItem) {
  elItem
    .querySelector('.item__action--edit')
    .addEventListener('click', onClickButtonEditItem)
  elItem
    .querySelector('.item__action--delete')
    .addEventListener('click', onClickButtonDeleteItem)
}

function addFormEditCategoryListeners(elForm) {
  elForm.addEventListener('submit', onSubmitFormEditCategory)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditCategory)
}

function addFormEditItemListeners(elForm) {
  elForm.addEventListener('submit', onSubmitFormEditItem)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditItem)
}

export {
  initListeners,
  onDOMContentLoaded,
  addCategoryListeners,
  addFormEditCategoryListeners,
  addFormEditItemListeners,
}
