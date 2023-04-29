import { User } from '../models/User.js';

export const showMyInformation = async(request, response) => {
    const { user } = request;

    try {
        
        const userDetails = await User.scope('removePassword').findByPk(user.id);

        return response.status(200).json({
            'ok': true,
            'user': userDetails
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong'
        });

    }

}

export const updateMyInformation = async(request, response) => {

    
    try {

        const userCurrentInfo = await User.findByPk(request.user.id);

        if(userCurrentInfo == null){
            return response.status(400).json({
                'ok': false,
                'msg': 'User does not exist'
            });
        }
        
        if(request.file != undefined){
            userCurrentInfo.photo = request.file.filename;
        }

        const { name, email, description } = request.body;

        // verify the new email is not in use yet
        if(email != undefined && email != request.user.email){
            const user = await User.findOne({where:{email:email}});
            if(user != null){
                return response.status(400).json({
                    'ok': false,
                    'msg': 'The email is already in use'
                });
            }
        }
    
        userCurrentInfo.name = name ?? userCurrentInfo.name;
        userCurrentInfo.email = email ?? userCurrentInfo.email;
        userCurrentInfo.description = description ?? userCurrentInfo.description;
    
        await userCurrentInfo.save();
        
        return response.status(200).json({
            'ok': true,
            'msg': 'Information updated successfully'
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Information could not be updated'
        });
    }
}