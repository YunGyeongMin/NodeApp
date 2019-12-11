var 모듈 = require('./mod3');
console.log(모듈);

// CRUD  >> C
모듈.add("안녕");
모듈.add("세민");
모듈.add("배고프니?");
모듈.add("곧 점심 시간?");

// CRUD  >> R 
모듈.read();

// CRUD  >> U
모듈.up(1, "종훈");

// CRUD  >> D
모듈.del(1);
