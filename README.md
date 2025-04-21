Область хрвнения данных:
- база данных на json-server
- BFF
- редакс стор

Сущность приложения:
- пользователь: БД (список пользователей)б BFF (сессия текущего), стор (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), стор (использование на клиенте)
 - статьи: БД (список статей), стор (отображение в браузере)
 - комментарий: БД (список комментариев), стор (отображение в браузере)


 Таблица БД: 

 - пользователи - users: id / login / password / registed_at / role_id
 - роли - roles: id / name
 - статьи: posts: id / title / image_url / content / published_at
 - комментарии - comments: id / author_id / post_id / content

 Схема состояния на BFF:

 - сессия текущего пользователя: login / password / role

 Схема для редакс стора (на клиенте):

 - user: id / login / roleId
 - posts: массив post: id / title/ imageUrl / publishedAt/ commentsCount
 - post: id / title / imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
 - users: массив user: id / login / registeredAt / role

 Макеты: https://www.figma.com/design/qofKeWFjLkAQOZtRsa6M1O/Практика-React.-Блог?node-id=0-1&p=f 
