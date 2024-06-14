const express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var preferencemodel= new Schema({
    name:{
        type:String,
        required:true
    },
    courseOnMorning:{
        type:Number,
        required:true
    },
    courseOnEvening:{
        type:Number,
        required:true
    },
      havingDayOff:{
        type:String,
        required:true
    },
     preferredNumberOfHour:{
        type:String,
        required:true
    }

});
module.exports=mongoose.model('preferences',preferencemodel);  //Employee is the collection name in the