var 모듈 = {};

모듈.a = function(){
	console.log("a()");
}

function fun(){
	console.log("fun()");
}
모듈.b = fun;

모듈.c = () => {
	console.log("c()");
}

module.exports = 모듈;