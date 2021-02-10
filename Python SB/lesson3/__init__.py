# -*- coding: utf-8 -*-
def bin(a, k):
    low = 0
    high = len(a) - 1
    while low <= high:
        mid = (low + high) // 2
        if a[mid] == k:
            print(str(k) + ' is in list under index number in list ' + str(a[k]))
            break
        if a[mid] > k:
            high = mid - 1
        else:
            low = mid + 1
    if k != a[mid]:
        print('No way')


a = [1,2,3,4,5,6]

bin(a, 2)

def sin(a, k):
    i = 0
    while i < len(a) and a[i] != k:
        i += 1
        if a[i] == k:
            print(k, ' is in list under index number in list ', a[k])
        else:
            return None

sin(a, 2)