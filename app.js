const express= require("express");
const bodyParser= require("body-parser");
const db = require("./models");
const employeRoutes =require("./routes/emp_routes");
const PORT = process.env.PORT || 3000;
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


require("./connection");
app.use("/employe",employeRoutes);
app.listen(PORT,()=>{
        console.log("listerning ");
});