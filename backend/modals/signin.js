
const bcrypt=require('bcrypt');

module.exports=(sequelize,Sequelize)=>{
       const user_table=sequelize.define(
          "user_table",{
              us_id:{
                  type:Sequelize.INTEGER,
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
              },
              us_name:{
                type: Sequelize.STRING(255),
                allowNull: false,
             },
             us_email:{
                type: Sequelize.STRING(255),
                allowNull: false,
             },
             us_password:{
                type: Sequelize.STRING,
                allowNull: true , 
                set(value) {
                    const hash = bcrypt.hashSync(value, 10);
                    this.setDataValue('password', hash);
                  },     
             },
             time_zone:{
               type: Sequelize.STRING, // Change the data type to STRING
               allowNull: false,
               defaultValue: new Date().toISOString() // Set the default value as current date and time in ISO format
             },
             us_refresh_token: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            us_refresh_token_created_date: {
               type: Sequelize.STRING,
               allowNull: true,
               defaultValue: new Date().toISOString() 
           },
           us_refresh_token_updated_date: {
            type: Sequelize.STRING,
            allowNull: true,
            defaultValue: new Date().toISOString() 
        },
          },
          {
            tableName: "user_table",
            freezeTableName: true,
          }, 
       );
     return user_table;
}