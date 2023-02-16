You can change the name of columns in your SQL output to something more useful by doing "SELECT id AS user_id". 
It's useful if tables have columns with the same name, e.g. you're joining 3 tables which all have an id column, and it's not clear which column in your results came from which table.
It doesn't affect the column name in the database, it just changes how it appears in the output.

```
SELECT users.id AS user_id, locations.id AS locations_id, visits.id AS visit_id, user.name, locations.category, locations.name
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
ON u.id = v.user_id
INNER JOIN locations as l
ON l.id = v.location_id;
```


You can use an alias for the tables if you're as lazy as I am and don't like typing lots of table names.
Just put AS after the table name.
```
SELECT u.* FROM users AS u
INNER JOIN visits AS v
ON v.user_id = u.id
WHERE v.location_id = %s
```
