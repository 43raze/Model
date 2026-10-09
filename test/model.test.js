
//--- Tests ---//

console.log('--- addCategory ---')
addCategory('Наушники')
console.log(categories)

console.log('--- getCategoryById ---')
console.log(getCategoryById(2))

console.log('--- editCategoryById ---')
editCategoryById(1, 'Телефоны')
console.log(getCategoryById(1))

console.log('--- removeCategoryById ---')
removeCategoryById(2)
console.log(categories)

console.log('--- addItemToCategory ---')
addItemToCategory(1, 'iPhone 17')
console.log(getCategoryById(1))

console.log('--- getItemByIdFromCategoryId ---')
console.log(getItemByIdFromCategoryId(1, 12))

console.log('--- editItemById ---')
editItemById(1, 11, 'iPhone 16')
console.log(getItemByIdFromCategoryId(1, 11))

console.log('--- removeItemByIdFromCategoryId ---')
removeItemByIdFromCategoryId(1, 12)
console.log(getCategoryById(1))

//--- Validation tests ---//

addCategory('Наушники')

addCategory('Наушники')

addCategory('наушники')

addCategory('нАуШнИкИ')

addCategory('нАуШнИкИ')

addCategory('')

addCategory('        ')

addCategory('    Наушники    ')

addCategory('термоядерные синхрофазотроны')

addCategory('попа')

addCategory('<input type="text" />')

console.log('--- validateTitle ---')
console.log(isValidateTitle('  Наушники  '))
console.log(isValidateTitle('ab'))
console.log(isValidateTitle('a'.repeat(21)))
console.log(isValidateTitle('   '))
console.log(isValidateTitle(42))

console.log('--- addCategory: результат ---')
console.log(addCategory('Ноутбуки'))
console.log(addCategory('ab'))

console.log('--- editCategoryById: результат ---')
console.log(editCategoryById(1, 'Мобильные'))
console.log(editCategoryById(1, 'ab'))
console.log(editCategoryById(999, 'Название'))

console.log('--- addItemToCategory: результат ---')
console.log(addItemToCategory(1, 'Pixel 9'))
console.log(addItemToCategory(1, 'ab'))
console.log(addItemToCategory(999, 'Товар'))

console.log('--- editItemById: результат ---')
console.log(editItemById(1, 11, 'iPhone 15 Pro'))
console.log(editItemById(1, 11, 'ab'))
console.log(editItemById(1, 999, 'Товар'))
console.log(editItemById(999, 11, 'Товар'))
