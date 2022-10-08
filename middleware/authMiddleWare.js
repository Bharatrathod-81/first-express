const jwt = require('jsonwebtoken');
require('dotenv').config()
const secret = process.env.JWT_SECRET;

const authMiddleWare = (req,res,next) => {
    const token = req.headers.authorization
    console.log(jwt.verify(token,secret));
      try{
        const decoded = jwt.verify(token,secret)
        console.log(decoded)
        next()
      }catch{
        res.status(401).json({massage:'unauthorization user'});
      }
  };

  module.exports = authMiddleWare