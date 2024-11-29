//Работа с элементами на странице

const squire = document.querySelector('.squire'),
      buttons = document.querySelectorAll('.btn'),
      list = document.querySelectorAll('.list'),  //Получение эллементов
      tests = document.querySelector('.tests');



squire.style.border = '2px solid red';
buttons.forEach(item => {
    item.style.width = '200px'
}); //Задать стили

// for(let i = 0; i < list.length; i++) {
//     list[i].style.color = 'green'
// };

const divEnd = document.createElement('div');
      divEnd.classList.add('black'); 
      divEnd.style.color = '#fff' 
tests.append(divEnd); //Добавить в конец     

const divOrigin = document.createElement('div');
      divOrigin.classList.add('pink');
tests.prepend(divOrigin)      //Добавить в начало

list[2].remove(); // Удалить в скобочках номер по порядку начинаю с 0
buttons[1].replaceWith(list[0]) //Заменить

divEnd.innerHTML = '<h1>Привет</h1>'; //Добавить HTML структуру
divOrigin.innerText = 'Привет'; //Добавить текст

divEnd.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>') // Динамически добавить текс