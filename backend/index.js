const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello from Express.js backend!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
