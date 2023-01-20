const dbConfig= require('../config/dbConfig.js');
 const {Sequelize , DataTypes} = require('sequelize');
 const sequelize= new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host: dbConfig.HOST,
        dialect : dbConfig.dialect,
        operatorsAliases: false
    }
 )

 sequelize.authenticate().then(()=>{
    console.log("Connected to database");
 }).catch(err=>{
    console.log("Error :: "+err);
 });

 const db={};

 db.sequelize=Sequelize;
 db.sequelize=sequelize;

 db.course_list=require('./course_list.js')(sequelize,DataTypes);

 db.sequelize.sync({ force : false}).then(()=>{
    console.log("Sync Success!!!");
 });

 module.exports=db;
