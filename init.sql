-- CREATE USER postgres;
-- create database customers IF NOT EXISTS;
-- GRANT ALL PRIVILEGES ON DATABASE customers TO postgres;


-- CREATE TABLE users (
--     id SERIAL,
--     location VARCHAR(255),
--     alias VARCHAR(255),
--     email VARCHAR(255),
-- );

-- INSERT INTO users
-- ("location","alias","email")
-- VALUES('Toronto','SB','sb@awakeLabs.com');

-- INSERT INTO users
-- ("location","alias","email")
-- VALUES('Toronto','SB','sb@awakeLabs.com');

DROP DATABASE IF EXISTS customers;
create database customers;

\c customers;

CREATE TABLE users(
    id SERIAL,
    location VARCHAR(255),
    alias VARCHAR(255),
    email VARCHAR(255)
);

INSERT INTO users
("location","alias","email")
VALUES('Toronto','SB','sb@awakeLabs.com');

INSERT INTO users
("location","alias","email")
VALUES('Toronto','SB','sb@awakeLabs.com');