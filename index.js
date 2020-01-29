const express = require('express')
const setUpDB = require('./config/database')
const router = require('./config/routes')
const port = 3010
const app = express()

app.use(express.json())
app.use('/',router)
setUpDB()

app.get('/', (req,res)=>{
    //res.send('Welcome to Notes-App')
    res.json({
        notice: 'Welcome to Notes App'
    })
})


app.listen(port,()=> {
    console.log('listening on port',port)
})