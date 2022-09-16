const db = require('../../models');
const Employe = require('../../models/Employe');

exports.register = async(employe)=>{
   
    const response = await  db.Employe.create(
                            employe
                        );
    return{
        response
    };
};