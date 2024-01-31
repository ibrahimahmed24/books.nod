const Router = require('express')
const Booksconto=require('../conroor/Booksconto.cjs')
const middlewarar=require('../middlewares/auth.cjs')

const route =Router.Router()


route.post("/api/Books",middlewarar,Booksconto.Addnwebook)
 route.get("/api/Books" ,middlewarar,Booksconto.gitAllbooks)
 route.get("/api/Books/:id " ,middlewarar,Booksconto.gitonebook)
route.put("/api/Books/:id",middlewarar,Booksconto.updatebook)
route.delete("/api/Books/:id",middlewarar,Booksconto.deletebook)


module.exports= route