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
import {
  getCategoryIdFromEvent,
  getItemIdFromEvent,
  getInputTitleValueFromEvent,
} from './utils.js'

function onDOMContentLoaded() {
  handleContentLoaded()
}

//--- Categories ---//

function onSubmitFormAddCategory(e) {
  e.preventDefault()
  handleAddCategory(getInputTitleValueFromEvent(e))
}

function onClickButtonEditCategory(e) {
  // console.log('onClickButtonEditCategory')
  handleOpenCategoryForEditing(getCategoryIdFromEvent(e))
}

function onSubmitFormEditCategory(e) {
  // console.log('->>> onSubmitFormEditCategory', Date.now())
  e.preventDefault()
  handleSaveCategory(
    getCategoryIdFromEvent(e),
    getInputTitleValueFromEvent(e),
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
  // console.log('FOO', Date.now())
  e.preventDefault()
  handleAddItem(getCategoryIdFromEvent(e), getInputTitleValueFromEvent(e))
}

function onClickButtonEditItem(e) {
  handleOpenItemForEditing(getCategoryIdFromEvent(e), getItemIdFromEvent(e))
}

function onSubmitFormEditItem(e) {
  e.preventDefault()
  handleSaveItem(
    getCategoryIdFromEvent(e),
    getItemIdFromEvent(e),
    getInputTitleValueFromEvent(e),
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
// Форма добавления категории: submit (Добавить категорию)
function addListenersFormAddCategory() {
  document
    .querySelector('.add-form--category')
    .addEventListener('submit', onSubmitFormAddCategory)
}

// Категория: click (Изменить, Удалить) + submit формы товара (Добавить)
// + листенеры всех её товаров
function addListenersCategory(elCategory) {
  // console.log('addListenersCategory ??', Date.now())
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

// Товар: click (Изменить, X)
function addListenersCategoryItem(elItem) {
  // console.log('addListenersCategoryItem ??')
  elItem
    .querySelector('.item__action--edit')
    .addEventListener('click', onClickButtonEditItem)
  elItem
    .querySelector('.item__action--delete')
    .addEventListener('click', onClickButtonDeleteItem)
}

// Форма редактирования категории: submit (Сохранить) + click (Отмена)
function addListenersFormEditCategory(elForm) {
  // console.log('-> addListenersFormEditCategory', Date.now())
  elForm.addEventListener('submit', onSubmitFormEditCategory)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditCategory)
}

// Форма редактирования товара: submit (Сохранить) + click (Отмена)
function addListenersFormEditItem(elForm) {
  elForm.addEventListener('submit', onSubmitFormEditItem)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditItem)
}

export {
  onDOMContentLoaded,
  addListenersFormAddCategory,
  addListenersCategory,
  addListenersFormEditCategory,
  addListenersFormEditItem,
}
