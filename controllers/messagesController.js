import  Sequelize  from 'sequelize';
import { Conversation } from '../models/Conversation.js';
import { Message } from '../models/index.js';
import { User } from '../models/User.js';


export const displayConversationsByUser = async(request, response) => {
    try {

        const { page } = request.query;
        const limit = 6;
        const offset = limit*page;
        
        const [conversations, totalConversations] = await Promise.all([
            Conversation.findAll({
                where: {
                    [Sequelize.Op.or]: [
                        {user1: request.user.id},
                        {user2: request.user.id}
                    ]
                },
                order: [['updatedAt', 'DESC']],
                include: [
                    {model: User.scope('removePassword'), as: 'user1User'},
                    {model: User.scope('removePassword'), as: 'user2User'}
                ],
                limit: limit,
                offset: offset
            }),
            Conversation.count({
                where: {
                    [Sequelize.Op.or]: [
                        {user1: request.user.id},
                        {user2: request.user.id}
                    ]
                }
            }),
        ]);

        const totalPages = Math.ceil(totalConversations/limit);

        return response.status(200).json({
            'ok': true,
            'conversations': conversations,
            'totalPages': totalPages,
            'totalConversations': totalConversations
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong',
            'error': error.message
        });

    }
}

export const startConversation = async(request, response) => {

    try {

        // message content
        const { message, receiverId } = request.body;

        if(receiverId == request.user.id){
            return response.status(400).json({
                'ok': false,
                'msg': 'Users cannot send messages to themselves',
            });
        }
        
        const newConversation = new Conversation();

        // verify if there is a conversation between the users
        const conversation = await Conversation.findOne({
            where:{
                user1: request.user.id,
                user2: receiverId,
            }
        });

        if(conversation == null){
            
            // create a new conversation
            newConversation.user1 = request.user.id;
            newConversation.user2 = receiverId;

            await newConversation.save();

            // add message to the conversation
            const newMessage = new Message();

            newMessage.message = message;
            newMessage.senderId = request.user.id;
            newMessage.receiverId = receiverId;
            newMessage.conversationId = newConversation.id;

            // save
            await newMessage.save();

            return response.status(201).json({
                'ok': true,
                'msg': 'Message saved successfully'
            });

        }else{
            // add message to the conversation
            const newMessage = new Message();
    
            newMessage.message = message;
            newMessage.senderId = request.user.id;
            newMessage.receiverId = receiverId;
            newMessage.conversationId = conversation.id;

            // update conversation
            await conversation.save();
    
            // save
            await newMessage.save();
    
            return response.status(201).json({
                'ok': true,
                'msg': 'Message saved successfully'
            });
        }

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong',
            'error': error.message
        });
    }
} 

export const replyMessages = async(request, response) => {

    try {
        
        const { message, receiverId } = request.body;

        if(receiverId == request.user.id){
            return response.status(400).json({
                'ok': false,
                'msg': 'Users cannot send messages to themselves',
            });
        }

        // new message instance
        const newMessage = new Message();

        // find the conversation
        const [conversation1, conversatio2] = await Promise.all([
            Conversation.findOne({
                where: {
                    user1: request.user.id,
                    user2: receiverId
                }
            }),
            Conversation.findOne({
                where: {
                    user1: receiverId,
                    user2: request.user.id
                }
            })
        ]);

        newMessage.message = message;
        newMessage.senderId = request.user.id;
        newMessage.receiverId = receiverId;

        if(conversation1 == null && conversatio2 != null){
            newMessage.conversationId = conversatio2.id;
            await conversatio2.save();
        }else{
            newMessage.conversationId = conversation1.id;
            await conversation1.save();
        }

        // save message
        await newMessage.save();

        return response.status(201).json({
            'ok': true,
            'msg': 'Message saved',
            'message': newMessage
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong',
            'error': error.message
        });

    }
}

export const displayConversationMessages = async(request, response) => {

    try {

        const { page } = request.query;

        const limit = 6;
        const offset = limit*page;
        
        const { conversationId } = request.params;

        const [messages, totalMessages, conversation] = await Promise.all([
            Message.findAll({
                where: {
                    conversationId: conversationId
                },
                include: [
                    {model: User.scope('removePassword')}
                ],
                limit: limit,
                offset: offset,
                order: [['createdAt', 'DESC']]
            }),
            Message.count({
                where: {
                    conversationId: conversationId
                }
            }),
            Conversation.findByPk(conversationId)
        ]);

        // verify the user can access the conversation
        if(conversation.user1 != request.user.id && conversation.user2 != request.user.id){

            return response.status(401).json({
                'ok': false,
                'msg': 'You cannot access to this resource',
            });

        }
        
        const totalPages = Math.ceil(totalMessages/limit);

        return response.status(200).json({
            'ok': true,
            'messages': messages,
            'totalPages': totalPages,
            'totalMessages': totalMessages
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong',
            'error': error.message
        });

    }
}