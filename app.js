const express = require('express');
const app = express();

// Get Router
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Listen Port 3001
app.listen(3001, (req, res) => {
  console.log('Server is ok port 3001');
});

module.exports = app;
