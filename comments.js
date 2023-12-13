// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create app
const app = express();
// Use middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// Create endpoint
app.get('/posts/:id/comments', (req, res) => {
  res.send([{ id: 1, author: 'John', content: 'Wow! Cool!' }]);
});
// Start server
app.listen(4001, () => {
  console.log('Listening on 4001');
});