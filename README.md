# BabyApp
![alt text](https://github.com/k-krusiec/babyapp/blob/develop/img/babyapp-logo-180x80.png "BabyApp Logo")

## O projekcie
BabyApp to aplikacja dla rodziców, którzy chcą monitorować rozwój swojego nowo narodzonego dziecka.

## Funkcjonalności:
* Zapisywanie karmienia (czas trwania, pierś, wypite mleko)
* Zapisywanie zmiany pieluszki
* Zapisywanie wagi
* Zapisywanie kąpieli
* Zapisywanie wizyt lekarskich
* Prowadzenie dziennika rozwoju dziecka
* Przegląd zapisanych danych

## Demo
Aplikację można obejrzeć pod adresem: <http://dev.krusiec.com/kruchypf/babyapp>

Można utworzyć własne konto, lub skorzystać z konta demo:
* Login: TestUser
* Hasło: test

## Instalacja
Projekt powstał w oparciu o:
Scotchbox <https://box.scotch.io/>
System logowania i rejestracji Davida Carr’a: <https://daveismyname.blog/blog/login-and-registration-system-with-php>

Projekt można uruchomić na lokalnym serwerze obsługującym PHP i MySQL (np. [Vagrant](https://www.vagrantup.com)). Bazę danych można obsługiwać za pomocą klienta MySQL (np. [HeidiSQL](http://www.heidisql.com) dla Windows / [SequelPro](http://www.sequelpro.com) dla Mac OS). instrukcję konfiguracji można znaleźć na stronie [Scotchbox](https://box.scotch.io) i [Vagrant](https://www.vagrantup.com).

Do projektu zostały przygotowane pliki package.json i gulpfile.js.
Aby postawić stronę lokalnie należy
* ściągnąć node_modules:
```
nmp install
```
* skompilować SASS:
```
gulp
```
Po tym uruchomi się przeglądarka z uruchomionym adresem localhost:3000 z projektem BabyApp (browserSync nie działa przy serwerze na Vagrancie :( )

## Wersja
#### 1.0.1
* Moduł logowania / rejestracji PHP+MySQL (ze strony Davida Carr’a)
* Zapisywanie danych z formularzy do bazy danych poprzez PHP
* Wyświetlanie danych zapisanych w bazie danych poprzez PHP, JSON i AJAX

#### 1.0.0
* Logowanie (localStorage) (nie działa na Safari :()
* Strona główna + formularze
* Podstrony z listami - dla statycznych danych

#### Kolejne kroki:
* Przerobienie obrazków z png na svg lub webfonts
* Ogarnięcie wysokości viewportu (nie przewidziałem rozdzielczości mniejszych niż hd)
* Dorobienie modala z info o zapisaniu danych
* Dorobienie usuwania wizyty lekarskiej
* Back-end z prawdziwego zdarzenia (ograniczenie liczby plików, byćmoże RESTowe API)

## Technologie
* HTML5
* CSS3 (SASS+gulp)
* RWD
* JavaScript
* jQuery
* AJAX
* JSON
* PHP
* MySQL
