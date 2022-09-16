// const express =require("express");
// const router = express.Router();
// const db = require("../models");

// router.post("/new",(req,res)=>{
//     db.Employe.findOne({
//         where : { Emp_id:req.body.emp_id},
//     }).then(
//         (employe)=>{
//             if(!employe)
//             {
//                 db.Employe.create({
//                     Emp_Id : req.body.emp_id,
//                     Emp_Name : req.body.name,
//                     Emp_Email : req.body.Email,
//                     Emp_Postion : req.body.Position
//                 }).then(()=>res.send("inserted successfully").status(200));
//             }
//             else
//             {
//                 res.send("user_id already exist").status(409);
//             }
            
//         })
    
// })

// module.exports= router;