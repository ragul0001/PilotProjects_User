//Import DataBase Configurations
const  dbConfig=require("../Confi_Api/db.config");
const second_db=require("../Confi_Api/second_db.config")
console.log("Db connnected")
const Sequelize=require("sequelize");

const sequelize1=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
    opertorsAliases:false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
      }
});
const sequelize2=new Sequelize(second_db.DB,second_db.USER,second_db.PASSWORD,{
  host:second_db.HOST,
  dialect:second_db.dialect,
  opertorsAliases:false,
  pool: {
      max:second_db.pool.max,
      min: second_db.pool.min,
      acquire: second_db.pool.acquire,
      idle: second_db.pool.idle
    }
});

const db={};

db.Sequelize = Sequelize;
db.sequelize1 = sequelize1;
db.sequelize2 = sequelize2;

db.signIn=require("./signin")(sequelize1,Sequelize);




module.exports=db;  