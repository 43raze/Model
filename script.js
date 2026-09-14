'use strict'

// const categories = [
//   {
//     id: 1,
//     title: 'Смартфоны',
//     items: [
//       { id: 11, title: 'iPhone 15' },
//       { id: 12, title: 'Samsung Galaxy S15' },
//       { id: 13, title: 'Huawei H15' },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Ноутбуки',
//     items: [
//       { id: 21, title: 'Lenovo idonknow' },
//       { id: 22, title: 'Macbook Air' },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Пылесосы',
//     items: [
//       { id: 31, title: 'Dream' },
//       { id: 32, title: 'Ecovox T50' },
//     ],
//   },
//   {
//     id: 4,
//     title: 'Цветы',
//     items: [
//       { id: 41, title: 'Белые розы' },
//       { id: 42, title: 'Желтые тюльпаны' },
//     ],
//   },
// ]

const randomId = () => Math.trunc(Math.random() * 0xffffffff).toString(16)

const categoriesModel = {
  id: randomId(),
  title: '',
  items: [],

  getCategoryById(id) {
    return this.items.find(category => category.id === id)
  },

  addCategories(category) {
    category.id = randomId()
    category.items = category.items || []

    this.items.push(category)
  },

  removeCategoryById(id) {
    this.items = this.items.filter(category => category.id !== id)
  },

  // getProductById(categoryId, productId) {
  //   const category = this.getItemById(categoryId)
  // },

  addProduct(categoryId, item) {
    const category = this.getCategoryById(categoryId)
    if (!category) return

    item.id = randomId()
    category.items.push(item)
  },

  removeProductById(categoryId, itemId) {
    const category = this.getCategoryById(categoryId)
    if (!category) return

    category.items = category.items.filter(item => item.id !== itemId)
  },
}

console.log('--- addCategories ---')
categoriesModel.addCategories({ title: 'Смартфоны' })
categoriesModel.addCategories({ title: 'Ноутбуки' })
categoriesModel.addCategories({ title: 'Цветы' })
console.log(categoriesModel.items)

const thirdId = categoriesModel.items[2].id

console.log('--- getCategoryById ---')
console.log(categoriesModel.getCategoryById(thirdId))

console.log('--- addItem ---')
categoriesModel.addProduct(thirdId, { title: 'Белые розы' })
categoriesModel.addProduct(thirdId, { title: 'Желтые тюльпаны' })
console.log(categoriesModel.getCategoryById(thirdId))

console.log('--- removeItemById ---')
const firstItemId = categoriesModel.getCategoryById(thirdId).items[0].id
categoriesModel.removeProductById(thirdId, firstItemId)
console.log(categoriesModel.getCategoryById(thirdId))

console.log('--- removeCategoryById ---')
categoriesModel.removeCategoryById(categoriesModel.items[1].id)
console.log(categoriesModel.items)
