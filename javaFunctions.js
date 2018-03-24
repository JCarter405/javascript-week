// adding lodash library
var _ = require("lodash")

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

// Function Type: Map
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

var result = _.map([1, 2, 5, 48, 9, 4], function(elem) {
	return elem * elem
})
console.log(result)



var stringCommas = "1, 2, 3, 5, 8"
console.log(_.split(stringCommas, ','))

var MyArray = [1, 2, 3]
console.log(_.head(MyArray))
console.log(_.tail(MyArray))

var dupArray = [1, 3, 4, 5, 7, 8]
console.log(_.uniq(dupArray))












