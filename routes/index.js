const express = require('express');
const router = express.Router();
const cors = require('cors');
const bcrypt = require('bcrypt');

// Get Database
const dbConnection = require('../lib/database');

// Connect to Client
router.use(cors());
router.use(express.json());

// Protect Password / Hashing

// Get data category
router.get('/category', (req, res, next) => {
  dbConnection.query('SELECT * FROM category', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Add category
router.post('/addCategory', (req, res, next) => {
  const name = req.body.name;
  const images = req.body.images;
  dbConnection.query('INSERT INTO category SET name = ? , images = ? ', [name, images], (err, results) => {
    if (err) throw err;
    res.send({ message: 'success added' });
  });
});

// Get Data Update Category
router.get('/editCategory/:idEdit', (req, res, next) => {
  const idEdit = req.params.idEdit;
  dbConnection.query('SELECT * FROM category WHERE id_category = ? ', idEdit, (err, results) => {
    if (err) throw err;
    res.send(results[0]);
  });
});

// Update Category
router.put('/updateCategory/:idUpdate', (req, res, next) => {
  const idUpdate = req.params.idUpdate;
  const name = req.body.name;
  const images = req.body.images;
  dbConnection.query('UPDATE category SET name = ? , images = ? WHERE id_category = ?  ', [name, images, idUpdate], (err, results) => {
    if (err) throw err;
    res.send({ message: 'success updated' });
  });
});

// Delete category
router.delete('/delete/:idDelete', (req, res, next) => {
  const idDelete = req.params.idDelete;
  dbConnection.query('DELETE FROM category WHERE id_category = ? ', idDelete, (err, results) => {
    if (err) throw err;
    res.send('Success Delete');
  });
});

// Get Collections Collections
router.get('/collections', (req, res, next) => {
  dbConnection.query('SELECT * FROM collections', (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// Add Collections Collections
router.post('/addCollections', (req, res, next) => {
  const dataCollections = {
    name: req.body.name,
    images: req.body.images,
  };
  dbConnection.query('INSERT INTO collections SET ? ', dataCollections, (err, results) => {
    if (err) throw err;
    res.send({ message: 'Success Add Collection ' });
  });
});

// Get Data Update Collections
router.get('/editCollections/:idEdit', (req, res, next) => {
  const idEdit = req.params.idEdit;
  dbConnection.query('SELECT * FROM collections WHERE id_collection = ? ', idEdit, (err, results) => {
    if (err) throw err;
    res.send(results[0]);
  });
});

// Update Collections
router.put('/updateCollections/:idUpdate', (req, res, next) => {
  const idUpdate = req.params.idUpdate;
  const name = req.body.name;
  const images = req.body.images;
  dbConnection.query('UPDATE collections SET name = ? , images = ? WHERE id_collection = ?  ', [name, images, idUpdate], (err, results) => {
    if (err) throw err;
    res.send({ message: 'success updated collect' });
  });
});

// Delete Collections
router.delete('/deleteCollect/:idDelete', (req, res, next) => {
  const idDelete = req.params.idDelete;
  dbConnection.query('DELETE FROM collections WHERE id_collection = ? ', idDelete, (err, results) => {
    if (err) throw err;
    res.send('Success Delete Collect');
  });
});

module.exports = router;
