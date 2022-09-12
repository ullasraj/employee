const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    const Employe=sequelize.define("Employe",{
        Emp_Id:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        Emp_Name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        Emp_Email : {
            type : DataTypes.STRING,
            allowNull:false
        },
        Emp_Postion : {
            type :DataTypes.STRING,
            allowNull :false
        }
    });
    return Employe;
}