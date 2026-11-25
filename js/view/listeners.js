import {
  handleContentLoaded,
  handleAddCategory,
  handleAddItem,
  handleOpenEditCategory,
  handleSaveEditCategory,
  handleCancelEditCategory,
  handleDeleteCategory,
  handleOpenEditItem,
  handleSaveEditItem,
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
  handleOpenEditCategory(getCategoryIdFromEvent(e))
}

function onSubmitFormEditCategory(e) {
  // console.log('->>> onSubmitFormEditCategory', Date.now())
  e.preventDefault()
  handleSaveEditCategory(
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
  handleOpenEditItem(getCategoryIdFromEvent(e), getItemIdFromEvent(e))
}

function onSubmitFormEditItem(e) {
  e.preventDefault()
  handleSaveEditItem(
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

// Форма добавления категории есть в HTML сразу — вешаем листенер при загрузке.
// Остальные листенеры вешают генераторы при создании элементов.
function addFormAddCategoryListener() {
  getElFormAddCategory().addEventListener('submit', onSubmitFormAddCategory)
}

export {
  onDOMContentLoaded,
  addFormAddCategoryListener,
  onClickButtonEditCategory,
  onSubmitFormEditCategory,
  onClickButtonCancelEditCategory,
  onClickButtonDeleteCategory,
  onSubmitFormAddItem,
  onClickButtonEditItem,
  onSubmitFormEditItem,
  onClickButtonCancelEditItem,
  onClickButtonDeleteItem,
}
