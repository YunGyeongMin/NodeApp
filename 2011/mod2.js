var mod3 = require("./mod3");
var 모듈 = {};

var d = 10;

모듈.a = 0;
모듈.b = 0;
모듈.c = function(){
	return (모듈.a + 모듈.b);
}
모듈.e = function(i){
	d = i;
}
모듈.f = function(){
	for(var i = 0; i < mod3.data.length; i++){
		모듈.a = mod3.data[i][0];
		모듈.b = mod3.data[i][1];
		mod3.data[i][2] = 모듈.c();
	}
}

module.exports = 모듈;