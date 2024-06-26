

const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt  = require("jsonwebtoken")
const { restart } = require("nodemon")


const userShema = new mongoose.Schema({
    firstName :{
        type:String,
        trim : true,
        maxLength:32,
        required:[true ,"please add a first name"],
        // unique:true
    },
    lastName : {
        type:String,
        trim : true,
        maxLength:32
    },
    username:{
        type:String,
        trim : true,
        required:[true ,"please add a username"],
        maxLength:32,
        unique:true
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
        
    },
    userRole:{
        type: String,
        default:""
    }
},{timestamps:true})

// TODO create a hashed password  
// userShema.pre("save",async function(next){
//     if(!this.isModified){
//         next()
//     }
//     console.log("passo",this.password)
//     this.password = await bcrypt.hash(this.password.trim(),1)
// })

userShema.methods.checkPassword = async function(reqPassword){

    // TODO check to hashed password after login
    // // Retrieve the stored hashed password from the database
    // const password = this.password;

    // // Trim the password provided during login
    // const trimmedReqPassword = reqPassword.trim();

    // // Compare the trimmed provided password with the stored hashed password
    // const result = await bcrypt.compare(trimmedReqPassword, password);
    // console.log(result)
    // // Return the result of the comparison (true if passwords match, false otherwise)
    // return result;
    let result = false
    if(reqPassword==this.password){
        result= true
        return result
    }
    return result
}


// generate Token after login
userShema.methods.generateToken = function(){
    return jwt.sign({
        user: this
      }, process.env.JWB_SECRET, { expiresIn: 60 * 60 })
}

module.exports = mongoose.model("User",userShema)