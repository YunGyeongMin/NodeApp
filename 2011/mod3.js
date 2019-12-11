var 모듈 = {};

모듈.data = [];
모듈.add = function(i){
	모듈.data.push(i);
}
모듈.read = function(){
	for(var i = 0; i < 모듈.data.length; i++){
		console.log(i, 모듈.data[i]);
	}
}
모듈.up = function(i, v){
	모듈.data.splice(i, 1, v);
}
모듈.del = function(i){
	모듈.data.splice(i, 1);
}

module.exports = 모듈;