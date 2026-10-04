import { addCategory, editCategoryById, removeCategoryById } from './model.js'
import { renderCategories, renderFormError, clearFormError } from './render.js'
import { generateFormEditCategory } from './templates.js'

const ERROR_TITLE = 'Название должно быть от 3 до 20 символов'

function onSubmitFormAddCategory(e) {
  e.preventDefault()

  const elInput = e.target.elements.title
  const result = addCategory(elInput.value)

  if (result === null) return renderFormError(e.target, ERROR_TITLE)

  e.target.reset()
  clearFormError(e.target)
  updateCategories()
}

function onClickButtonEditCategory(e) {
  const elCategory = e.target.closest('.category')
  const elHeader = elCategory.querySelector('.category__header')
  const title = elCategory.querySelector('.category__title').textContent

  elHeader.outerHTML = generateFormEditCategory()

  const elForm = elCategory.querySelector('.add-form--edit-category')
  const elInput = elForm.elements.title
  const elButtonCancel = elForm.querySelector('.add-form__button--cancel')

  elForm.addEventListener('submit', onSubmitFormEditCategory)
  elButtonCancel.addEventListener('click', updateCategories)

  elInput.value = title
  elInput.focus()
}

function onSubmitFormEditCategory(e) {
  e.preventDefault()

  const elCategory = e.target.closest('.category')
  const categoryId = +elCategory.dataset.categoryId
  const elInput = e.target.elements.title

  const result = editCategoryById(categoryId, elInput.value)
  if (result === null) return renderFormError(e.target, ERROR_TITLE)

  updateCategories()
}

function onClickButtonDeleteCategory(e) {
  const elCategory = e.target.closest('.category')
  const categoryId = +elCategory.dataset.categoryId

  removeCategoryById(categoryId)
  updateCategories()
}

function addCategoriesListeners() {
  const listButtonsEditCategory = document.querySelectorAll(
    '.category__action--edit',
  )
  const listButtonsDeleteCategory = document.querySelectorAll(
    '.category__action--delete',
  )

  listButtonsEditCategory.forEach(button => {
    button.addEventListener('click', onClickButtonEditCategory)
  })

  listButtonsDeleteCategory.forEach(button => {
    button.addEventListener('click', onClickButtonDeleteCategory)
  })
}

function updateCategories() {
  renderCategories()
  addCategoriesListeners()
}

export { onSubmitFormAddCategory, updateCategories }
