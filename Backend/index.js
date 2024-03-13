const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')
const userModel = require('./modals/User')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/A")


app.post("/register",(req,res) =>{
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
app.get("/allusers",(req,res)=>{
    userModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(9000, ()=>{
    console.log("server is running")
})
