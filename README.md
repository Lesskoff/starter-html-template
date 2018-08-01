# Starter HTML Template

This is template for front-end projects (HTML, CSS, JS) with Bootstrap 4 (grid & reboot), Font-Awesome 5, Gulp, Pug, Sass, Browsersync, Autoprefixer, Clean-CSS, Uglify and Rsync. The template contains a .htaccess file with caching rules for web server.

#### The starter-template is based on these sources:

[https://github.com/agragregra/OptimizedHTML-4](https://github.com/FARCER/work_template)

[https://github.com/FARCER/work_template](https://github.com/FARCER/work_template)

styles structure based on this article by FreeCodeCamp: [https://medium.freecodecamp.org/how-to-get-better-at-writing-css-a1732c32a72f](https://medium.freecodecamp.org/how-to-get-better-at-writing-css-a1732c32a72f)

repository of this article's template (in future I want to make starter-tamplate based on this template) : [https://github.com/thomlom/scss-boilerplate](https://github.com/thomlom/scss-boilerplate)

## How to use

1. [Download](https://github.com/haseri/starter-html-template/archive/master.zip) **this template** from GitHub;

2. Install Node Modules: **npm i**;

3. Run the template: **gulp**;

4. Build project: **gulp build**.

## Structure desctiption (it will be updates from time to time)

### The Styles structure (it just 7 folders):

1. **_base:_** in here, put all your boilerplate code. By boilerplate, I mean all CSS code you’re gonna write each time you’ll start a new project. For example: typography rules, animations, utilities (by utilities, I mean classes like **margin-right-large** , **text-center** , …) and so on.

2. **_components:_** The name is explicit here. This folder contains all the components used to build your pages like your buttons, forms, swipers, popups, and so on.

3. **_layout:_** used to layout the different parts of your page, that is to say, your header, footer, navigation, section, your own grid, and more.

4. **_pages:_**: You may sometimes have a page that has its own specific style, that stands out from what you do usually. Then put your style in the **pages** folder.

5. **_themes:_**: If you have different themes for your app (dark mode, admin, and so on) put them in this folder.

6. **_abstracts:_**: Put all your functions here, along with variables and mixins. In short, all your helpers.

7. **_vendors:_**: what would be an app or a project without external libraries? Put in the **vendors** folder all files that don’t depend on you. You may want to add your Font Awesome file, Bootstrap, and stuff like that in here.

#### Example of main.sass (scss) file:

```sass
@import abstracts/variables;
@import abstracts/functions;
@import base/reset;
@import base/typography;
@import base/utilities;
@import components/button;
@import components/form;
@import components/user-navigation;
@import layout/header;
@import layout/footer;
...
```

### The Pug-files structure is similar to the Styles structure

---

#### На русском языке:

# Стартовый HTML Шаблон

Это шаблон для фронт-энд проектов (HTML, CSS, JS) с Bootstrap 4 (grid & reboot), Font-Awesome 5, Gulp, Pug, Sass, Browsersync, Autoprefixer, Clean-CSS, Uglify and Rsync. Шаблон содержит .htaccess-файл с кешированием для веб-серверов.

#### Стартовый шаблон основан на следующих источниках:

[https://github.com/agragregra/OptimizedHTML-4](https://github.com/FARCER/work_template)

[https://github.com/FARCER/work_template](https://github.com/FARCER/work_template)

структура стилей основана на этой статье от FreeCodeCamp: [https://medium.freecodecamp.org/how-to-get-better-at-writing-css-a1732c32a72f](https://medium.freecodecamp.org/how-to-get-better-at-writing-css-a1732c32a72f)

репозиторий на шаблон из этой статьи (в будущем я хочу сделать свой starter-template основанным на этом шаблоне): [https://github.com/thomlom/scss-boilerplate](https://github.com/thomlom/scss-boilerplate)

## Как использовать:

1. [Скачать](https://github.com/haseri/starter-html-template/archive/master.zip) **этот шаблон** с GitHub;

2. Установить Node модули: **npm i**;

3. Запуск шаблона: **gulp**;

4. Сборка проекта: **gulp build**.

## Описание структуры (будет обновляться время от времени)

### Структура стилей (просто 7 папок):

1. **_base:_** in here, put all your boilerplate code. By boilerplate, I mean all CSS code you’re gonna write each time you’ll start a new project. For example: typography rules, animations, utilities (by utilities, I mean classes like **margin-right-large** , **text-center** , …) and so on.

2. **_components:_** The name is explicit here. This folder contains all the components used to build your pages like your buttons, forms, swipers, popups, and so on.

3. **_layout:_** used to layout the different parts of your page, that is to say, your header, footer, navigation, section, your own grid, and more.

4. **_pages:_**: You may sometimes have a page that has its own specific style, that stands out from what you do usually. Then put your style in the **pages** folder.

5. **_themes:_**: If you have different themes for your app (dark mode, admin, and so on) put them in this folder.

6. **_abstracts:_**: Put all your functions here, along with variables and mixins. In short, all your helpers.

7. **_vendors:_**: what would be an app or a project without external libraries? Put in the **vendors** folder all files that don’t depend on you. You may want to add your Font Awesome file, Bootstrap, and stuff like that in here.