
const Project = require("../../models/projects/projectModle")


exports.createProject = async (req,res)=>{
    console.log("sdasdas")
    try{
        const project = await Project.create(req.body)
        return res.status(400).json({
            sucess:true,
            project
        })
    }catch(err){
       return  res.status(400).json({
            sucess:false,
            message:err.message
        })
    }
}