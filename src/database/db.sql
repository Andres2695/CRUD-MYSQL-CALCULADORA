--create data base
CREATE DATABASE crudnodeP;
 --usign data abse
 use crudnodeP;
  --creating a table
  CREATE TABLE customer (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
address VARCHAR(50) NOT NULL,
phone VARCHAR(15)

  );

  -- tp show tables
  SHOW TABLES;

  --to describe tables
  describe customer;
