// importing necessary modules
const fs = require ('fs')

//read the customer data json 
fs.readFile(__dirname + "/customer.json", "utf8", (err,data)=>{
	//parse the file to a readable object
	let parseData = JSON.parse(data)
	console.log(parseData)
})


// old syntax
// fs.readFile(__dirname + "/customer.json", "utf8", function (err,date) {
	
// })