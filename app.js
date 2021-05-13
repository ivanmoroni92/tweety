const express = require("express");
const app = express();    /// crear el server ///     //killall -p node
const morgan = require('morgan'); 
const fs= require('fs')
const path = require('path')
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))     // guarda todo req  login acces.log
app.use(morgan('tiny')) 

const loggin = (req,res,next) => {
    console.log(`${req.method} ${req.url}`)   
     next()
}

const loggin2 = (req,res,next) =>{  
    console.log("entraste")
    next()

}


app.use(loggin)
// use loggin2 cuando entre a /special
app.use('/special',loggin2)




app.listen(4000, function(){                                 //levantar el server               
    console.log('listening on http://localhost:4000')
});


