const mongoose=require('mongoose')
const Schema =mongoose.Schema
const bcrypt =require('bcrypt')
const carsechma = new Schema({
    name:String,
    email:{type:String ,unique:true},
    password:String,
    phone:{type:String ,unique:true},
    role:{type:String, default:"User"}
})

carsechma.methods.comparepassword = async function(password){
 return await bcrypt.compare(password , this.password)
}
module.exports=mongoose.('cars',carsechma )model