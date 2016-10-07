CREATE DATABASE BamazonDB;

USE BamazonDB;

CREATE TABLE Products(
	ItemID INTEGER NOT NULL AUTO_INCREMENT,
    ProductName VARCHAR(255) NOT NULL,
    DepartmentName VARCHAR(255),
    Price INTEGER,
    StockQuantity INTEGER NOT NULL,
    PRIMARY KEY (ItemID)
);

INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Apple', 'Fruits', 1, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Banana', 'Fruits', 2, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Coconut', 'Fruits', 3, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Grapefruit', 'Fruits', 3, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Lemon', 'Fruits', 1, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Lime', 'Fruits', 1, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Mango', 'Fruits', 3, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Orange', 'Fruits', 2, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Pineapple', 'Fruits', 4, 100);
INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES ('Watermelon', 'Fruits', 5, 100);

SELECT ItemID, ProductName, Price FROM Products;