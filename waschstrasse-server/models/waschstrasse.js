const mongoose = require('mongoose');
const Firma = require('./firma.js');

const waschstrasseSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  PLZ: {
    type: String,
  },
  ort: {
    type: String,
  },
  adresse: {
    type: String,
  },
  öfnungszeiten: {
    type: String,
  },
  preise: {
    type: String,
  },
  sonderAngebote: {
    type: String,
  },
  maxFahrzeugmasse: {
    type: String,
  },
  services: {
    type: String,
  },
  firma: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Firma',
  }
});

waschstrasseSchema.pre('remove', async function remove(next) {
  try{
    const firma = await Firma.findById(this.firma);
    firma.waschstrassen.remove(this.id);
    await firma.save();
    return next();
  }catch(err){
    return next(err);
  }
});

const Waschstrasse = mongoose.model('Waschstrasse', waschstrasseSchema);

module.exports = Waschstrasse;
