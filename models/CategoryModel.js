import { Sequelize } from "sequelize";

import db from '../config/database.js';

const Categorys = db.define('categorys',{
    title:{
        type:Sequelize.STRING
    },
},{
    freezeTableName:true
});

export default Categorys;