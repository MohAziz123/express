const express = require('express')
const app = express()
const port = 5000
const MiddleWare=(req,res,next)=>{
    const date = new Date()
    const Hours = date.getHours()
    const days = date.getDay()
  
    if(days == 0 || days == 6 || Hours>17 || Hours<9){
        return res.send('not working days and hours')
        
    }
    next()
}

app.get('/',MiddleWare,(req,res)=>{
    res.sendFile(__dirname+"/public/Homepage.html")
})
app.get('/OurServices',(req,res)=>{
    res.sendFile(__dirname+"/public/OurServices.html")
})

app.get('/Contact' , (req,res)=>{
    res.sendFile(__dirname+"/public/Contact.html")

})

app.get('/css.css' , (req,res)=>{
    res.sendFile(__dirname+"/public/css.css")
})

app.listen(port,console.log(`server is runnig on ${port}`))