DROP DATABASE IF EXISTS buyersdb;
CREATE DATABASE buyersdb;

USE buyersdb;

CREATE TABLE clients (
  id INTEGER AUTO_INCREMENT,
  clientname VARCHAR(45),
  income INTEGER,
  cashdown INTEGER,
  budget INTEGER,
  creditgrade VARCHAR(45),
  PRIMARY KEY (id)
);
