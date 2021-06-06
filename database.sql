
CREATE TABLE names (
    id SERIAL PRIMARY KEY NOT NULL,
    firstname VARCHAR ( 50 ) NOT NULL,
    gender TEXT NOT NULL,
    sign TEXT NOT NULL,
    hexcode VARCHAR (15),
    horoscope TEXT
);
--  MOCK DATA TO TEST SQL AND FRONT END

INSERT INTO names( firstname, gender, sign)
VALUES( 'Kim', 'Female', 'Cancer'),
      ( 'Ellaine', 'Female', 'Taurus' );




