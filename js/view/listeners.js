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

// Форма добавления категории: submit (Добавить категорию)
function renderFormAddCategoryListener() {
  getElFormAddCategory().addEventListener('submit', onSubmitFormAddCategory)
}

// Категория: click (Изменить, Удалить) + submit формы товара (Добавить)
// + листенеры всех её товаров
function renderCategoryListener(elCategory) {
  // console.log('renderCategoryListener ??', Date.now())
  elCategory
    .querySelector('.category__action--edit')
    .addEventListener('click', onClickButtonEditCategory)
  elCategory
    .querySelector('.category__action--delete')
    .addEventListener('click', onClickButtonDeleteCategory)
  elCategory
    .querySelector('.add-form--item')
    .addEventListener('submit', onSubmitFormAddItem)
  elCategory.querySelectorAll('.item').forEach(renderCategoryItemListener)
}

// Товар: click по кнопкам «Изменить» (редактировать) и «X» (удалить)
function renderCategoryItemListener(elItem) {
  // console.log('renderCategoryItemListener ??')
  elItem
    .querySelector('.item__action--edit')
    .addEventListener('click', onClickButtonEditItem)
  elItem
    .querySelector('.item__action--delete')
    .addEventListener('click', onClickButtonDeleteItem)
}

// Форма редактирования категории: submit (Сохранить) + click (Отмена)
function renderFormEditCategoryListener(elForm) {
  // console.log('-> renderFormEditCategoryListener', Date.now())
  elForm.addEventListener('submit', onSubmitFormEditCategory)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditCategory)
}

// Форма редактирования товара: submit (Сохранить) + click (Отмена)
function renderFormEditItemListener(elForm) {
  elForm.addEventListener('submit', onSubmitFormEditItem)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditItem)
}

export {
  onDOMContentLoaded,
  renderFormAddCategoryListener,
  renderCategoryListener,
  renderFormEditCategoryListener,
  renderFormEditItemListener,
}
