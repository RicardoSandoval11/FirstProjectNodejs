import { DataTypes } from 'sequelize';

import { db } from "../config/db.js";

export const Category = db.define('categories',{
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    coverImg: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'default.jpg'
    }
},{
    scopes: {
        removeExtraData: {
            attributes: {
                exclude: ['description', 'coverImg', 'createdAt', 'updatedAt'] 
            }
        }
    }
});

