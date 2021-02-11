"use strict";

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++; 
}
while (num <= 60);

//for
// первый аргумент - переменная i
// второй аргумент - причина остановки цикла
// третий аргумент - шаг цикла
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}


for (let i = 1; i < 8; i++) {
    if (i == 6) {
        break;      // останавливает цикл
    }
    console.log(i);
}

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;       // пропускает один цикл
    }
    console.log(i);
}


