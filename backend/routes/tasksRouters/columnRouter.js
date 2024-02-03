

const {createNewColumn, getColumn} = require("../../controller/tasks/columnController")
const express = require("express")

const router = express.Router()

router.post("/column",createNewColumn)
router.get("/column",async (req,res)=>{
    const criteria = req.query.criteria ? JSON.parse(req.query.criteria) : {};
    try{
        const data = await getColumn(criteria)
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