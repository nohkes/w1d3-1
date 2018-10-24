function countLetters(str){
	
	var emptyObj = {};
	
	var newString = str.toLowerCase().split("");
	
	newString.forEach((element, index) => {
		
		if (emptyObj[element] === undefined) {
			emptyObj[element] = index + ", ";
		} else {
			emptyObj[element] += index + ", " ;
		}
	});
	
	console.log(emptyObj);
};
	

countLetters("lighthouse in the house")