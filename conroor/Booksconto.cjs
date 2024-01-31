

const Bookmodel =require('../moduel/Book.cjs')

 

 exports.gitAllbooks = async function(req,res) {
    try{
           const book =await  Bookmodel.find()
           return res.json({massge:'Done' , data:book})
        }catch(err) {
            return res.status(400).send({massge:'err'})
         }
}

exports.gitonebook = async function (req,res) {
    try{
        const book =await Bookmodel.find({_id:req.prams.id})
        if (book.length === 0) {
            return res.json({massge:'book not founed ' , data:[]})
        }else{
            return res.json({massge:'Done and ' , data:book})

        }
        
        }catch(err) {
            return res.status(400).send({massge:'err'})
         }
}
exports.Addnwebook = async function (req,res) {
    try{
        if (req.appp.role === "Admin") {
             const bookcreate =  await  Bookmodel.create(req.body)
         return res.json({massge:'book add succefully ' , data:bookcreate}) 
        }else{
          return res.status(403).send({massge:"you dont have the right permssion" })
}

        
        }catch(err) {
            return res.status(400).send({massge:err})
         }
}
exports.deletebook = async function (req,res) {
    try{
        if (req.appp.role === "Admin") {
            await  Bookmodel.findByIdAndDelete(req.prams.id)
            return res.json({massge:"book and Delete" ,data:[]})
        }else{
            return res.status(403).send({massge:"you dont have the right permssion" })
        }
      
        }catch(err) {
            return res.status(400).send({massge:err })
         }
}
exports.updatebook = async function (req,res) {
    try{
        if (req.appp.role === "Admin") {
            await  Bookmodel.findByIdAndUpdate(req.prams.id ,req.body)
        return res.json({massge:"book and Update" ,data:[]})
      
        }else{
            return res.status(403).send({massge:"you dont have the right permssion" })
  
        }
        }catch(err) {
            return res.status(400).send({massge:err})
         }
}
