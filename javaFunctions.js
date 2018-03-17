

function sayhi(name, secondName) {
	return "hi " + name + " and " + secondName
}

console.log(sayhi("Zach", "Justin "))




function forEach(collection, func){
	for(var i = 0; i < collection.length; i++){
	var result = func(collection[i])
	console.log(result)
  }	
}


forEach([1, 2, 5, 48, 9, 4], function(elem) {
	return elem * elem
})






