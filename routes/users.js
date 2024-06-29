var express = require('express');
var router = express.Router();


const user = {
  username: "samlik",
  password: "1234"
}

router.get('/login', function(req, res, next) {
  if(req.session.user){
    res.redirect('/')
  }
    res.render('login');
  });

router.post('/login',(req, res, next)=>{
  const { username ,password } = req.body
  // const { username, p  assword } = req.body;
  if(username == user.username && password == user.password){
    console.log(req.body);
    req.session.user = {username}
    res.redirect('/')
  }else{
    res.render('login',{error: "invalid username or password"})
  }
})

router.get('/logout',(req, res)=>{
  res.clearCookie('connect.sid')
  res.redirect('/login')
})
// router.get('/userdetailes',)
router.post('/userdetailes',(req,res)=>{
  let promise = new Promise((resolve,reject)=>{
    
  })
})

// router.get('/forgot',(req,res)=>{
//   res.render('forgot')
// })

// router.post('/forgot',(req,res)=>{
//   user.password = req.body.password
//   console.log(req.body.password);
//   res.redirect('/')
// })


module.exports = router;
