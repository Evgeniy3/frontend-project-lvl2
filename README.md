### Hexlet tests and linter status:
[![Actions Status](https://github.com/Evgeniy3/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Evgeniy3/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/04fbbe668406ce4f0f9b/maintainability)](https://codeclimate.com/github/Evgeniy3/frontend-project-lvl2/maintainability)
[![Node.js Package](https://github.com/Evgeniy3/frontend-project-lvl2/actions/workflows/github-actions-demo.yml/badge.svg)](https://github.com/Evgeniy3/frontend-project-lvl2/actions/workflows/github-actions-demo.yml)
[![Test Coverage](https://api.codeclimate.com/v1/badges/04fbbe668406ce4f0f9b/test_coverage)](https://codeclimate.com/github/Evgeniy3/frontend-project-lvl2/test_coverage)

Описание:
Следующий репозиторий содержит функцию gendiff. Он сравнивает два файла конфигурации и показывает разницу. Функция работает с форматами .yml, .yaml и .json .

Настраивать:
Разветвите это репо по ключу SSH:
git@github.com:vlad1slove1/frontend-project-lvl2.git
Установите зависимости:
make install
Свяжите пакет для выполнения функции gendiff:
make link
Показать справку:
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format
  -h, --help           output usage information
      
Запустите тесты:
Запускаем линтер:
make lint
Запустить тест:
make test
Получить тестовое покрытие:
make test-coverage
ascii:

[![asciicast](https://asciinema.org/a/496264.svg)](https://asciinema.org/a/496264)
[![asciicast](https://asciinema.org/a/497972.svg)](https://asciinema.org/a/497972)
[![asciicast](https://asciinema.org/a/498184.svg)](https://asciinema.org/a/498184)
[![asciicast](https://asciinema.org/a/498186.svg)](https://asciinema.org/a/498186)
