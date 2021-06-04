CREATE DATABASE name_database;

--\c into name_database

CREATE TABLE names (
    id SERIAL PRIMARY KEY NOT NULL,
    firstname VARCHAR ( 50 ) UNIQUE NOT NULL,
    gender TEXT NOT NULL,
    hexcode VARCHAR (15),
    meaning TEXT
);

INSERT INTO names(id, firstname, gender, hexcode, meaning)
VALUES(DEFAULT, 'Kim', 'Female', 'f7daef', 'Means Gold medal in Vietnamese.'),
      (DEFAULT, 'Ellaine', 'Female', 'caf000', 'Sunray in Greek.' ),
      (DEFAULT, 'Ed', 'Male', '4e7e36', 'Wealthy spear and protector.');

-- INSERT INTO names(id, firstname, gender, hexcode, meaning) 
-- VALUES( DEFAULT, "Ed", "Male", "4e7e36", "Wealthy spear & protector");


-- INSERT INTO names(id, firstname, gender, hexcode, meaning)
-- VALUES(DEFAULT, 'Ed', 'Male', '4e7e36', 'Wealthy spear and protector.')