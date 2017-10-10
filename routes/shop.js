var express = require('express');
var router = express.Router();
var knex = require('../db/knex');



router.get('/', (req, res) => {
  // get all of the shop records
  console.log('booyah')
  knex('shop')
  .then( shop => res.render('shops/index', { shop: shop}) )
});

router.get('/new', (req, res) => {
  res.render('shops/new');
});

router.get('/:id/edit', (req, res) => {
  knex('shop').where({
    id: req.params.id
  })
  .first()
  .then( shop => {
    console.log(shop)
    res.render('shops/edit', { shop: shop})
  })
});

router.patch('/:id/', (req, res, next) => {
  console.log('connected to edit')
  knex('shop/:id')
    .update({ name: req.body.name, city: req.body.city})
    .then((shop) => {
      res.redirect("/shops");
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id', (req, res) => {
  //get a specific shop information
  knex.select().table('shop').where({
    id: req.params.id
  }).then( shop => res.render('shops/show', { shop: shop}) )
});


router.post('/', (req, res, next) => {
  knex('shop')
    .insert({ name: req.body.name, city: req.body.city})
    .then((shop) => {
      res.redirect("/shops");
    })
    .catch((err) => {
      next(err);
    });
});



module.exports = router
