const express =require("express");
const router = express.Router();
const db = require("../models");

router.post("/new",(req,res)=>{
    db.Employe.create({
        Emp_Id : req.body.emp_id,
        Emp_Name : req.body.name,
        Emp_Email : req.body.Email,
        Emp_Postion : req.body.Position
    }).then(()=>res.send("inserted"));
})

module.exports= router;