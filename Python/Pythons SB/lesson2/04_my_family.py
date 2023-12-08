#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Создайте списки:

# моя семья (минимум 3 элемента, есть еще дедушки и бабушки, если что)
my_family = ['ma', 'pa', 'ba']

# список списков приблизителного роста членов вашей семьи
my_family_height = [
    ['ma', 160],
    ['pa', 170],
    ['ba', 155]
]

# Выведите на консоль рост отца в формате
#   Рост отца - ХХ см
print("Height of my " + my_family_height[1][0] + " is " + str(my_family_height[1][1]))
# Выведите на консоль общий рост вашей семьи как сумму ростов всех членов
sum_height = my_family_height[0][1] + my_family_height[1][1] + my_family_height[2][1]
print("Summary family height is " + str(sum_height))
