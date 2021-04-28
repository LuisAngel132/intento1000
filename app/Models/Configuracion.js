
'use strict'

const { incrementing } = require("@adonisjs/lucid/src/Lucid/Model")
const autoIncrement = require('mongoose-auto-increment');
const mongooseLeanGetters = require('mongoose-lean-getters');
const mongoose = use('Mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const Mixed = mongoose.Schema.Types.Mixed

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://admin:admin@cluster0.jaq7d.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  console.log(client.connect)
});

let Configuraciones = mongoose.Schema({
   User_id: { type: Number, default: '' },
   temperatura_ambiente: { type: Number, default: '' },
  configuraciones: [{ type: Mixed, default: {} }],

}, {
  timestamps: true
})

module.exports = mongoose.model('test', Configuraciones)

