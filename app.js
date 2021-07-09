const express = require('express');
const app = express();

// Get Router
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
app.use('/', indexRouter);
app.use('/login', loginRouter);

// Listen Port 3001
app.listen(3001, (req, res) => {
  console.log('Server is ok port 3001');
});

module.exports = app;
