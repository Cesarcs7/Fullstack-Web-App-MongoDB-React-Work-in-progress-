const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const firmaSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firmaName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImageUrl: {
    type: String,
  },
  waschstrassen: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Waschstrasse',
  }]
});

firmaSchema.pre('save', async function saving(next) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

firmaSchema.methods.comparePassword = async function compare(candidatePassword, next) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    return next(err);
  }
};

const Firma = mongoose.model('Firma', firmaSchema);

module.exports = Firma;
