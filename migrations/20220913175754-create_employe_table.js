'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("employes",{
      Emp_Id:{
        type: Sequelize.INTEGER(11),
        allowNull:false,
        primaryKey : true
      },
      Emp_Name : {
        type : Sequelize.STRING,
        allowNull : false
      },
      Emp_Email : {
        type : Sequelize.STRING,
        allowNull:false
      },
      Emp_Postion : {
        type :Sequelize.STRING,
        allowNull :false
      },
      createdAt :Sequelize.DATE,
      updatedAt:Sequelize.DATE,
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("employes");
  }
};
