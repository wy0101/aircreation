var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


/* GET welcome page. */
router.get('/welcomeus',function(req,res){
  res.render('welcome/us')
});

router.get('/welcomebenefit',function(req,res){
  res.render('welcome/benefit');
})

router.get('/welcomevisit',function(req,res){
  res.render('welcome/visit');
});


/* GET product page. */
router.get('/product',function(req,res){
  res.render('product/product');
});


/* GET news page. */
router.get('/newsrecent',function(req,res){
  res.render('news/recent');
});

router.get('/newsbulletins',function(req,res){
  res.render('news/bulletins');
});

router.get('/newsnewsletter',function(req,res){
  res.render('news/newsletter');
});


/* GET document page. */
router.get('/docstechnical',function(req,res){
  res.render('docs/technical');
});

router.get('/docsphotos',function(req,res){
  res.render('docs/photos');
});

router.get('/docsvideos',function(req,res){
  res.render('docs/videos');
});


/* GET contact page. */
router.get('/contactinfo',function(req,res){
  res.render('contact/information');
});

router.get('/contactfrenchdis',function(req,res){
  res.render('contact/french');
});

router.get('/contactinterdis',function(req,res){
  res.render('contact/international');
});


module.exports = router;
