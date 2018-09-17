const db = require('../models/index.js');


exports.getFeed = async (req, res, next) => {
    try {
    const waschstrassen = await db.Waschstrasse.find().populate();
        return res.status(200).json(waschstrassen);
    } catch(err) {
    return next(err);
    }
};