# Model

не писать код, который не используется

не подстраивать код под тесты. это тесты нужно подстраивать под код

глаголизируй свои мысли. из глагола легко создать название функции

false это противоположность true

null это противоположность объекту

## Структура

```
model/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── model.js — categories и функции для работы с ними
│   ├── controller.js — handle*: меняет модель, вызывает render*
│   └── view/
│       ├── generators.js — generate*: данные → HTML-строка
│       ├── renders.js — render*: данные → DOM
│       └── listeners.js — on*: DOM → значения → handle*, initListeners
├── test/
│   ├── test.html — открыть в браузере, результаты в консоли
│   └── model.test.js
├── README.md
└── .gitignore
```
