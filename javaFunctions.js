

function sayhi(name, secondName) {
	return "hi " + name + " and " + secondName
}

console.log(sayhi("Zach", "Justin "))


// Function type: "For Each"

function forEach(collection, func){
	for(var i = 0; i < collection.length; i++){
	var result = func(collection[i])
	console.log(result)
  }	
}

//forEach([1, 2, 5, 48, 9, 4], function(elem) {
//	return elem * elem
//}//)

// Function Type: Mapping
// mapping - container (type: arrat) of elements, length and 
// making a new collection
//


function map(collection, func) {
	var mapped = []
	for(var i = 0; i < collection.length; i++){
	var result = func(collection[i])
	mapped.push(result)
	}
return mapped	
}

var result = map([1, 2, 5, 48, 9, 4], function(elem) {
	return elem * elem
})
console.log(result)