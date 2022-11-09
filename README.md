 <h1 font-weight="bold", font-size="30px">Проект "Игры Разума"</h1>
  <hr>

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Yaganka/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/Yaganka/frontend-project-44/actions)

<a href="https://codeclimate.com/github/Yaganka/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/a694464544da5a279b8a/maintainability" /></a>

<h2 font-size="24px">Описание проекта:</h2>
«Игры разума» — это набор из пяти консольных игр. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.

Минимальные требования:
ОС - *nix подобные системы или настроенный Windows
Используемая версия Node при написании проекта v18.7.0.
Инструкция по установке и запуску.
Клонируем репозиторий с проектом, с помощью команды: git clone <ssh/url>.
Переходим в директорию с проектом, с помощью комадны: cd <нужная директория>.
Устанавливаем зависимости проекта, с помощью команды: make install.
Устанавливаем пакет с играми локально, с помощью команды: npm link.
Запускаем нужную игру. У каждой игры есть своя команда для запуска.

<h3 font-size="26px", font-weight="bold">Игра: "Проверка на четность"</h3>
Описание игры:
Пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное.

Запуск игры: <div font-weight="bold">brain-even</div>
<a href="https://asciinema.org/a/AnQcsd1edj9DHXvmLvilm2mVG"><img src="https://asciinema.org/a/AnQcsd1edj9DHXvmLvilm2mVG.png" width="836"/></a>



<h3 font-size="26px", font-weight="bold">Игра: "Калькулятор"</h3>
Описание игры:
Пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

Запуск: <span font-weight="bold">brain-calc</span>
<a href="https://asciinema.org/a/NGk38Mg6n58WUfyrSCtMDENnh"><img src="https://asciinema.org/a/NGk38Mg6n58WUfyrSCtMDENnh.png" width="836"/></a>



<h3 font-size="26px", font-weight="bold">Игра: "НОД"</h3>
Описание игры:
Пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

Запуск: <p font-weight="bold">brain-gcd</p>
<a href="https://asciinema.org/a/91aIcejIE0sHziaJWvIhrvc1w"><img src="https://asciinema.org/a/91aIcejIE0sHziaJWvIhrvc1w.png" width="836"/></a>



<h3 font-size="26px", font-weight="bold">Игра: "Арифметическая прогрессия"</h3>
Описание игры:
Пользователю показывается ряд чисел, образующий арифметическую прогрессию, случайное число из этого ряда заменятся двумя точками.
Игрок должен определить это число.

Запуск: <p font-weight="bold">brain-progression</p>
<a href="https://asciinema.org/a/fTPvjO9j8fhqVUde4McZ1wPjL"><img src="https://asciinema.org/a/fTPvjO9j8fhqVUde4McZ1wPjL.png" width="836"/></a>



<h3 font-size="26px", font-weight="bold">Игра: "Простое ли число?"</h3>
Описание игры:
Пользователю показывается случайное число. И ему нужно ответить yes, если число является простым, или no — если число не является простым.
Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя.
Например, 7 — простое число, потому что делится без остатка только на 1 и на себя.

Запуск: <p font-weight="bold">brain-prime</p>
<a href="https://asciinema.org/a/bvB59Tuauvm2ajVyDZvKo86zR"><img src="https://asciinema.org/a/bvB59Tuauvm2ajVyDZvKo86zR.png" width="836"/></a>
