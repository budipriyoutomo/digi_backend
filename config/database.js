import sequelize from "sequelize";

const db = new sequelize('db_digilab','root','',{
    host:"localhost",
    dialect:"mysql"
});

export default db;

