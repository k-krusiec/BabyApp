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
Aplikację można obejrzeć pod adresem: <http://dev.krusiec.com/kruchypf/babyApp>

## Instalacja
Do projektu zostały przygotowane pliki package.json i gulpfile.js.
Aby zainstalować stronę lokalnie należy
* zainstalować node_modules:
```
nmp install
```
* skompilować SASS:
```
gulp
```
Po tym uruchomi się przeglądarka z uruchomionym adresem localhot:3000 z projektem BabyApp

## Wersja
#### 1.0.0
* Logowanie (localStorage)
* Strona główna + formularze

#### Kolejne kroki:
* Podstrony z listami - dla statycznych danych
* Zbieranie danych z formularzy (indexedDB)
* Wyświetlanie dynamicznych danych na listach

## Technologie
* HTML5
* CSS3 (SASS+gulp)
* RWD
* JavaScript
* jQuery
* localStorage*
* indexedDB*

*) Projekt jest tworzony za pomocą LocalStorage i indexedDB ze względu na brak backendu.
