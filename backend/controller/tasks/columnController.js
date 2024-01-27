
const Column = require("../../models/taskes/columnMoudle")

exports.createNewColumn = async function (req,res){
    try {
        const column = await Column.create(req.body)
        return res.status(200).json({
            sucess:true,
            column
        })
    } catch (error) {
        return res.status(400).json({
            sucess:false,
            message: err.message
        })
    }
}

