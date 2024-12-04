TASK 1
Створіть новий командний репозиторій на github.com, оберіть .gitignore (node).

Додайте до нього у колаборатори усіх студентів вашої групи.

Додайте захист на гілку main "Require a pull request before merging" і увімкніть опцію "Automatically delete head branches".

Склонуйте його собі на локальний комп'ютер.

Створіть свою гілку із гілки main та продовжуйте в ній виконувати це завдання.

Виконайте стартові налаштування вашого проєкту:

Створіть package.json файл за допомогою команди npm init -y. Додайте до нього властивість "type": "module".

Встановіть npm пакет eslint командою npm init @eslint/config@latest та в файлі налаштувань eslint.config.js вкажіть наступний вміст:

import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: { globals: globals.node },
    rules: {
      semi: "error",
      "no-unused-vars": "off",
      "no-undef": "error",
    },
  },
];
В корні проєкту створіть файл .prettierrc з наступним вмістом:

{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 80
}
Переконайтесь, що в файлі .gitignore в виключеннях є папка /node_modules.

Встановіть пакет @faker-js/faker для генерації мокових даних за допомогою команди npm i -D @faker-js/faker.

