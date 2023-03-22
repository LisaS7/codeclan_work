const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js'); 

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('hotel');   
    const bookingsCollection = db.collection('bookings'); 
    const bookingsRouter = createRouter(bookingsCollection);   
    app.use('/api/bookings', bookingsRouter);   
  })
  .catch(console.err);

app.listen(5001, function () {
  console.log(`Listening on port ${ this.address().port }`);
});