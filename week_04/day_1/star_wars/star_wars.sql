DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_darkside BOOLEAN NOT NULL,
    age INT
);

INSERT INTO
    characters (name, is_darkside, age)
VALUES
    ('Obi-Wan Kenobi', false, 27);

INSERT INTO
    characters (name, is_darkside, age)
VALUES
    ('Anakin Skywalker', false, 19);

INSERT INTO
    characters (name, is_darkside, age)
VALUES
    ('Darth Maul', true, 32);

INSERT INTO
    characters (name, is_darkside)
VALUES
    ('Yoda', false);

INSERT INTO
    characters (name, is_darkside, age)
VALUES
    ('Luke Skywalker', false, 17);

INSERT INTO
    characters(name, is_darkside, age)
VALUES
    ('Stormtrooper', true, 25);

INSERT INTO
    characters(name, is_darkside, age)
VALUES
    ('Stormtrooper', true, 25);

INSERT INTO
    characters(name, is_darkside, age)
VALUES
    ('Stormtrooper', true, 25);

INSERT INTO
    characters(name, is_darkside, age)
VALUES
    ('Stormtrooper', true, 25);

-- UPDATING MULTIPLE FIELDS
UPDATE
    characters
SET
    (is_darkside, age) = (true, 20)
WHERE
    name = 'Anakin Skywalker';

-- UPDATING SINGLE FIELD
UPDATE
    characters
SET
    age = 65
WHERE
    name = 'Obi-Wan Kenobi';

-- DELETE
DELETE FROM
    characters
WHERE
    name = 'Darth Maul';

SELECT
    *
FROM
    characters;