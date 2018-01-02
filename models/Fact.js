var mongoose = require('mongoose');

var FactSchema = new mongoose.Schema({
    frontside: String,
    backside: String,
    creator: String,      
    updated_date: { type: Date, default: Date.now },
    created_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Fact', FactSchema);