const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..','..', 'frontend/dist')))

app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)})