import {
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
} from '../controller.js'

function getCategoryIdFromEvent(e) {
  return +e.currentTarget.closest('.category').dataset.categoryId
}

function getItemIdFromEvent(e) {
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
  console.log('onClickButtonEditCategory')
  handleOpenCategoryForEditing(getCategoryIdFromEvent(e))
}

function onSubmitFormEditCategory(e) {
  console.log('->>> onSubmitFormEditCategory', Date.now())
  e.preventDefault()
  handleSaveCategory(
    getCategoryIdFromEvent(e),
    e.currentTarget.elements.title.value,
  )
}

function onClickButtonCancelEditCategory() {
  handleCancelEditCategory()
}

function onClickButtonDeleteCategory(e) {
  handleRemoveCategory(getCategoryIdFromEvent(e))
}

//--- Items ---//

function onSubmitFormAddItem(e) {
  console.log('FOO', Date.now())
  e.preventDefault()
  handleAddItem(getCategoryIdFromEvent(e), e.currentTarget.elements.title.value)
}

function onClickButtonEditItem(e) {
  handleOpenItemForEditing(getCategoryIdFromEvent(e), getItemIdFromEvent(e))
}

function onSubmitFormEditItem(e) {
  e.preventDefault()
  handleSaveItem(
    getCategoryIdFromEvent(e),
    getItemIdFromEvent(e),
    e.currentTarget.elements.title.value,
  )
}

function onClickButtonCancelEditItem() {
  handleCancelEditItem()
}

function onClickButtonDeleteItem(e) {
  handleRemoveItem(getCategoryIdFromEvent(e), getItemIdFromEvent(e))
}

//--- Init ---//

// renderFormAddCategoryListener
function addListenersFormAddCategory() {
  document
    .querySelector('.add-form--category')
    .addEventListener('submit', onSubmitFormAddCategory)
}

function removeListenersCategory(elCategory) {
  console.log('removeListenersCategory ??')
  elCategory
    .querySelector('.category__action--edit')
    .removeEventListener('click', onClickButtonEditCategory)
  elCategory
    .querySelector('.category__action--delete')
    .removeEventListener('click', onClickButtonDeleteCategory)
  elCategory
    .querySelector('.add-form--item')
    .removeEventListener('submit', onSubmitFormAddItem)
  elCategory.querySelectorAll('.item').forEach(addListenersCategoryItem)
}

function addListenersCategory(elCategory) {
  console.log('addListenersCategory ??', Date.now())
  elCategory
    .querySelector('.category__action--edit')
    .addEventListener('click', onClickButtonEditCategory)
  elCategory
    .querySelector('.category__action--delete')
    .addEventListener('click', onClickButtonDeleteCategory)
  elCategory
    .querySelector('.add-form--item')
    .addEventListener('submit', onSubmitFormAddItem)
  elCategory.querySelectorAll('.item').forEach(addListenersCategoryItem)
}

function addListenersCategoryItem(elItem) {
  // console.log('addListenersCategoryItem ??')
  elItem
    .querySelector('.item__action--edit')
    .addEventListener('click', onClickButtonEditItem)
  elItem
    .querySelector('.item__action--delete')
    .addEventListener('click', onClickButtonDeleteItem)
}

function addListenersFormEditCategory(elForm) {
  // console.log('-> addListenersFormEditCategory', Date.now())
  elForm.addEventListener('submit', onSubmitFormEditCategory)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditCategory)
}

function addListenersFormEditItem(elForm) {
  elForm.addEventListener('submit', onSubmitFormEditItem)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditItem)
}

function processValue(elInput) {
  elInput.value = category.title
  elInput.focus()
}

export {
  addListenersFormAddCategory,
  onDOMContentLoaded,
  removeListenersCategory,
  addListenersCategory,
  addListenersFormEditCategory,
  addListenersFormEditItem,
}
