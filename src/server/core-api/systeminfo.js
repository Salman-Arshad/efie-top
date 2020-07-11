const os = require("os")

module.exports = {
    extractSystemInfo:async ()=>{
        let arch = await getSystemArch();
        return {
            Arch:arch
        }
    }
}
getSystemArch = async ()=>{
    return os.arch()
}