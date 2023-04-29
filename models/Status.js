import { DataTypes } from "sequelize";
import { db } from "../config/db.js";

export const Status = db.define('status',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});