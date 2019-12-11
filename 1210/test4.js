function 조건문(a){
	
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

조건문(0.1);

