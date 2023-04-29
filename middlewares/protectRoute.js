import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

export const protectRoute = async(request, response, next) => {

    // verify if there is a token
    const { authorization } = request.headers;

    if(authorization == undefined){
        return response.status(401).json({
            'ok': false,
            'msg': 'Credentials were not provided'
        })
    }

    
    // validate token
    try {
        
        const token = authorization.substring(7, authorization.length);

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_PRIVATE_KEY);

        // retrieve user
        const user = await User.scope('removePassword').findByPk(decoded.id);

        if(user != null || user != undefined){

            request.user = user;

        }else{
            return response.status(401).json({
                'ok': false,
                'msg': 'User does not exist'
            });
        }

        return next();

    } catch (error) {
        
        return response.status(401).json({
            'ok': false,
            'msg': 'Invalid Token'
        });

    }

}