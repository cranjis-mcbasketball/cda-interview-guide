const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/ImagesData';
const Images = require('./Images.js')

const db = mongoose.connect(mongoUri, {useUnifiedTopology: true, useNewUrlParser: true},function(err, success) {
  if (err) {
    console.log('error connecting to mongoDB: ', err);
  } else {
    console.log('connected to mongoDB');
  }
});

module.exports = db;


