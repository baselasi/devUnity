
const {createProject,getProjectsasync} = require("../../controller/projects/projectController")
const express = require("express")



const router = express.Router()

router.post("/project",createProject)
router.get("/project",async (req,res)=>{
    const criteria = req.query.criteria ? JSON.parse(req.query.criteria) : {};
    try{
        const data = await getProjectsasync(criteria)
        res.status(200).json({
            sucess:true,
            data
        })
    }catch(err){
        res.status(400).json({
            sucess:false,
            message: err.message
        })
    }
})
module.exports = router
