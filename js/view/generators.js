function generateCategory(category) {
  return `
    <section class="category" data-category-id="${category.id}">
      <div class="category__header">
        <h2 class="category__title">${category.title}</h2>
        <div class="category__actions">
          <button type="button" class="category__action category__action--edit">Изменить</button>
          <button type="button" class="category__action category__action--delete category__action--danger">Удалить</button>
        </div>
      </div>
      <ul class="category__items">
        ${category.items.map(generateItem).join('')}
      </ul>
      ${generateFormAddItem()}
    </section>
  `
}

function generateItem(item) {
  return `
    <li class="item" data-item-id="${item.id}">
      <span class="item__title">${item.title}</span>
      <div class="item__actions">
        <button type="button" class="item__action item__action--edit">Изменить</button>
        <button type="button" class="item__action item__action--delete item__action--danger">X</button>
      </div>
    </li>
  `
}

function generateFormAddItem() {
  return `
    <form class="add-form add-form--item">
      <input type="text" name="title" class="add-form__input" placeholder="Название товара" required />
      <button type="submit" class="add-form__button add-form__button--secondary">Добавить</button>
      <p class="form-error"></p>
    </form>
  `
}

function generateFormEditCategory() {
  return `
    <form class="add-form add-form--edit-category">
      <input type="text" name="title" class="add-form__input" placeholder="Название категории" />
      <button type="submit" class="add-form__button add-form__button--primary">Сохранить</button>
      <button type="button" class="add-form__button add-form__button--secondary add-form__button--cancel">Отмена</button>
      <p class="form-error"></p>
    </form>
  `
}

