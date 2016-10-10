var mysql = require('mysql');
var prompt = require('prompt');
var Table = require('cli-table');
var inquirer = require('inquirer');

bamazonTable = new Table({
	head: ['Product ID', 'Product Name', 'Price', 'Stock Quantity'],
	coldWidths: [30,30,30,30]
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

function viewProducts(){
	connection.query('SELECT * FROM Products', function(err, res){
		if(err){
			throw err;
		}
		for(var i = 0; i < res.length; i++){
			bamazonTable.push([res[i].ItemID, res[i].ProductName, res[i].Price, res[i].StockQuantity]);
		}
		console.log("--------------------------------------");
		console.log(bamazonTable.toString());
	});
}

// viewProducts();

inquirer.prompt([
		{
			type: "list",
			message: "Choose an option",
			choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
			name: "choice"
		}
	]).then(function(manager){
		switch(manager.choice){

			case "View Products for Sale":
				viewProducts();
				break;

			
		}
	})
