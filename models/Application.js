import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

import { User } from './User.js';
import { Vacancy } from "./Vacancy.js";

export const Application = db.define('applications',{
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    updatedAt:{
        type: DataTypes.DATE,
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    userFile: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


Application.belongsTo(Vacancy,{foreignKey:'vacancyId',onDelete:'CASCADE'});
Application.belongsTo(User, {foreignKey: 'candidateId',onDelete:'CASCADE'});
