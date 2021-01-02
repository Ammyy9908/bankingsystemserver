const express = require('express')
const mongoose = require('mongoose')

const Customer = require('./models/Customers')

const app = express()

// Middleware 

app.use(express.json())

const port = process.env.PORT || 5000;
// routings

app.get('/',async (req,res) => {
    res.status(200).send("Hello World!");
})

app.get('/users',async (req,res) => {
    const users = await Customer.find();
    res.status(200).send(users);
})

app.get('/user/:userid',async (req,res) => {
    const uid = req.params.userid;
    const user = await Customer.find({_id:uid})
    res.status(200).send(user)
})

app.post('/user/new',async (req,res)=>{
    res.status("Testing")
    const first_name = "Shravan"
    const last_name = "N."
    const balance = 110000
    const newCustomer = new Customer({
        first_name,
        last_name,
        balance,
    })

    newCustomer.save()
    .then(()=>{
        console.log("Data Added succcesfully")
    })
    .catch((err)=>{
        console.log(err.message)
    })
})

app.put('/user/:userid',async (req,res) => {
    

})

app.delete('/user/:userid',async (req,res) => {


})



//  CRUD
//  POST GET PUT DELETE

app.listen(port,()=>{
    mongoose.connect('mongodb+srv://sameer:SAm33r1998@cluster0.qsplw.mongodb.net/BankingSystem',{ useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>{
        console.log(`Database connected and server running on ${port}`)
    })
    .catch((err)=>{
        console.log(err.message)
    })
})