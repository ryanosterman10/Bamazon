var mysql = require('mysql');
var prompt = require('prompt');
var Table = require('cli-table');

bamazonTable = new Table({
	head: ['Product ID', 'Product Name', 'Price'],
	coldWidths: [30,30,30]
});

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'BamazonDB'
});

connection.connect(function(err){
	if(err){
		throw err;
	}
	console.log("connected as id", connection.threadId);
});

console.log("Bamazon!");

// connection.query('SELECT * FROM Products', function(err, res){
// 	if(err){
// 		throw err;
// 	}
// 	console.log(res);
// });

connection.query('SELECT * FROM Products', function(err, res){
	if(err){
		throw err;
	}
	for(var i = 0; i < res.length; i++){
		bamazonTable.push([res[i].ItemID, res[i].ProductName, res[i].Price]);
	}

	console.log(bamazonTable.toString());
});