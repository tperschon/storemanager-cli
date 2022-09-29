// import dependencies
const express = require('express');
const db = require('./config/connection');
// set port
const PORT = process.env.PORT || 3001;
// initialize/instantiate express
const app = express();
// feed middleware into instantiated express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});