const uesrmoduie =require('../moduel/Schema.cjs')
 const bcrypt =require('bcrypt')
 const iwt =require('jsonwebtoken')

 exports.register = async function (req,res) {
    try{

      let newUser= new uesrmoduie(req.body)
      const hashpassword =await bcrypt.hash(req.body.password,10)
      newUser.password=hashpassword
       const app= await newUser.save()
       return res.json({massage:"dan",appp:{name:app.name,email:app.email,id:app._id}})
        }catch(err) {
            return res.status(400).send({massge:err})
         }
}

   exports.login=async function (req,res) {
    try{
      const appp=await uesrmoduie.findOne({email:req.body.email})
       if(!appp || !appp.comparepassword(req.body.password)){
        return res.status(401).send({massage:"authntication failed"})
    } 
        const token= iwt.sign({name:appp.name,email:appp.email,id:appp._id , role:appp.role},'key')
        return res.json({massage:"dan",appp:{name:appp.name,email:appp.email,id:appp._id,token:token}})

         
    }catch(err) {
        return res.status(400).send({massge:err})  
    }
}