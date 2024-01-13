const User = require("../models/users")


exports.signUp = async (req, res, next) => {
    console.log(req)
    const { email } = req.body
    const userExist = await User.findOne({ email })
    debugger
    if (userExist) {
        return res.status(400).json({
            sucess: false,
            message: "eamil already exist"
        })
    }
    try {
        const user = await User.create(req.body)
        const id = user._id
        console.log("user",user._id)
        res.status(200).json({
            sucess: true,
            id
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
        return res.status(200).json({
            sucess: true,
            token
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