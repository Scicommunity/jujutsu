---
title: "{{ replace .Name "-" " " | title }}" # Основное название
shortTitle: "" # Короткое название/имя (для списков/полок, ссылок в статьях)
subTitle: "" # Длинный подзаголовок с обложки (если есть)

year: {{ now.Format "2006" }} # Год издания
rating: 0                     # Рейтинг книги от 0 до 10
creators:
  - given: ""
    family: ""
    role: "author"

publisher: ""
place: ""
ISBN: ""
pages: ""
language: "ru-RU"
# url: "" # Внешняя ссылка на книгу (магазин, издательство и т.п.)

series: ""
series_number: ""

abstractNote: "" # Краткий пересказ книги в пару предложений.
rights: ""       # Авторские права, при необходимости.

# Атрибуты Hugo
date: {{ .Date }} # Дата и время добавления на сайт
type: "books"
tags: []

# Атрибуты Zotero
zotero:
  key: ""             # Ключ Zotero
  collection: "jujutsu"      # Коллекция в библиотеке Zotero
  zotero_item_type: "book" # Тип карточки в Zotero

---

Основной текст описания, ссылки на видео, презентации и т.п.
