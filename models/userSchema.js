const mongoose = require("mongoose")

const userSchema= mongoose.Schema({
    name: { 
        type: String,
        required: true 
    },
    email:{
        type: String, 
        required: true 
    },
    profilePicture:{
        type: String,
        default:"https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png",
    },
    password:{
        type :String ,
        required:true
    }
})

const User = mongoose.model("user",userSchema)
module.exports = User