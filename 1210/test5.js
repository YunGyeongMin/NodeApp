var 모듈 = {};
function 덧셈(i, ii){
	console.log(i, " + " + ii, " = ", (i + ii));
	return (i + ii);
}
모듈.덧셈 = 덧셈;

function 뺄셈(i, ii){
	console.log(i, " - ", ii, " = ", (i - ii));
	return (i - ii);
}
모듈.뺄셈 = 뺄셈;

function 곱셈(i, ii){
	console.log(i, " * ", ii, " = ", (i * ii));
	return (i * ii);
}
모듈.곱셈 = 곱셈;

function 나눗셈(i, ii){
	console.log(i, " / ", ii, " = ", (i / ii));
	return (i / ii);
}
모듈.나눗셈 = 나눗셈;

function 조건문1(a){
	
	if(a){
		console.log("참");
	} else {
		console.log("거짓");
	}
	
}
모듈.조건문1 = 조건문1;

function 조건문2(a){
	console.log(typeof a);
	if(a === 1){
		console.log("참");
	} else {
		console.log("거짓");
	}
	
}
모듈.조건문2 = 조건문2;

function 조건문3(a){
	
	switch (typeof a) {
	case "number":
		console.log("정수형");
		break;
	case "boolean":
		console.log("논리형");
		break;
	default:
		console.log("나머지 자료형");
		break;
	}
	
}
모듈.조건문3 = 조건문3;

module.exports = 모듈;

