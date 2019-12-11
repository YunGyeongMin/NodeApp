var 모듈 = {};

var d = 10;

모듈.a = 0;
모듈.b = 0;
모듈.c = function(){
	return (모듈.a + 모듈.b) * d;
}
모듈.e = function(i){
	d = i;
}

module.exports = 모듈;