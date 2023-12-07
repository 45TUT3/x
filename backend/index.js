const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/x-db', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
	  console.log('Connected to MongoDB');
});

// Define your MongoDB schema and models here

app.get('/', (req, res) => {
  res.send('Hello from MongoDB backend!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});    
