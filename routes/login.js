const express = require('express');
const router = express.Router();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get Database
const dbConnection = require('../lib/database');

// Connect to Client
router.use(cors());
router.use(express.json());

// Protect Password / Hashing
const saltRounds = 10;

// Login Get
router.post('/', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  dbConnection.query('SELECT * FROM admin WHERE username = ? ', username, (err, results) => {
    if (err) {
      res.send({ err: err });
    } else {
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, (err, response) => {
          if (response) {
            const data = results[0].id;
            const token = jwt.sign({ data }, 'secretLoginAuthentification', {
              expiresIn: 300,
            });

            res.json({ token: token });
          } else {
            res.send({ message: 'username / password is wrong' });
          }
        });
      } else {
        res.send({ message: 'username / password is wrong' });
      }
    }
  });
});

module.exports = router;
