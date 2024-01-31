const iwt =require('jsonwebtoken')



const newLocal = module.exports = (req, res, next) => {
    try {
        const fulltoken =req.headers.authorization
        const token =fulltoken?.split()[1]
        if(!token) return res.status(403).send('access denied')
        let user=  iwt.verify(token,'key')
       req.appp =user
        next()
    } catch (err) {
        return res.status(400).send('invalid jwt')
    }
}