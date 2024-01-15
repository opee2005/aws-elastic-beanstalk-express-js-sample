const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is Lawal and here is my first app on cloud));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
