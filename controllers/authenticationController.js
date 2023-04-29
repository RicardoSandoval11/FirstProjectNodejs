import { activateAccountRegister, recoverPasswordEmail } from '../helpers/emails.js';
import { generateTokenConfirmation, generateAuthToken } from '../helpers/tokens.js';
import {User} from '../models/User.js';
import bcrypt from 'bcrypt';

export const registerUser = async (request, response) => {

    try {

        // Avoid duplicated users
        const userExists = await User.findOne({ where: { email: request.body.email } });

        if(userExists != null){
            return response.status(400).json({
                'ok': false,
                'msg': 'User with this email already exists.'
            });
        }

        // Creating new user
        const newUser = await User.create({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            confirmation_code: generateTokenConfirmation()
        });

        // sending confirm email
        activateAccountRegister(newUser.name, newUser.email, newUser.confirmation_code);
    
        // response
        return response.json({
            ok: true,
            msg: 'The user has been registered successfully'
        });

    } catch (error) {
        console.log(error);
    }

}

export const activateAccount = async(request, response) => {

    // verify if a user with this code exists
    const user = await User.findOne({
        where: {
            confirmation_code: request.body.code
        }
    });

    if(user == null){
        return response.status(400).json({
            'ok': false,
            'msg': 'Code is not correct'
        })
    }

    // activate users account
    user.confirmation_code = null;
    user.enabled = true;
    await user.save();

    return response.status(200).json({
        'ok': true,
        'msg': 'Account Activated Successfully'
    });

}

export const recoverPasswordRequest = async(request, response) => {

    // verify if user with email exists
    const user = await User.findOne({where:{
        email: request.body.email
    }});

    if(user == null){
        return response.status(400).json({
            'ok': false,
            'msg': 'Email does not exist'
        });
    }

    // generate new code
    user.confirmation_code = generateTokenConfirmation();
    await user.save();


    // send email
    try {
        
        recoverPasswordEmail(user.email, user.confirmation_code);

        return response.status(200).json({
            'ok': true,
            'msg': 'Email has been sent to recover your password'
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'An error has occurred trying to send you an email to update your password. Please try again later.'
        });
    }

}

export const validateCode = async(request, response) => {

    // validate code
    const user = await User.findOne({
        where:{
            confirmation_code : request.body.code
        }
    });

    if(user == null){
        return response.status(400).json({
            'ok': false,
            'msg': 'Invalid Code'
        });
    }

    return response.status(200).json({
        'ok': true,
        'msg': 'Code is valid'
    });

}

export const updatePassword = async(request, response) => {

    // find user
    try {
        
        const user = await User.findOne({
            where:{
                confirmation_code : request.body.code
            }
        });
    
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(request.body.newPassword, salt);
    
        user.confirmation_code = null;
    
        await user.save();
    
        return response.status(200).json({
            'ok': true,
            'msg': 'Password Updated Successfully'
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'An error occurred. try later'
        });

    }

}

export const Login = async(request, response) => {


    const { email, password } = request.body;

    const user = await User.findOne({where:{
        email: email
    }});

    // verify user exists

    if(user == null){
        return response.status(400).json({
            'ok': false,
            'msg': 'User does not exist'
        }); 
    }

    // verify account is activated
    if(user.enabled != true){
        return response.status(400).json({
            'ok': false,
            'msg': 'Account is not activated'
        }); 
    }

    // verify password
    if(!user.verifyPassword(password)){
        return response.status(400).json({
            'ok': false,
            'msg': 'Wrong Credentials'
        }); 
    }

    // authenticate user
    const token = generateAuthToken(user.id, user.email);


    return response.status(200).json({
        'ok': true,
        'msg':'User authenticated',
        'token': token
    });
}