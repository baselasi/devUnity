

const jwt  = require("jsonwebtoken")


exports.checkAuthentication =  (req,res,next)=>{
    debugger
    const token = req.headers.token
    jwt.verify(token,process.env.JWB_SECRET,(err,user)=>{
        if(err){
            console.log(err)
            return  res.status(401).json({
                sucess:false,
                message:"Unauthorized"
            })
        }else{
            req.user = user
            next()
        }
    })
}

