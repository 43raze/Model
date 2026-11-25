import {
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
} from '../controller.js'
import { getElFormAddCategory } from './utils.js'

//--- Данные из события ---//

// Возвращает id категории, в которой нажали кнопку или отправили форму
function getCategoryIdFromEvent(e) {
  return +e.currentTarget.closest('.category').dataset.categoryId
}

// Возвращает id товара, в котором нажали кнопку или отправили форму
function getItemIdFromEvent(e) {
  return +e.currentTarget.closest('.item').dataset.itemId
}

// Возвращает текст, который ввели в поле title отправленной формы
function getInputTitleValueFromEvent(e) {
  return e.currentTarget.elements.title.value
}

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

function onClickButtonCancelEditCategory(e) {
  handleCancelEditCategory(getCategoryIdFromEvent(e))
}

function onClickButtonDeleteCategory(e) {
  handleDeleteCategory(getCategoryIdFromEvent(e))
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

function onClickButtonCancelEditItem(e) {
  handleCancelEditItem(getCategoryIdFromEvent(e), getItemIdFromEvent(e))
}

function onClickButtonDeleteItem(e) {
  handleDeleteItem(getCategoryIdFromEvent(e), getItemIdFromEvent(e))
}

//--- Init ---//

// Форма добавления категории: submit (Добавить категорию)
function addFormAddCategoryListener() {
  getElFormAddCategory().addEventListener('submit', onSubmitFormAddCategory)
}

// Категория: click (Изменить, Удалить) + submit формы товара (Добавить)
// + листенеры всех её товаров
function addCategoryListeners(elCategory) {
  // console.log('addCategoryListeners ??', Date.now())
  elCategory
    .querySelector('.category__action--edit')
    .addEventListener('click', onClickButtonEditCategory)
  elCategory
    .querySelector('.category__action--delete')
    .addEventListener('click', onClickButtonDeleteCategory)
  elCategory
    .querySelector('.add-form--item')
    .addEventListener('submit', onSubmitFormAddItem)
  elCategory.querySelectorAll('.item').forEach(addCategoryItemListeners)
}

// Товар: click по кнопкам «Изменить» (редактировать) и «X» (удалить)
function addCategoryItemListeners(elItem) {
  // console.log('addCategoryItemListeners ??')
  elItem
    .querySelector('.item__action--edit')
    .addEventListener('click', onClickButtonEditItem)
  elItem
    .querySelector('.item__action--delete')
    .addEventListener('click', onClickButtonDeleteItem)
}

// Форма редактирования категории: submit (Сохранить) + click (Отмена)
function addFormEditCategoryListeners(elForm) {
  // console.log('-> addFormEditCategoryListeners', Date.now())
  elForm.addEventListener('submit', onSubmitFormEditCategory)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditCategory)
}

// Форма редактирования товара: submit (Сохранить) + click (Отмена)
function addFormEditItemListeners(elForm) {
  elForm.addEventListener('submit', onSubmitFormEditItem)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditItem)
}

export {
  onDOMContentLoaded,
  addFormAddCategoryListener,
  addCategoryListeners,
  addFormEditCategoryListeners,
  addFormEditItemListeners,
}
