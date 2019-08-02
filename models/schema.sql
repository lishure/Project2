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
  timeline VARCHAR (50),
  commentsection VARCHAR(200),
  PRIMARY KEY (id)
);

