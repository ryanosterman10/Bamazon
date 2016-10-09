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

connection.query('SELECT * FROM Products', function(err, res){
	if(err){
		throw err;
	}
	for(var i = 0; i < res.length; i++){
		bamazonTable.push([res[i].ItemID, res[i].ProductName, res[i].Price]);
	}
	console.log("--------------------------------------");
	console.log(bamazonTable.toString());

	customerOrder();
});

order = [];

function customerOrder(){
	var productInfo = {
		properties:{
			ItemID : {description: 'Choose an item to purchase by typing in its ID'},
			Quantity: {description: ' Type in the desired quantity of this item'}
		},
	};

	prompt.start();
		prompt.get(productInfo, function(err, res){
			var purchase = {
				ItemID: res.ItemID,
				Quantity: res.Quantity
			};

			order.push(purchase);

			connection.query('SELECT * FROM Products WHERE ItemID=?', order[0].ItemID, function(err, res){
				if(res[0].StockQuantity >= order[0].Quantity){

					console.log('Your TOTAL: $' + (order[0].Quantity * res[0].Price));

					StockQuantityLeft = res[0].StockQuantity - order[0].Quantity;

					connection.query('UPDATE Products SET StockQuantity =' + StockQuantityLeft + ' WHERE ItemID =' + order[0].ItemID, function(err, res){
						console.log("Order Confirmed!");
						connection.end();
					});
				}
				else{
					console.log("Sorry... we are out of stock!");
					connection.end();
				}

			});
		});
}


