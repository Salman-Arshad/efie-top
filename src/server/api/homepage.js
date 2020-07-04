const redisClient = require("../utils/redis-client")
module.exports = {
    homepage:async (req,res)=>{
        res.json({
            status:"200 OK",
            message:"hello world2",
            cc:await redisClient.get("cc")
        })

    }
}