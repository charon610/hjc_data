let x = 5;  //숫자형
let y = 'five';  //문자형
let isTrue = true; //불린형
let empty = null;  //null형
let nothing;
let sym = Symbol('me');

let item = {      //객체
    price : 5000,
    count : 10
}

let fruits = ['apple','orange', 'kiwi'];
let addFruit = function(fruit){
    fruits.push(fruit);  //함수
}

addFruit('watermelon');  //함수 실행
console.log(fruits);  //콘솔 출력