
const Project = require("../../models/projects/projectModle")


exports.createProject = async (req,res)=>{
    try{
        const data = await Project.create(req.body)
        return res.status(400).json({
            sucess:true,
            data
        })
    }catch(err){
       return  res.status(400).json({
            sucess:false,
            message:err.message
        })
    }
}

exports.getProjectsasync = async function (criteria) {
    try {
        const data = await Project.find(criteria);
        return data
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
}