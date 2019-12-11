var 모듈 = require('./mod2');
console.log(모듈);

모듈.a = 5;
모듈.e(4);

var result = 모듈.c();
console.log(result);