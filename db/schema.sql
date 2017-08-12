-- Create a database
CREATE DATABASE ingredients_db;
USE ingredients_db;

-- Create the table
CREATE TABLE ingredients
(
id int NOT NULL AUTO_INCREMENT,
item_name varchar(255) NOT NULL,
type varchar(255) NOT NULL,
price decimal(3,2) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);