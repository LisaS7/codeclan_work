### Questions

What is responsible for defining the routes of the `games` resource?

- The helper function create_router which is given the name GamesRouter.

What do you notice about the folder structure? Whats the client responsible for? Whats the server responsible for?

- The client is responsible for presentation of the data. The server is responsible for retrieving the data from the database.

What are the the responsibilities of server.js?

- Middleware
- Connecting to the db and getting the collection
- Setting up the gamesRouter
- Listening on the port

What are the responsibilities of the `gamesRouter`?

- Making the routes

What process does the the client (front-end) use to communicate with the server?

- The client and server communicate via requests

What optional second argument does the `fetch` method take? And what is it used for in this application? Hint: See [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) on the MDN docs

- The second argument can be used to supply data and headers for certain types of requests such as POST

Which of the games API routes does the front-end application consume (i.e. make requests to)?

- The requests are made to http://localhost:9000/api/games

What are we using the [MongoDB Driver](http://mongodb.github.io/node-mongodb-native/) for?

- The driver translates javascript instructions into database instructions

## Extension

Why do we need to use [`ObjectId`](https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html) from the MongoDB driver?

- This is the primary key for the database. We use it to convert the json string ids into the correct type for the db.
