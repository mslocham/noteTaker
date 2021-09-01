const express = require('express');
const app = express();

const { notes } = require('./Develop/db/db.json');












app.get('/api/notes', (req, res) => {
    res.send('Hello!');
});


app.listen(3003, () => {
    console.log(`API server now on port 3001!`);
  });