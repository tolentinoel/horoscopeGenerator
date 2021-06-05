CREATE DATABASE name_database;

--\c into name_database

CREATE TABLE names (
    id SERIAL PRIMARY KEY NOT NULL,
    firstname VARCHAR ( 50 ) NOT NULL,
    gender TEXT NOT NULL,
    sign TEXT NOT NULL,
    hexcode VARCHAR (15),
    horoscope TEXT
);
--  MOCK DATA TO TEST SQL AND FRONT END

INSERT INTO names(id, firstname, gender, hexcode, sign)
VALUES(DEFAULT, 'Kim', 'Female', 'f7daef', 'cancer'),
      (DEFAULT, 'Ellaine', 'Female', 'caf000', 'taurus' );




