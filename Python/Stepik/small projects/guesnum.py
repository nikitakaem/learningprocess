from random import *


def is_valid(n):
    return n.isdigit() and 1 <= int(n) <= 100


def guessnum():
    a = randint(1, 100)
    print("Добро пожаловать в числовую угадайку")
    count = 0
    while True:
        while True:
            b = input("Введите число от 1 до 100:")
            if is_valid(b):
                b = int(b)
                count += 1
                break
            else:
                print("А может быть все-таки введем целое число от 1 до 100?")
        if a > b:
            print("Слишком мало, попробуйте еще раз")
        elif a < b:
            print("Слишком много, попробуйте еще раз")
        else:
            print(f"Вы угадали, поздравляем! Число попыток {count}")
            print("Сыграем еще? Y/N")
            break
    z = input()
    if z == "Y" or z == "y":
        guessnum()
    else:
        print("Спасибо, что играли в числовую угадайку. Еще увидимся...")


guessnum()
