import { Sequelize } from "sequelize";

import db from '../config/database.js';


const Articles = db.define('articles',{
    title:{
        type:Sequelize.STRING
    },
    short_desc:{
        type:Sequelize.STRING
    },
    desc:{
        type:Sequelize.TEXT
    },
    category_id:{
        type:Sequelize.INTEGER
    },
    is_visible:{
        type:Sequelize.BOOLEAN
    },
    image:{
        type:Sequelize.STRING
    },

},{
    freezeTableName:true
});

export default Articles;