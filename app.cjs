
const express = require('express');

const bodyParser = require('body-parser');
 const mongoose= require('mongoose');

const uoseRouter =require('./Roeut/Roeut.cjs')
const booksss =require('./Roeut/Book.cjs')

const carsechma =require('./moduel/Schema.cjs');



const app =express();
app.use(bodyParser.json());



 const url = 'mongodb+srv://ibrahimahmed24:24685@cluster0.wl2t1a8.mongodb.net/ibrahimahmed24?retryWrites=true&w=majority'

const connectdb = async () =>{
   try{
    mongoose.set('strictQuery' ,false)
    mongoose.connect(url)
    console.log("connected  to don")
   } catch(err) {
    console.log("connected  to err")
    process.exit()
    }
}
  connectdb()


 app.use("/" ,uoseRouter)
 app.use("/" ,booksss)


app.listen(5000)
    
