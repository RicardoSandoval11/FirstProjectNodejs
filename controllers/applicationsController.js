import { Application } from '../models/Application.js';
import { User } from '../models/User.js';
import { Vacancy } from '../models/Vacancy.js';

export const getApplicationsByVacancy = async(request, response) => {

    try {

        const { page } = request.query;
        const limit = 6;
        const offset = page*limit;

        // verify if the user is the owner of the vacancy
        const vacancy = await Vacancy.findByPk(request.params.vacancyId);

        if(vacancy.createdBy != request.user.id){
            return response.status(401).json({
                'ok': false,
                'msg': 'You do not have permissions to access this resource'
            });
        }
        
        const [applications, total] = await Promise.all([
            Application.findAll({
                where: {
                    vacancyId : request.params.vacancyId
                },
                include: [
                    {model: Vacancy.scope('removeExtraData'), as: 'vacancy'},
                    {model: User.scope('removePassword'), as: 'user'}
                ],
                limit: limit,
                offset: offset,
                order: [['createdAt', 'ASC']]
            }),
            Application.count({
                where: {
                    vacancyId : request.params.vacancyId
                }
            })
        ]) 

        const totalPages = Math.ceil(total/limit);

        return response.status(200).json({
            'ok': true,
            'applications': applications,
            'totalPages': totalPages
        })

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong',
            'error': error
        });

    }
    
}

export const newApplication = async(request, response) => {

    const newApplication = new Application();

    try {

        // verify user has not applied before
        const application = await Application.findOne(
            {
                where:{
                    vacancyId:request.body.vacancyId,
                    candidateId: request.user.id
                }
        });

        if(application != null){
            return response.status(400).json({
                'ok': false,
                'msg': 'You have already applied for this position'
            });
        }
        
        if(request.file != undefined){
            newApplication.userFile = request.file.filename;
        }

        newApplication.candidateId = request.user.id;
        newApplication.vacancyId = request.body.vacancyId;
        newApplication.comment = request.body.comment;

        newApplication.save();

        return response.status(200).json({
            'ok': true,
            'msg': 'Your application for this position has been saved successfully'
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong',
            'error': error
        });

    }
}

export const getApplicationsByUser = async(request, response) => {
    try {

        const { page } = request.query;
        const limit = 6;
        const offset = page*limit;
        
        const [applications, total] = await Promise.all([
            Application.findAll({
                where: {
                    candidateId: request.user.id
                },
                include: [
                    {model: Vacancy.scope('removeExtraData'), as: 'vacancy'},
                    {model: User, as: 'user'}
                ],
                limit: limit,
                offset: offset,
                order: [['createdAt', 'DESC']]
            }),
            Application.count({
                where: {
                    candidateId: request.user.id
                }
            })
        ]);

        const totalPages = Math.ceil(total/limit);

        return response.status(200).json({
            'ok': true,
            'applications':applications,
            'totalPages':totalPages
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong',
            'error': error.message
        });

    }
}

export const deleteApplication = async(request, response) => {

    try {
        // verify the owner of the applications is the same of the user request
        const application = await Application.findByPk(request.params.id);

        if(application == null){
            return response.status(400).json({
                'ok': false,
                'msg': 'Application does not exist'
            }); 
        }

        if(application.candidateId != request.user.id){
            return response.status(401).json({
                'ok': false,
                'msg': 'You do not have permissions to remove this application'
            });
        }

        await application.destroy();

        return response.status(200).json({
            'ok': true,
            'msg': 'Application removed successfully'
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong',
            'error': error
        });

    }
}