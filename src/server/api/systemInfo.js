const {extractSystemInfo} = require("../zAcore-api/systeminfo")
module.exports ={
    getSystemInfo:async (req,res)=>{
        await extractSystemInfo
    }
}