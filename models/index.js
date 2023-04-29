import { Category } from "./Category.js";
import { Conversation } from "./Conversation.js";
import { Message } from './Message.js';
import { Vacancy } from "./Vacancy.js";

Category.hasMany(Vacancy, { foreignKey: 'categoryId' });
Message.belongsTo(Conversation, { foreignKey: 'conversationId', onDelete: 'CASCADE' });
Conversation.hasMany(Message, {foreignKey: 'conversationId'});

export {
    Category,
    Message,
    Conversation
}