import { Status } from '../models/Status.js';

export const getAllStatus = async(request, response) => {

    try {
        
        const status = await Status.findAll();

        return response.status(200).json({
            'ok': true,
            'msg': 'status found',
            'status': status
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong'
        });

    }

}