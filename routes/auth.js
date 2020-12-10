var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/forgot-password', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/password-reset', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/password-change', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/logout', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
