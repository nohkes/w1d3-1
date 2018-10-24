
function countLetters(str){
	
	var emptyObj = {};
	
	var newString = str.toLowerCase().split("");
	
	newString.forEach(element => {
		
		if (emptyObj[element] === undefined) {
			emptyObj[element] = 1;
		} else {
			emptyObj[element] += 1;
		}
	});
	
	console.log(emptyObj);
};
	

countLetters("lighthouse in the house")

// newString = "aabbcc"
// element = "a"
// newString[element] == newString["a"] == ???