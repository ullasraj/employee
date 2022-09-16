const express= require("express");
const bodyParser= require("body-parser");
const db = require("./models");
const routes =require("./routes");
const PORT = process.env.PORT || 3000;
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());



app.use("/api",routes);
app.listen(PORT,()=>{
        console.log("listerning ");
});