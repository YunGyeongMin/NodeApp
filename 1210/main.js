//var a;  // a변수 선언
//console.log(a);
//
//a = 1;	// 정수형
//console.log(a);
//
//a = "글"; // 문자형
//console.log(a);
//
//a = true; // 논리형
//console.log(a);
//
//a = function(){
//		console.log("함수 실행");
//    }
//a();	// 함수 호출
//
//function b(){
//	console.log("b함수 실행")
//}
//b();

var mode = {
		a: 1,
		b: "글",
		c: true,
		d: function(){
				console.log("함수");
				return "리턴 함수";
		   },
		e: () => {
			return "함수임";
		}
}
//console.log(mode.a, mode.b, mode.c, mode.d(), mode.e());

var o = {};
var a = [];

a.push(o);
//console.log(a);

o = mode;
//console.log(a);

a.push(o);
//console.log(a.length, a[1].a);

for(var i = 0; i < a.length; i++){
	console.log(a[i]);
	for(var key in a[i]){
		console.log(key, a[i][key]);
	}
}

//function f(){
//	
//}
//
//var ff = function(){
//	
//}
//
//ff = () => {};

