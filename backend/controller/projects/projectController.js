
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

exports.getProjectsasync = async function (criteria) {
    try {
        const projects = await Project.find(criteria);
        return res.status(400).json({
            sucess:true,
            projects
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
}