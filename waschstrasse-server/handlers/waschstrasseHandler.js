const db = require('../models/index.js');

exports.createWaschstrasse = async (req, res, next) => {
    
    try {
        const waschstrasse = await db.Waschstrasse.create({
            name: req.body.name,
            PLZ: req.body.PLZ,
            ort: req.body.ort,
            adresse: req.body.adresse,
            öfnungszeiten: req.body.öfnungszeiten,
            preise: req.body.preise,
            sonderAngebote: req.body.sonderAngebote,
            maxFahrzeugmasse: req.body.maxFahrzeugmasse,
            services: req.body.services,
            firma: req.params.id,
        });
        const foundFirma = await db.Firma.findById(req.params.id);
        foundFirma.waschstrassen.push(waschstrasse.id);
        await foundFirma.save();
        const foundWaschstrasse = await db.Waschstrasse.findById(waschstrasse.id).populate('firma', {
            firmaName: true,
        });
        return res.status(200).json(foundWaschstrasse);
    }catch(err){
        return next(err);
    }
};

exports.getWaschstrasse = async (req, res, next) => {
    try {
    const waschstrasse = await db.Waschstrasse.findById(req.params.idwstr);
        return res.status(200).json(waschstrasse);
    } catch(err) {
    return next(err);
    }
};

exports.updateWaschstrasse = async (req, res, next) => {
    
    try {
        const waschstrasse = await db.Waschstrasse.findByIdAndUpdate(
            req.params.idwstr,
            {
            name: req.body.name,
            PLZ: req.body.PLZ,
            ort: req.body.ort,
            adresse: req.body.adresse,
            öfnungszeiten: req.body.öfnungszeiten,
            preise: req.body.preise,
            sonderAngebote: req.body.sonderAngebote,
            maxFahrzeugmasse: req.body.maxFahrzeugmasse,
            services: req.body.services,
            firma: req.params.id,
        });
        await waschstrasse.save()
        const foundWaschstrasse = await db.Waschstrasse.findById(waschstrasse.id).populate('firma', {
            firmaName: true,
        });
        return res.status(200).json(foundWaschstrasse);
    }catch(err){
        return next(err);
    }
};

exports.deleteWaschstrasse = async (req, res, next) => {
    try{
        const waschstrasse = await db.Waschstrasse.findById(req.params.idwstr);
        await waschstrasse.remove();
        return res.status(200).json('Removed');
    } catch (err) {
        return next(err);
    }
};