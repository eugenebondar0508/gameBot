'use strict';

let isNumber = function(n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};




let game = function(){
   let correctNumber = Math.floor(Math.random() * 101);
   let count = 9;

   let getNumber = function(){
      let userNumber = prompt('Угадай число от 1 до 100');
      if(userNumber === null){
        alert('Игра окончена');
      } else if (!isNumber(userNumber) || parseFloat(userNumber) > 100){
         confirm('Введи число от 0 до 100!');
          count--;
          return getNumber(); 
       
      }else if(count === 0){
         if(confirm('Попытки закончились, хотите сыграть еще?') === true){
            count=9;
            return getNumber();
         } else{
            return alert('Игра окончена');
         }
      } 
      else if
      (userNumber == correctNumber){
         if(confirm('Ты угадал!!! Хотели бы сыграть еще?') ===false){
            return alert('Игра окончена');
         } else{
            count=9;
            return getNumber();
         }
      } else if (userNumber > correctNumber){
         confirm('Загаданное число меньше. Попробую еще раз. Осталось ' +count+ ' попыток');
       count--;
          return getNumber();
      } else if (userNumber < correctNumber){
         confirm('Загаданное число больше. Попробую еще раз. Осталось ' +count+ ' попыток');
        count--;
         return getNumber() ;
         
      } 
      
   }
  console.log(count);
   return getNumber();

}  

game();



