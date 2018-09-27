const jwt = require('jsonwebtoken');
const db = require('../models/index.js');

exports.signin = async (req, res, next) => {
  console.log(req.body);

  try {
    const firma = await db.Firma.findOne({
      email: req.body.email,
    });
    const { id, firmaName, profileImageUrl, waschstrassen } = firma;
    const isMatch = await firma.comparePassword(req.body.password);
    if (isMatch) {
      const token = jwt.sign({
        id,
        firmaName,
        profileImageUrl,
      },
      process.env.SECRET_KEY);
      return res.status(200).json({
        id,
        firmaName,
        profileImageUrl,
        waschstrassen,
        token,
      });
    }
    return next({
      status: 400,
      message: 'Invalid Email/Password :S',
    });
  } catch (err) {
    return next({ status: 400, message: 'Invalid Email/Password.' });
  }
};

exports.signup = async (req, res, next) => {
  console.log(req.body);
  
  try {
    const firma = await db.Firma.create(req.body);
    const { id, firmaName, profileImageUrl } = firma;
    const token = jwt.sign({
      id,
      firmaName,
      profileImageUrl,
    },
    process.env.SECRET_KEY);
    return res.status(200).json({
      id,
      firmaName,
      profileImageUrl,
      token,
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message = 'Sorry, that username and/or email is taken';
    }
    return next({
      status: 400,
      message: err.message,
    });
  }
};
