const employeService = require('./employe.service');
exports.register = async(req,res)=>{
    try{
        const {body} = req;
        const response = await employeService.register(body);
        res.send("success");
    }catch(err){
        res.send(err);
    }

};