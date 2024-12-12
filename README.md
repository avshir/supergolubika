# Project: [supergolubika.by](http://supergolubika.by)
- Описание проекта cм. в Google Doc

## Use technologies
- React + Vite + TypeScript
- Tailwind CSS

- react-router-dom - v6 for routes
- vite-plugin-svgr - for using SVG as react components in Vite
- plugins
- @headlessui/react - tailwind CSS plugin, for burger-menu
- tailwind-merge - Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.
- motion - plugin Framer motion for animations
- [mambaui](https://mambaui.com/) - for tailwind CSS

- react-hook-form - for ContactForm
- web3forms.com (for email info@supergolubika.by) - to send message for Contact Form - free 250 emails/month

## Description
- разработан дизайн, логотип и техническая часть,
- сайт-визитка, для desctop и mobile устройств, многостраничный, есть страница - главная, контакты, блог/статьи и отдельная страница для каждого поста, 404/ErrorPage
- анимация блоков

- Форма обратной связи с валидацией - использует web3forms.com для отправки сообщений на почту клиента (тариф бесплатный - 250 сообщений в месяц)
- гугл карта
- Статьи блога хранятся в .ts файле и выводятся динамически
- сайт размещен на hoster.by, 
- подключен SSL сертификат для https https://supergolubika.by/ (hoster.by, входит в мин. тариф)
- настроена email: info@supergolubika.by

## TODO
- футер - обновить дизайн меню навигации
- спрятать assecc email ключ в .env (https://v3.vitejs.ru/guide/env-and-mode.html)
- удалить TEMP файлы

### Проверить

### Обновить
- ссылку на инстраграмм
- ccылку avshir - на мои контакты

### Улучшение:
- добавить контакты на гугл.карты в д.Рогово
- SEO - ключевые слова онбновить (Рогово, Радашковичи)
- SEO - добавить Яндекс Метрику, Гугл Аналитику
- дописать статьи блога (2 без наполнения)

- ErrorPage добавить декор голубики
- добавить ErrorBlock for main block
- underline - green в некот местах
- decor на бел.фоне и однотонном, добавить листья на белый фон
- ? кнопка вверх

- зафикировит меню в шапке
- добавить анимацию бургер-меню, текста на первом экране - framer moution

- добавить FAQ блок
- блок видео
- блок слайдер


==================================
## Helpful links
### Deploy Vite - React - cPanel from hoster.by
- [Deploy Vite-React-cPanel](https://www.linkedin.com/pulse/simple-guide-deploying-your-vite-react-app-cpanel-shishir-c4esc/)
- [Как развернуть/разместить ваше приложение React на общем хостинге в cPanel](https://hayhost.am/knowledgebase/263/-How-to-DeployorHost-your-React-App-on-Shared-Hosting-in-cPanel.html?language=russian)


### Design
- [palette supergolubika from coolors.co](https://coolors.co/2f3e56-c6d2e6-cae5c7-ead4c2-454545-f5f5f5)
- [palette supergolubika from color.romanuke.com](https://color.romanuke.com/tsvetovaya-palitra-3716/)
inspiration
- [boobook.world](https://www.boobook.world/) - as inspiration, example of animations
- [palette boobook.world](https://coolors.co/palette/2c1e49-c098fe-f4eff5-fcbb9a-473656)


### ContactForm
- [web3forms.com + react hook form for ContactForm](https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/react-js)
- [How to Make Working Contact Form in React JS - web3forms](https://www.youtube.com/watch?v=94_6JPDi13g)

## Email
- почтовый домен: supergolubika.by

Бесплатный почтовый ящик
info@supergolubika.by объемом 1.024 Гб

Для входа перейдите на:
http://mail.supergolubika.by

логин: info
пароль: xxxxxxx

- https://hoster.by/help/elektronnaya-pochta/osnovnye-nastroyki-pochty/
- [Программы для доступа к электронной почте](https://hoster.by/help/elektronnaya-pochta/programmy-dlya-dostupa-k-elektronnoy-pochte/) - см. Пример настройки почты hoster.by для мобильного приложения Gmail на Android