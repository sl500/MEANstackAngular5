var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Fact = require('../models/Fact.js');

/* GET ALL FACTS */
router.get('/', function(req, res, next) {
  Fact.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE FACT BY ID */
router.get('/:id', function(req, res, next) {
  Fact.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Fact */
router.post('/', function(req, res, next) {
  Fact.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Fact */
router.put('/:id', function(req, res, next) {
  Fact.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Fact */
router.delete('/:id', function(req, res, next) {
  Fact.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;