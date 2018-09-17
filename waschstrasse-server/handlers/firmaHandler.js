const db = require('../models/index.js');


exports.getFirma = async (req, res, next) => {
    try {
    const firma = await db.Firma.findById(req.params.id).populate('waschstrassen');
        return res.status(200).json(firma);
    } catch(err) {
    return next(err);
    }
};

