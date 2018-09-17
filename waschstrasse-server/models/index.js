const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/waschstrassedb', { useNewUrlParser: true });

module.exports.Firma = require('./firma.js');
module.exports.Waschstrasse = require('./waschstrasse.js');
