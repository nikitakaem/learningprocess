#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Есть словарь кодов товаров

goods = {
    'Лампа': '12345',
    'Стол': '23456',
    'Диван': '34567',
    'Стул': '45678',
}

# Есть словарь списков количества товаров на складе.

store = {
    '12345': [
        {'quantity': 27, 'price': 42},
    ],
    '23456': [
        {'quantity': 22, 'price': 510},
        {'quantity': 32, 'price': 520},
    ],
    '34567': [
        {'quantity': 2, 'price': 1200},
        {'quantity': 1, 'price': 1150},
    ],
    '45678': [
        {'quantity': 50, 'price': 100},
        {'quantity': 12, 'price': 95},
        {'quantity': 43, 'price': 97},
    ],
}

# Рассчитать на какую сумму лежит каждого товара на складе
# например для ламп

lamps_cost = store[goods['Лампа']][0]['quantity'] * store[goods['Лампа']][0]['price']
# или проще (/сложнее ?)
lamp_code = goods['Лампа']
lamps_item = store[lamp_code][0]
lamps_quantity = lamps_item['quantity']
lamps_price = lamps_item['price']
lamps_cost = lamps_quantity * lamps_price
print('Лампа -', lamps_quantity, 'шт, стоимость', lamps_cost, 'руб')

# Вывести стоимость каждого товара на складе: один раз распечать сколько всего столов, стульев и т.д. на складе
# Формат строки <товар> - <кол-во> шт, стоимость <общая стоимость> руб

# WARNING для знающих циклы: БЕЗ циклов. Да, с переменными; да, неэффективно; да, копипаста.
# Это задание на ручное вычисление - что бы потом понять как работают циклы и насколько с ними проще жить.

table_code = goods['Стол']
tq1 = store[table_code][0]['quantity']
tq2 = store[table_code][1]['quantity']
tp1 = store[table_code][0]['price']
tp2 = store[table_code][1]['price']
tcost = tq1 * tp1 + tq2 * tp2

print('Стол -', (tq1 + tq2), 'шт, стоимость', tcost, 'руб')

sofa_code = goods['Диван']
sq1 = store[sofa_code][0]['quantity']
sq2 = store[sofa_code][1]['quantity']
sp1 = store[sofa_code][0]['price']
sp2 = store[sofa_code][1]['price']
scost = sq1 * sp1 + sq2 * sp2

print('Диван -', (sq1 + sq2), 'шт, стоимость', scost, 'руб')

chair_code = goods['Стул']
cq1 = store[chair_code][0]['quantity']
cq2 = store[chair_code][1]['quantity']
cq3 = store[chair_code][2]['quantity']
cp1 = store[chair_code][0]['price']
cp2 = store[chair_code][1]['price']
cp3 = store[chair_code][2]['price']
ccost = cq1 * cp1 + cq2 * cp2

print('Стул -', (cq1 + cq2 + cq3), 'шт, стоимость', ccost, 'руб')

##########################################################################################
# ВНИМАНИЕ! После того как __ВСЯ__ домашняя работа сделана и запушена на сервер,         #
# нужно зайти в ЛМС (LMS - Learning Management System ) по адресу http://go.skillbox.ru  #
# и оформить попытку сдачи ДЗ! Без этого ДЗ не будет проверяться!                        #
# Как оформить попытку сдачи смотрите видео - https://youtu.be/qVpN0L-C3LU               #
##########################################################################################
