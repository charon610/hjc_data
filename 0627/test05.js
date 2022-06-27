// 자바스크립트는 기본적으로 전역과 함수 단위로 범위(스코프)를 생성
// 위치에 따라 전역변수와 지역 변수로 나뉘어짐.
    var a = 10;
    console.log(a);
function print(){
    var b = 20;
    if(true){
        var c = 30;
    }
    console.log(c);
}

print();
console.log(b);