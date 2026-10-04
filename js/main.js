import { onSubmitFormAddCategory, updateCategories } from './events.js'

const formAddCategory = document.querySelector('.add-form--category')

formAddCategory.addEventListener('submit', onSubmitFormAddCategory)

updateCategories()
