// var과 ES6에서 추가된 let과의 차이
if(true){
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}
console.log(functionScopeValue);
console.log(blockScopeValue);
