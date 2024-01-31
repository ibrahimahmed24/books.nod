const Router = require('express')
const ueoserr =require('../conroor/Ueser1.cjs')


const routee =Router.Router()

routee.post('/api/users/register',ueoserr.register)
routee.post('/api/users/login',ueoserr.login)


module.exports=routee