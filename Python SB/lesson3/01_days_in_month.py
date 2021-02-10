# -*- coding: utf-8 -*-

# (if/elif/else)

# По номеру месяца вывести кол-во дней в нем (без указания названия месяца, в феврале 28 дней)
# Результат проверки вывести на консоль
# Если номер месяца некорректен - сообщить об этом

# Номер месяца получать от пользователя следующим образом
user_input = input("Введите, пожалуйста, номер месяца: ")
month = int(user_input)
print('Вы ввели', month)

month31 = [1, 3, 5, 7, 8, 10, 12]
month30 = [4, 6, 9, 11]
feb = 2

if month in month31:
    print('31')
elif month in month30:
    print('30')
elif month == feb:
    print('28')
else:
    print('Number is uncorrect')
