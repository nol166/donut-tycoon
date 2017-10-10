var express = require('express');
var router = express.Router();
var knex = require('../db/knex');



router.get('/', (req, res) => {
  // get all of the donuts records
  console.log('booyah')
  knex('donuts')
  .then( donuts => res.render('donuts/index', { donuts: donuts }) )
});

router.get('/new', (req, res) => {
  res.render('donuts/new');
});

router.delete('/:id/', (req, res) => {
  knex('donuts')
  .where({id: req.params.id})
  .del()
  .then( ()=> {
    res.redirect('/donuts')
  })
})

router.get('/:id/edit', (req, res) => {
  knex('donuts').where({
    id: req.params.id
  })
  .first()
  .then( donuts => {
    console.log(donuts)
    res.render('donuts/edit', { donuts: donuts})
  })
});



router.patch('/:id/', (req, res, next) => {
  console.log('connected to edit')
  knex('donuts')
  .where('id', req.params.id)
    .update({ name: req.body.name, topping: req.body.topping, price: req.body.price})
    .then((donuts) => {
      res.redirect("/donuts");
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id', (req, res) => {
  //get a specific donuts information
  knex.select().table('donuts').where({
    id: req.params.id
  }).then( donuts => res.render('donuts/show', { donuts: donuts}) )
});


router.post('/', (req, res, next) => {
  knex('donuts')
    .insert({ name: req.body.name, topping: req.body.topping, price: req.body.price})
    .then((donuts) => {
      res.redirect("/donuts");
    })
    .catch((err) => {
      next(err);
    });
});




module.exports = router
