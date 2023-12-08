#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Есть словарь координат городов
from pprint import pprint

sites = {
    'Moscow': (550, 370),
    'London': (510, 510),
    'Paris': (480, 480),
}

# Составим словарь словарей расстояний между ними
# расстояние на координатной сетке - корень из (x1 - x2) ** 2 + (y1 - y2) ** 2

moscow = sites['Moscow']
london = sites['London']
paris = sites['Paris']

moscow_london = round(((moscow[0] - london[0]) ** 2 + (moscow[1] - london[1]) ** 2) ** .5)
moscow_paris = round(((moscow[0] - paris[0]) ** 2 + (moscow[1] - paris[1]) ** 2) ** .5)
paris_london = round(((paris[0] - london[0]) ** 2 + (paris[1] - london[1]) ** 2) ** .5)
london_moscow = moscow_london
paris_moscow = moscow_paris
london_paris = paris_london

distances = {
    'Moscow': {'Paris': moscow_paris,
               'London': moscow_london},
    'London': {'Moscow': london_moscow,
               'Paris': london_paris},
    'Paris': {'Moscow': paris_moscow,
              'London': paris_london}
}

pprint(distances)
