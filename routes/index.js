const express = require('express');
const router = express.Router();
const cors = require('cors');

// Get Database
const dbConnection = require('../lib/database');

// Connect to Client
router.use(cors());
router.use(express.json());

// Get data category
router.get('/category', (req, res) => {
  dbConnection.query('SELECT * FROM category', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Add category
router.post('/addCategory', (req, res) => {
  const name = req.body.name;
  const images = req.body.images;
  dbConnection.query('INSERT INTO category SET name = ? , images = ? ', [name, images], (err, results) => {
    if (err) throw err;
    res.send('Success Added');
  });
});

// Update category
router.get('/editCategory/:idEdit', (req, res) => {
  const idEdit = req.params.idEdit;
  dbConnection.query('SELECT * FROM category WHERE id_category = ? ', idEdit, (err, results) => {
    if (err) throw err;
    res.send(results[0]);
  });
});

// Delete category
router.delete('/delete/:idDelete', (req, res) => {
  const idDelete = req.params.idDelete;
  dbConnection.query('DELETE FROM category WHERE id_category = ? ', idDelete, (err, results) => {
    if (err) throw err;
    res.send('Success Delete');
  });
});

module.exports = router;
