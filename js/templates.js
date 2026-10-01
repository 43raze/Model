function textToHtml(text) {
  const elDiv = document.createElement('div')
  elDiv.textContent = text
  return elDiv.innerHTML
}

export function generateCategory(category) {
  return `
    <section class="category" data-category-id="${category.id}">
      <div class="category__header">
        <h2 class="category__title">${textToHtml(category.title)}</h2>
        <div class="category__actions">
          <button type="button" class="category__action" data-action="edit-category">Изменить</button>
          <button type="button" class="category__action category__action--danger" data-action="delete-category">Удалить</button>
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
      <span class="item__title">${textToHtml(item.title)}</span>
      <div class="item__actions">
        <button type="button" class="item__action" data-action="edit-item">Изменить</button>
        <button type="button" class="item__action item__action--danger" data-action="delete-item">X</button>
      </div>
    </li>
  `
}

function generateFormAddItem() {
  return `
    <form class="add-form add-form--item">
      <input type="text" name="title" class="add-form__input" placeholder="Название товара" required />
      <button type="submit" class="add-form__button add-form__button--secondary">Добавить</button>
    </form>
  `
}

export function generateEmptyState(text) {
  return `<div class="empty-state">${textToHtml(text)}</div>`
}
