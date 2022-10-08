const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');



const secret = '9967b2b336c12ed583e3eeaf1bbef42b82caf12e782a3385cb64a52fd70dd8f1e88a1b5c71620f46009cced493afdb1ef5d6dfa72706842ec1033c5c26b12f5c';
// mongodb+srv://Bharatrathod-81:<password>@cluster0.rcvey0v.mongodb.net/test

const dbArray = [
    {email:'bharat123',
     password:'password'
    }
  ];



router.post('/login',(req,res) => {
    const {email,password} = req.body;
    if(dbArray.some(e => e.email===email && e.password===password)){
      const token = jwt.sign(email,secret);
      console.log(token);
      res.status(200).json({token})
    }else{
        console.log('lllllllllllllllllll');
      res.status(401).json({massage:'user not found'})
    }
  })

router.post('/signup',(req,res) => {
    const {email,password} = req.body;
    console.log('bolo');
    if(email && password){
        dbArray.push({email,password});
        res.status(200).json({dbArray})
    }else{
        res.status(401).json({massage:"Not added email or password"})
    }
})

module.exports = router