const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userModelSchema = new Schema({
    username:{
        type: String,
        required: true 
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamps: true,
    collection: "users"
})

module.exports = mongoose.model('User', userModelSchema);
