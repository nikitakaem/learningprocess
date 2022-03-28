'use strict';

const btn = document.querySelector('button');

btn.onclick = function() {
    alert('Click');
};
//повторять нельзя функцию на ту же кнопку нельзя, 
//т.к. первое свойство не срабатывает
//поэтому лучше использовать эту:

btn.addEventListener('click', (e) => {
    e.target.remove();
});