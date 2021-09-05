const express = require('express');
const PORT = process.env.PORT || 3003;
const app = express();

const { notes } = require('./Develop/db/db.json');

function filterByQuery (query, notesArray) {
    let filteredResults = notesArray;
    if (query.title) {
        filteredResults = filteredResults.filter(note => note.title === query.title);
    }
    return filteredResults;
}










app.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });