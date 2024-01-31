const mongoose=require('mongoose')
const Schema =mongoose.Schema
// const bcrypt =require('bcrypt')
const BookSechma = new Schema({
    name:String,
   author:String,
   descriptin:String,
   price:Number,
})


module.exports=mongoose.model('Books',BookSechma )