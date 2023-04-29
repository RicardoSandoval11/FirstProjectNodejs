import { DataTypes } from "sequelize";
import { db } from "../config/db.js";
import { User } from "./User.js";

export const Message = db.define('messages',{
    message: {
        type: DataTypes.TEXT
    }
});

Message.belongsTo(User,{foreignKey: 'senderId', onDelete: 'CASCADE'});
Message.belongsTo(User,{foreignKey: 'receiverId', onDelete: 'CASCADE'});

