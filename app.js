const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/delay/:delay', (req, res) => {
  const delay = req.params.delay;
  setTimeout(() => {
    res.send({ message: 'Hello world' });
  }, delay);
});

app.listen(port, () => {
  console.log(`Delay API listening on port ${port}`);
});
