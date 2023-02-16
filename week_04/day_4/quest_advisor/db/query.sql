You can change the name of columns in your SQL query to something more useful, e.g. if you are joining 3 tables which all have an 'id' column
and it might not be obvious in the output which id came from which table. You do "SELECT id AS user_id". It doesn't affect the column name in the database, it just changes
the name of the column in the output.

```
SELECT users.id AS user_id, users.name, locations.id AS locations_id, locations.category, locations.name
FROM users
INNER JOIN visits
ON users.id = visits.user_id
INNER JOIN locations
ON locations.id = visits.location_id;
```

You can do the same for the tables as well, to save some typing if you're listing columns in the SELECT:

```
SELECT u.id AS user_id, u.name, l.id AS locations_id, l.category, l.name
FROM users AS u
INNER JOIN visits AS v
ON users.id = visits.user_id
INNER JOIN locations as l
ON locations.id = visits.location_id;
```
