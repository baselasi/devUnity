const { token } = require("morgan");
const User = require("../models/users");
const invitation = process.env.INVITATION_CODE
// const validationCode = [{code:"DAWDAW", signUpCount:1},{code:"FWFAFWFA",signUpCount: 5}]
require('dotenv').config();


exports.checkUser = async (req, res, next) => {
    const { email } = req.body
    const userExist = await User.findOne({ email }) //check if email already exist
    if (userExist) {
        return res.status(400).json({
            sucess: false,
            message: "email already exist"
        })
    }
    try {
        const mangerCount = await User.countDocuments({ userRole: "1" })
        console.log(req.body.invitationCode)
        const teamMeamberCount = await User.countDocuments({ userRole: "3" })
        if (req.body.invitationCode == process.env.PROJECT_MANGER_CODE && mangerCount == 0) { //cheack if code is a amnger code and there is users with manger code in db
            req.body.userRole = "1"  //passing role value in the req for the next middleware 
            next()
        } else if (req.body.invitationCode == process.env.TEAM_MEMBER_CODE && teamMeamberCount < 6) {//same but for team memebr
            req.body.userRole = "3"
            next()
        } else {
            return res.status(400).json({
                sucess: false,
                message: "please enter a valid code"
            })
        }
    } catch (err) {
        return res.status(400).json({
            sucess: false,
            message: "somthing went wrong"
        })
    }
}


exports.signUp = async (req, res, next) => {
    const { email } = req.body
    const userExist = await User.findOne({ email })
    if (userExist) {
        return res.status(400).json({
            sucess: false,
            message: "eamil already exist"
        })
    }
    try {
        let user = await User.create(req.body)
        user.userRole = req.body.userRole
        const id = user._id
        user = await user.save()   //make sure the the updatede made on the default falue stay the same
        res.status(200).json({
            sucess: true,
            user
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            sucess: false,
            message: err.message
        })
    }
}



exports.singIn = async function (req, res) {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                sucess: false,
                message: "email and password camp are requierd"
            })
        }
        debugger
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                sucess: false,
                message: "email is not valid"
            })
        }
        const isValidPassword = await user.checkPassword(password)
        if (!isValidPassword) {
            return res.status(400).json({
                sucess: false,
                message: "not valid passowrd"
            })
        }
        const token = user.generateToken()
        const data = { token, user }
        return res.status(200).json({
            sucess: true,
            data
        })
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({
            sucess: false,
            message: err.message
        })
    }
}

const handelToken = async (user, status, res) => {
    const token = await user.generateToken()
}   