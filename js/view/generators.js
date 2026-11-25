import {
  onClickButtonEditCategory,
  onClickButtonDeleteCategory,
  onSubmitFormEditCategory,
  onClickButtonCancelEditCategory,
  onSubmitFormAddItem,
  onClickButtonEditItem,
  onClickButtonDeleteItem,
  onSubmitFormEditItem,
  onClickButtonCancelEditItem,
} from './listeners.js'

// Категория: click (Изменить, Удалить) + товары + форма добавления товара
function generateCategory(category) {
  const elSection = document.createElement('section')
  elSection.classList.add('category')
  elSection.dataset.categoryId = category.id
  elSection.innerHTML = `
    <div class="category__header">
      <h2 class="category__title">${category.title}</h2>
      <div class="category__actions">
        <button type="button" class="category__action category__action--edit">Изменить</button>
        <button type="button" class="category__action category__action--delete category__action--danger">Удалить</button>
      </div>
    </div>
    <ul class="category__items"></ul>
  `
  elSection
    .querySelector('.category__action--edit')
    .addEventListener('click', onClickButtonEditCategory)
  elSection
    .querySelector('.category__action--delete')
    .addEventListener('click', onClickButtonDeleteCategory)

  elSection
    .querySelector('.category__items')
    .append(...category.items.map(generateItem))
  elSection.append(generateFormAddItem())

  return elSection
}

// Товар: click по кнопкам «Изменить» (редактировать) и «X» (удалить)
function generateItem(item) {
  const elItem = document.createElement('li')
  elItem.classList.add('item')
  elItem.dataset.itemId = item.id
  elItem.innerHTML = `
    <span class="item__title">${item.title}</span>
    <div class="item__actions">
      <button type="button" class="item__action item__action--edit">Изменить</button>
      <button type="button" class="item__action item__action--delete item__action--danger">X</button>
    </div>
  `
  elItem
    .querySelector('.item__action--edit')
    .addEventListener('click', onClickButtonEditItem)
  elItem
    .querySelector('.item__action--delete')
    .addEventListener('click', onClickButtonDeleteItem)

  return elItem
}

// Форма добавления товара: submit (Добавить)
function generateFormAddItem() {
  const elForm = document.createElement('form')
  elForm.classList.add('add-form', 'add-form--item')
  elForm.innerHTML = `
    <input type="text" name="title" class="add-form__input" placeholder="Название товара" required />
    <button type="submit" class="add-form__button add-form__button--secondary">Добавить</button>
    <p class="form-error"></p>
  `
  elForm.addEventListener('submit', onSubmitFormAddItem)

  return elForm
}

// Форма редактирования категории: submit (Сохранить) + click (Отмена)
function generateFormEditCategory() {
  const elForm = document.createElement('form')
  elForm.classList.add('add-form', 'add-form--edit-category')
  elForm.innerHTML = `
    <input type="text" name="title" class="add-form__input" placeholder="Название категории" />
    <button type="submit" class="add-form__button add-form__button--primary">Сохранить</button>
    <button type="button" class="add-form__button add-form__button--secondary add-form__button--cancel">Отмена</button>
    <p class="form-error"></p>
  `
  elForm.addEventListener('submit', onSubmitFormEditCategory)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditCategory)

  return elForm
}

// Форма редактирования товара: submit (Сохранить) + click (Отмена)
function generateFormEditItem() {
  const elForm = document.createElement('form')
  elForm.classList.add('add-form', 'add-form--edit-item')
  elForm.innerHTML = `
    <input type="text" name="title" class="add-form__input" placeholder="Название товара" />
    <button type="submit" class="add-form__button add-form__button--primary">Сохранить</button>
    <button type="button" class="add-form__button add-form__button--secondary add-form__button--cancel">Отмена</button>
    <p class="form-error"></p>
  `
  elForm.addEventListener('submit', onSubmitFormEditItem)
  elForm
    .querySelector('.add-form__button--cancel')
    .addEventListener('click', onClickButtonCancelEditItem)

  return elForm
}

export { generateCategory, generateFormEditCategory, generateFormEditItem }
