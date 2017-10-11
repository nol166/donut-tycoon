var express = require('express');
var router = express.Router();
var knex = require('../db/knex');



router.get('/', (req, res) => {
  // get all of the shop records
  // console.log('booyah')
  knex('shop')
  .then( shop => res.render('shops/index', { shop: shop}) )
});

router.get('/new', (req, res) => {
  res.render('shops/new');
});

router.delete('/:id/', (req, res) => {
  knex('shop')
  .where({id: req.params.id})
  .del()
  .then( ()=> {
    res.redirect('/shops')
  })
})

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
  knex('shop')
  .where('id', req.params.id)
    .update({ name: req.body.name, city: req.body.city})
    .then((shop) => {
      res.redirect("/shops");
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id/', (req, res) => {
  console.log('booyah')
  //get a specific shop information
  knex('shop')
  .select('shop.name as shopName', 'shop.city', 'shop.id as shopId', 'donuts.name as donutName')
  .where({'shop.id': req.params.id})
      .innerJoin('shop_donuts', 'shop_id', 'shop.id')
      .innerJoin('donuts', 'donuts.id', 'shop_donuts.donut_id')
      .then(function (data) {
        console.log('Shop Join Data', data);
        res.render('shops/show', {shop: {name: data[0].shopName, city: data[0].city, id: data[0].id}, donuts: data});
      })
      .catch(err =>{
        console.log(err);
        res.send(err)
      });
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
