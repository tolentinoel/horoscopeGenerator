CREATE DATABASE name_database;

--\c into name_database

CREATE TABLE names (
    FirstName text NOT NULL,
    Gender text NOT NULL,
    Hexcode varchar (10),
    Meaning text
);

-- INSERT INTO names(FirstName, Gender, Hexcode, Meaning)
-- VALUES('Kim', 'Female', 'f7daef', 'Means Gold medal in Vietnamese.'),
--       ('Ellaine', 'Female', 'caf000', 'Sunray in Greek.' );


