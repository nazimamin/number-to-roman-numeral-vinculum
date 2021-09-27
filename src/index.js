const express = require('express');
const app = express();
const port = 3000;
var port = 2000;

app.get('/', (req, res) => res.send('Hello Husky!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
