// 호이스팅(끌어 올리기) - 함수를 선언하기 전에 호출이 가능
// 일반적으로는 함수를 선언 후 호출하지만 호출 후 선언이 가능
hello();
function hello(){
    console.log("안녕하세요");
}

//hello2();    이 경우는 에러 -> 함수 정의 후 호출해야 함
let hello2 = function(){
    console.log("안녕하세요2");
}

hello2();