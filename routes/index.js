var express = require('express');
var router = express.Router();

function isAuthenticated(req, res, next){
  // console.log(req.session.user);
  if(req.session.user){
    return next()
  }
  res.redirect('/login')
}

router.get('/', isAuthenticated,function(req, res, next) {  
  res.render('index', {user: req.session.user.username});
});

module.exports = router;
