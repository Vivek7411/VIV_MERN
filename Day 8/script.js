const express = require('express');

const app = express();

app.get('/home', (req, res) => {
   res.send('This is the home page');
});

app.listen(1400);