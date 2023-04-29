import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

import { Category } from "./Category.js";
import { Salary } from './Salary.js';
import { Status } from "./Status.js";
import { User } from './User.js';

export const Vacancy = db.define('vacancies',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        defaultValue: 'default.jpg'
    },
    details: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    scopes: {
        removeExtraData:{
            attributes: {
                exclude:['details', 'salaryId', 'statusId', 'categoryId', 'createdBy']
            }
        }
    }
});

Vacancy.belongsTo(Salary,{foreignKey: 'salaryId',onDelete: 'SET NULL'});
Vacancy.belongsTo(Status,{foreignKey: 'statusId',onDelete: 'SET NULL'});
Vacancy.belongsTo(Category,{foreignKey: 'categoryId',onDelete: 'CASCADE'});
Vacancy.belongsTo(User, {foreignKey: 'createdBy',onDelete: 'CASCADE'});