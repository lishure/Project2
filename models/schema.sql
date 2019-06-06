DROP DATABASE IF EXISTS buyersdb;
CREATE DATABASE buyersdb;

USE buyersdb;

CREATE TABLE clients (
  id INTEGER AUTO_INCREMENT,
  clientname VARCHAR(45),
  income INTEGER,
  cashdown INTEGER,
  PRIMARY KEY (id)
);

INSERT INTO clients (clientname, income, cashdown)
VALUES ("Joey", 5000, 50000);

INSERT INTO clients (clientname, income, cashdown)
VALUES ("Rachael", 6000, 80000);

INSERT INTO clients (clientname, income, cashdown)
VALUES ("Ross", 7000, 100000);