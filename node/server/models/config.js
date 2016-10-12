'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let configSchema  = new Schema({
  siteHost:{
    type:String,
    required:true
  },
  apiHost:{
    type:String,
    required:true
  },
  apiGateway:{
    url:String,
    ws:String,
    host:String,
    port:Number,
    secure:Boolean,
    apiVersion:String
  },
  app:{
    key:String,
    secret:String
  },
  client:{
    name:String,
    brandId:Schema.Types.ObjectId,
    siteURL:String,
    apiURL:String,
    assetsURL:String,
    scriptsURL:String,
    styleSheet:String,
    favicon:String,
    debug:Boolean,
    promotions:[{
        classes : String,
        routerLink : String,
        sequence : Number,
        imageURL : String
    }]
  },
  metaTags:[{
    name:String,
    content:String
  }]
},{
  toJSON: {virtuals: true},
  toObject: {virtuals: true}
});

configSchema.index({'siteHost': 1});
configSchema.index({'apiHost': 1});


module.exports = mongoose.model('Config', configSchema);
