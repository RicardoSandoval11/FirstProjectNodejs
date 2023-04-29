import sequelize from 'sequelize';
import { db } from '../config/db.js';
import { User } from './User.js';

export const Conversation = db.define('conversations',{});


Conversation.belongsTo(User,{foreignKey: 'user1', onDelete: 'CASCADE', as:'user1User'});
Conversation.belongsTo(User,{foreignKey: 'user2', onDelete: 'CASCADE', as:'user2User'});