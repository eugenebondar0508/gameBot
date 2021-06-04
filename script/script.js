'use strict';

let isNumber = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};




let game = function(){
   let correctNumber = Math.floor(Math.random() * 101);
   let getNumber = function(){
      let userNumber = prompt('Угадай число от 1 до 100');
      if(userNumber === null){
         alert('Игра окончена');
      } else if (!isNumber(userNumber) || parseFloat(userNumber) > 100){
         confirm('Введи число от 0 до 100!');
        return getNumber();
      } else if
      (userNumber == correctNumber){
         alert('Ты угадал!!!');
      } else if (userNumber > correctNumber){
         confirm('Загаданное число меньше. Попробую еще раз');
          return getNumber();
      } else if (userNumber < correctNumber){
         confirm('Загаданное число больше. Попробую еще раз');
         return getNumber();
      } 
   
   }
   return getNumber();
}
game();



