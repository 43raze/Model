const randomId = () => +Math.trunc(Math.random() * 0xffffffff)

console.log(randomId())

const categories = [
  // >>> category <<<
  {
    id: 1,
    title: 'Смартфоны',
    items: [
      // >>> item <<<
      { id: 11, title: 'iPhone 15' },
      { id: 12, title: 'Samsung Galaxy S15' },
      { id: 13, title: 'Huawei H15' },
    ],
  },
  {
    id: 2,
    title: 'Ноутбуки',
    items: [
      { id: 21, title: 'Lenovo idonknow' },
      { id: 22, title: 'Macbook Air' },
    ],
  },
  {
    id: 3,
    title: 'Пылесосы',
    items: [
      { id: 31, title: 'Dream' },
      { id: 32, title: 'Ecovox T50' },
    ],
  },
  {
    id: 4,
    title: 'Цветы',
    items: [
      { id: 41, title: 'Белые розы' },
      { id: 42, title: 'Желтые тюльпаны' },
    ],
  },
]

function getCategoryById() {
  // body
}

function removeCategoryById() {
  // body
}

function getItemByIdFromCategoryId(categoryId, itemId) {
  const category = getCategoryById(categoryId)
  return category.items.find(item => item.id === itemId)
}

function removeItemByIdFromCategoryId(categoryId, itemId) {
  // body
}

// const categoriesModel = {
//   id: randomId(),
//   title: '',
//   items: [],

//   getItemById(itemId) {
//     return this.items.find(item => item.id === itemId)
//   },

//   addCategories(category) {
//     category.id = randomId()
//     category.items = category.items || []

//     this.items.push(category)
//   },

//   removeCategoryById(id) {
//     this.items = this.items.filter(category => category.id !== id)
//   },

//   // getProductById(categoryId, productId) {
//   //   const category = this.getItemById(categoryId)
//   // },

//   addProduct(categoryId, item) {
//     const category = this.getItemById(categoryId)
//     if (!category) return

//     item.id = randomId()
//     category.items.push(item)
//   },

//   removeProductById(categoryId, itemId) {
//     const category = this.getItemById(categoryId)
//     if (!category) return

//     category.items = category.items.filter(item => item.id !== itemId)
//   },
// }

// console.log('--- addCategories ---')
// categoriesModel.addCategories({ title: 'Смартфоны' })
// categoriesModel.addCategories({ title: 'Ноутбуки' })
// categoriesModel.addCategories({ title: 'Цветы' })
// console.log(categoriesModel.items)

// const thirdId = categoriesModel.items[2].id

// console.log('--- getCategoryById ---')
// console.log(categoriesModel.getItemById(thirdId))

// console.log('--- addItem ---')
// categoriesModel.addProduct(thirdId, { title: 'Белые розы' })
// categoriesModel.addProduct(thirdId, { title: 'Желтые тюльпаны' })
// console.log(categoriesModel.getItemById(thirdId))

// console.log('--- removeItemById ---')
// const firstItemId = categoriesModel.getItemById(thirdId) //.items[0].id
// categoriesModel.removeProductById(thirdId, firstItemId)
// console.log(categoriesModel.getItemById(thirdId))

// console.log('--- removeCategoryById ---')
// categoriesModel.removeCategoryById(categoriesModel.items[1].id)
// console.log(categoriesModel.items)
