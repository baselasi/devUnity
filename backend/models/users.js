

const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt  = require("jsonwebtoken")


const userShema = new mongoose.Schema({
    name :{
        type:String,
        trim : true,
        required:[true,"please add a name"],
        maxLength:32
    },
    email:{
        type:String,
        trim:true,
        required:[true ,"please add a email adress"],
        unique:true,
    },
    password:{
        type:String,
        trim:true,
        required:[true ,"please add a email adress"],
        minLenght:[6,"passowrd must have 6 charecters"],
        unique:true,
    },
    role:{
        type: Number,
        default:0
    }
},{timestamps:true})


userShema.pre("save",async function(next){
    if(!this.isModified){
        next()
    }
    this.password = await bcrypt.hash(this.password,10)
})

userShema.methods.checkPassword = async function(reqPassword){
    const resualt = await bcrypt.compare(reqPassword,this.password)
    return resualt
}

userShema.methods.generateToken = function(){
    console.log(process.env.JWB_SECRET)
    return jwt.sign({
        id: this.id
      }, process.env.JWB_SECRET, { expiresIn: 60 * 60 })
}

module.exports = mongoose.model("User",userShema)