import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

export const Salary = db.define('salaries',{
    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
});