import {
  categories,
  addCategory,
  editCategoryById,
  removeCategoryById,
  addItemToCategory,
  editItemById,
  removeItemByIdFromCategoryId,
} from './model.js'
import { generateCategory, generateEmptyState } from './templates.js'

const categoriesContainer = document.querySelector('.categories')
// const formAddCategory = document.querySelector('.add-form--category')

renderCategories()

function renderCategories() {
  categoriesContainer.innerHTML = categories.length
    ? categories.map(generateCategory).join('')
    : generateEmptyState('Категорий пока нет')
}
