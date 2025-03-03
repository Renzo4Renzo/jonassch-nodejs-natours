const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ app: 'Natours', message: 'Hello from the server side!' });
});

app.post('/', (req, res) => {
  res
    .status(200)
    .json({ app: 'Natours', message: 'You can POST to this endpoint!' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
