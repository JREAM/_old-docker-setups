'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contentSchema  = new Schema({
  brand_id:{type:Schema.Types.ObjectId},
  url:{required:true,type:String},
  content:String,
  content_id:{type:Schema.Types.ObjectId},
  createdAt: {type: Date},
  updatedAt: {type: Date}
},{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

contentSchema.index({'brandId':-1, 'url': 1});



module.exports = mongoose.model('Content', contentSchema);
