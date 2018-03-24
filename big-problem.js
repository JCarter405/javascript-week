var fs = require('fs')
var _ = require("lodash")

fs.readFile('./bob.csv', "utf8", readFileCallback)

function readFileCallback(err, data){	
	var arrayOfStrings = splitNewLine(data)
	var arrayOfArrays = mapSplitComma(arrayOfStrings)
	var columnNames = _.head(arrayOfArrays)
	var data = _.tail(arrayOfStrings)
	
	var arrayOfObjects = arraysToObject(columnNames, data)
	var bobCommits = _.filter(arrayOfObjects, function(row){
		return row.name === 'bob'
	})
	var zachCommits = _.filter(arrayOfObjects, function(row){
		return row.name === 'zach'
	})
	console.log("zach has", zachCommits.length, "and bob has", bobCommits.length)
}

function arraysToObject(columnNames, data){
	_.map(data, function(row){
	return _.zipObject(columnNames, row)
	})
}

function mapSplitComma(collection){
	return _.map(collection, function(string){
		return splitComma(string)
	})
}

function splitNewLine(string){
	return _.split(string, '\n')
}
function splitComma(string){
	return _.split(string, ',')
}



// CSV files are: 
// rows are separated by /n
// columns are separated 