# Портал ЭКБ

Маркетплейс для инженеров.

## Запуск

Проект необходимо скачать. Запуск приложения осуществляется командой: `npm start`.

Запускает приложение в режиме разработки. Откройте http://localhost:3000, чтобы просмотреть его в браузере.

Что было сделано:

1. В хедере:
   - убраны фигурные скобки от классов
   - ренейминг по БЭМ
   - убран эффект увеличения у логотипа сайта
   - устранено дублирование кода
2. В RightMenu:
   - удалила лишние стили
   - починила выезжание дравера
   - ренейминг и очистка от мусора
3. В поиске:
   - константы теперь на место перенесены в функцию
   - нейминг по БЭМ
   - вынесла Content из Main в Search
   - удалила лишние обертки
   - расположила стили в порядке написания...
   - убрала дублирование компонента поиска, ввела в использование хук useResize
   - теперь на 320пх кнопки поиска не складываются в столбик (решение временное), если придумаете как расположить красиво - переделаем
4. ВЕЗДЕ: поменяла семантику секций
5. PopProducts:
   - нейминг БЭМ поменяла, но не везде. НАДО ДОДЕЛАТЬ
6. CategoriesEKB:
   - нейминг исправлен
   - карточки теперь по центру позиционируются
7. Main:
   - убрала лишние обертки от компонентов
   - Header теперь вынесен в отдельный компонент
