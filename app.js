const express= require("express");
const bodyParser= require("body-parser");
const db = require("./models");
const PORT = process.env.PORT || 3000;
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const employeRoutes =require("./routes/emp_routes");
app.use("/employe",employeRoutes);

db.sequelize.sync().then(()=>{
    app.listen(PORT,()=>{
        console.log("listerning ");
    });
});

