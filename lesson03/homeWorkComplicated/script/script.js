'use strict';

let ru = ['Пн', 'Вт', 'Ср', 'Чт','Пт', 'Сб', 'Вс'];
let en = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','San'];

let lang  = [ru, en];

console.log('lang : ', en );

if(ru ) {
       console.log(lang[0]); 
}else {
      console.log(lang[1]);   
    }
 
 let str1 = lang[1];  
 

 console.log('str1: ', str1);

 ;
   switch (lang) {
       case ru: console.log(lang[0]);
       case en: console.log(lang[1]);
       default: console.log('ssssssssssss');
   }
 

// for(let i = 0; i < lang.length; i++) {
//     console.log('Массив под индексом - '+i);
//     for(let j = 0; j < lang[i].length; j++ ){
//         console.log(lang[i][j]);
//     }
// }

