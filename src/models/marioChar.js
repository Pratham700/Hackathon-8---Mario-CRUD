const mongoose = require('mongoose');

//  Your code goes here

const marioSchema = new mongoose.Schema({
    name:{
        type:String
        
    },
    weight:{
     type:Number 
     
    }
}) ;

const marioModel = new mongoose.model('mariochar', marioSchema) ;

 
module.exports = marioModel;