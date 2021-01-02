const {model,Schema} = require('mongoose')

const CustomerSchema = new Schema({
    first_name:{
        type: String,
        
    },
    last_name:{
        type: String,
    },
    balance:{
        type: Number,

    },

})

const Customer = model('customer',CustomerSchema)


module.exports = Customer;