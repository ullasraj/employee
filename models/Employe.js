const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    const Employe=sequelize.define("Employe",{
        emp_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey : true
        },
        emp_name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        emp_email : {
            type : DataTypes.STRING,
            allowNull:false
        },
        emp_postion : {
            type :DataTypes.STRING,
            allowNull :false
        }
    });
    return Employe;
}