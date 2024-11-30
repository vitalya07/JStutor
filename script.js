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

divEnd.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>') // Динамически добавить текст

//Рекурсия

// const pow = (a,b)=> {
//       let result = 1;
//       for(let i = 0; i < b; i++) {
//             result *= a
//       }
//       return result;
// };
// console.log(pow(2,1)); //2
// console.log(pow(2,2)); //4
// console.log(pow(2,3)); //2*2*2=8
// console.log(pow(2,4)); // 2*2*2*2 = 16

// function pow(x, n) {
//       if (n === 1) {
//             return x
//       } else {
//             return x * pow(x, n-1);
//       }
// }

// console.log(pow(2,1)); //2
// console.log(pow(2,2)); //4
// console.log(pow(2,3)); //2*2*2=8
// console.log(pow(2,4)); // 2*2*2*2 = 16  

let students = {
      Js: [{
            name: 'John',
            progress: 100   
      }, {
            name: 'Ivan',
            progress: 60
      }],
      HTML: {
            basic: [{
                  name:'Peter',
                  progress: 20
            }, {
                  name: 'Ann',
                  progress: 18
            }],
            pro: [{
                  name: 'Sam',
                  progress: 10
            }],

            semi: {
                  students: [{
                        name: 'Test',
                        progress: 100
                  }]
            }
      }
};

function getTotalProgressByIteration(data) {
      let total = 0; 
      let students = 0;

      for(let course of Object.values(data)) {
            if(Array.isArray(course)) {
                  students += course.length;

                  for(let i = 0; i < course.length; i++) {
                        total += course[i].progress;
                  }
            } else {
                  for(let subCourse of Object.values(course)) {
                        students += subCourse.length;

                        for(let i = 0; i < subCourse.length; i++) {
                              total += subCourse[i].progress
                        }
                  }
            }
      } 

      return total / students;
}

console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
      if(Array.isArray(data)) {
            let total = 0;
            for(let i = 0; i < data.length; i++) {
                  total += data[i].progress;
            }
            return [total, data.length] 
      } else {
            let total = [0, 0];
            for (let subData of Object.values(data)) {
                  const subDataArr = getTotalProgressByRecursion(subData);
                  total[0] += subDataArr[0];
                  total[1] += subDataArr[1];
            }

            return total
      }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0]/result[1]) //Пример рекурсия

// События на мобильных устройствах
//touchstart когда палец прикаснулся к экрану
//touchemove Палец двигается по экрану
//touchend Палец оторвался от экрана
// touchenter палец защел на элемент во время скольжения
//touchleave Во время скольжения палец оторвался с элемента
//touchcancel Когда точка соприкосновения не регистрируется на поверхности
//touches Все пальцы которые взаимодействуют с экраном


window.addEventListener('DOMContentLoaded', ()=> {
      const touch = document.querySelector('.touch');
      touch.addEventListener('touchstart', (e)=> {
            e.preventDefault();
            console.log('start')
      })
});