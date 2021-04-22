# erli_recruitment
Junior Fullstack Developer in Erli

To run the application use command:

node main.js


Task description

Mam konta w "X" różnych bankach, żeby zarabiać na oprocentowaniu z lokaty.
Na każdym koncie z początku mam kwotę 15 000 zł.
W każdym banku istnieje pewien cykl kapitalizacji odsetek co "L" sekund.
W każdym banku również istnieje cykl zmian oprocentowań lokat (odbywa się on po kapitalizacji odsetek)
Każdy bank pobiera "L2"% prowizji (od kwoty przelewu) za przelew do innego banku.
Napisz algorytm, który sprawnie będzie przelewał pieniądze między lokatami, by jak najwięcej zarobić.

Chciałbym także wiedzieć co minutę jaki jest stan środków we wszystkich bankach, oraz mój całościowy kapitał.
 
Oprocentowanie z lokat w każdym banku jest losowe (ale większe od 0 :)).
 
Dla oznaczenia danych:
X - wybierz sobie stałą liczbę, nie mniejszą niż 2, np. 4
L - losowa liczba całkowita (5 - 10) generowana per instancje Banku
L2 - druga losowa liczba całkowita (1 - 15) generowana per instancje Banku
