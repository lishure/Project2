DROP DATABASE IF EXISTS buyersdb;
CREATE DATABASE buyersdb;

USE buyersdb;

CREATE TABLE buyers (
  id INTEGER AUTO_INCREMENT,
  clientname VARCHAR(45),
  income INTEGER,
  cashdown INTEGER,
  budget INTEGER,
  creditgrade VARCHAR(45),
  comment VARCHAR(200),
  PRIMARY KEY (id)
);

CREATE TABLE chat (
  id INTEGER AUTO_INCREMENT,
  email VARCHAR(45),
  msg VARCHAR(45),
  PRIMARY KEY (id)
);