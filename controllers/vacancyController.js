import  Sequelize  from 'sequelize';

import { Vacancy } from '../models/Vacancy.js';
import { Category } from '../models/Category.js';
import { Salary } from '../models/Salary.js';


export const createVacancy = async(request, response) => {

    const vacancy = new Vacancy(request.body);

    try {

        if(request.file != undefined){
            vacancy.image = request.file.filename;
        }

        vacancy.createdBy = request.user.id;

        vacancy.save();

        return response.status(200).json({
            'ok': true,
            'msg': 'Vacancy has been registered successfully'
        });
        
    } catch (error) {
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong'
        });
    }
    
}

export const updateVacancy = async(request, response) => {

    
    try {

        const oldVacancy = await Vacancy.findByPk(request.params.id);

        if(oldVacancy == null){
            return response.status(400).json({
                'ok': false,
                'msg': 'Vacancy does not exist'
            });
        }

        if(oldVacancy.createdBy != request.user.id){
            return response.status(401).json({
                'ok': false,
                'msg': 'You do not have permissions to edit this register'
            });
        }
        
        if(request.file != undefined){
            oldVacancy.image = request.file.filename;
        }

        const { name, description, details, salaryId, statusId, categoryId } = request.body;

    
        oldVacancy.name = name ?? oldVacancy.name;
        oldVacancy.description = description ?? oldVacancy.description;
        oldVacancy.details = details ?? oldVacancy.details;
        oldVacancy.salaryId = salaryId ?? oldVacancy.salaryId;
        oldVacancy.statusId = statusId ?? oldVacancy.statusId;
        oldVacancy.categoryId = categoryId ?? oldVacancy.categoryId;
    
        await oldVacancy.save();
        
        return response.status(200).json({
            'ok': true,
            'msg': 'Vacancy updated successfully'
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'The vacancy could not be updated'
        });
    }
}

export const removeVacancy = async(request, response) => {

    try {

        const vacancy = await Vacancy.findByPk(request.params.id);

        if(vacancy == null){
            return response.status(400).json({
                'ok': false,
                'msg': 'Vacancy does not exist'
            });
        }

        if(vacancy.createdBy != request.user.id){
            return response.status(401).json({
                'ok': false,
                'msg': 'You do not have permissions to delete this register'
            });
        }

        await vacancy.destroy();

        return response.status(200).json({
            'ok': true,
            'msg': 'Vacancy removed successfully'
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong while trying to remove the vacancy'
        });

    }
}

export const getVacancyDetails = async(request, response) => {

    try {
        
        const vacancy = await Vacancy.findByPk(request.params.id,{
            include: [
                { model: Category, as: 'category' },
                { model: Salary, as: 'salary'}
            ]
        });

        if(vacancy == null){
            return response.status(400).json({
                'ok': false,
                'msg': 'Vacancy does not exist'
            });
        }

        return response.status(200).json({
            'ok': true,
            'msg': 'Vacancy found',
            'vacancy': vacancy
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong'
        });

    }

}

export const MostPopularCategoryVacancies = async(request, response) => {

    try {
        
        const query = await Vacancy.findAll({
            attributes: ['categoryId'],
            group: ['categoryId'],
            order: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'DESC']],
            limit: 2
        });

        const categoriesId = [];

        query.map((vacancy) => {categoriesId.push(vacancy.dataValues.categoryId)});

        const vacancies = await Vacancy.findAll({
            where: {
                categoryId: categoriesId,
                statusId: 1
            },
            limit: 8,
            include: [
                { model: Category, as: 'category' },
                { model: Salary, as: 'salary'}
            ]
        });

        return response.status(200).json({
            'ok': true,
            'msg': 'Vacancies found',
            'vacancies': vacancies
        });

    } catch (error) {
        console.log(error);
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong'
        })

    }
}

export const getMyVacancies = async(request, response) => {

    const { user } = request;

    const { page } = request.query;

    const limit = 6;

    try {
        
        const [myVacancies, total] = await Promise.all([
            Vacancy.findAll({
                where: {
                    createdBy: user.id
                },
                offset: limit*(page !== undefined ? page : 0),
                limit: limit,
                include: [
                    { model: Category, as: 'category' },
                    { model: Salary, as: 'salary'}
                ]
            }),
            Vacancy.count({
                where: {
                    createdBy: user.id
                }
            })
        ]); 

        const totalPages = Math.ceil(total/limit);

        return response.status(200).json({
            'ok': true,
            'vacancies': myVacancies,
            'totalPages': totalPages
        });

    } catch (error) {
        console.log(error);
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong'
        })
    }
}

export const getMostRecentVacanciesAdded = async(request, response) => {
    try {

        const vacancies = await Vacancy.findAll({
            where: {statusId:1},
            order: [['createdAt', 'DESC']],
            limit: 4
        });

        return response.status(200).json({
            'ok': true,
            'vacancies':vacancies
        });
        
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong'
        })
    }
}

export const getAllVacanciesByCategory = async(request, response) => {
    try {
        
        const { categoryId } = request.params;

        const { page } = request.query;

        const limit = 6;
        const offset = limit*page;

        // verify if category exists
        const category = await Category.findByPk(categoryId);

        if(category == null){
            return response.status(404).json({
                'ok': false,
                'msg': 'Category does not exists'
            });
        }

        const [vacancies, total] = await Promise.all([
            Vacancy.findAll({
                where: {
                    categoryId: categoryId,
                    statusId: 1
                },
                limit: limit,
                offset: offset
            }),
            Vacancy.count({
                where: {
                    categoryId: categoryId,
                    statusId: 1
                }
            })
        ]);
        
        const totalPages = Math.ceil(total/limit);

        return response.status(200).json({
            'ok': true,
            'vacancies': vacancies,
            'totalPages': totalPages
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong',
            'error': error.message
        });

    }
}

export const getAllVacancies = async(request, response) => {
    
    const { kword, salaryId, categoryId, page } = request.query;

    const limit = 6;
    const offset = limit*page;

    try {
        
        if(kword != undefined && salaryId == undefined && categoryId == undefined){

            const [vacancies, total] = await Promise.all([
                Vacancy.findAll({
                    where: {
                        [Sequelize.Op.or]:[
                            {
                                name: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                description: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                details: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                }
                            }
                        ],
                        statusId: 1
                    },
                    limit: limit,
                    offset: offset
                }),
                Vacancy.count({
                    where:{
                        [Sequelize.Op.or]:[
                            {
                                name: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                description: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                details: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                }
                            }
                        ],
                        statusId: 1
                    }
                })
            ]);
    
            const totalPages = Math.ceil(total/limit);
    
            return response.status(200).json({
                'ok': true,
                'vacancies': vacancies,
                'totalPages': totalPages
            });
        }
    
        if(salaryId != undefined && kword == undefined && categoryId == undefined){
            const [vacancies, total] = await Promise.all([
                Vacancy.findAll({
                    where: {
                        salaryId: salaryId,
                        statusId: 1
                    },
                    limit: limit,
                    offset: offset
                }),
                Vacancy.count({
                    where:{
                        salaryId: salaryId,
                        statusId: 1
                    }
                })
            ]);
    
            const totalPages = Math.ceil(total/limit);
    
            return response.status(200).json({
                'ok': true,
                'vacancies': vacancies,
                'totalPages': totalPages
            });
        }
    
        if(salaryId == undefined && kword == undefined && categoryId != undefined){
            const [vacancies, total] = await Promise.all([
                Vacancy.findAll({
                    where: {
                        categoryId: categoryId,
                        statusId: 1
                    },
                    limit: limit,
                    offset: offset
                }),
                Vacancy.count({
                    where:{
                        categoryId: categoryId,
                        statusId: 1
                    }
                })
            ]);
    
            const totalPages = Math.ceil(total/limit);
    
            return response.status(200).json({
                'ok': true,
                'vacancies': vacancies,
                'totalPages': totalPages
            });
        }
    
        if(salaryId != undefined && kword == undefined && categoryId != undefined){
            const [vacancies, total] = await Promise.all([
                Vacancy.findAll({
                    where: {
                        categoryId: categoryId,
                        salaryId: salaryId,
                        statusId: 1
                    },
                    limit: limit,
                    offset: offset
                }),
                Vacancy.count({
                    where:{
                        categoryId: categoryId,
                        salaryId: salaryId,
                        statusId: 1
                    }
                })
            ]);
    
            const totalPages = Math.ceil(total/limit);
    
            return response.status(200).json({
                'ok': true,
                'vacancies': vacancies,
                'totalPages': totalPages
            });
        }
    
        if(kword != undefined && salaryId != undefined && categoryId == undefined){
    
            const [vacancies, total] = await Promise.all([
                Vacancy.findAll({
                    where: {
                        [Sequelize.Op.or]:[
                            {
                                name: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                description: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                details: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                }
                            }
                        ],
                        salaryId: salaryId,
                        statusId: 1
                    },
                    limit: limit,
                    offset: offset
                }),
                Vacancy.count({
                    where:{
                        [Sequelize.Op.or]:[
                            {
                                name: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                description: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                details: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                }
                            }
                        ],
                        salaryId: salaryId,
                        statusId: 1
                    }
                })
            ]);
    
            const totalPages = Math.ceil(total/limit);
    
            return response.status(200).json({
                'ok': true,
                'vacancies': vacancies,
                'totalPages': totalPages
            });
        }
    
        if(kword != undefined && salaryId == undefined && categoryId != undefined){
    
            const [vacancies, total] = await Promise.all([
                Vacancy.findAll({
                    where: {
                        [Sequelize.Op.or]:[
                            {
                                name: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                description: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                details: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                }
                            }
                        ],
                        categoryId: categoryId,
                        statusId: 1
                    },
                    limit: limit,
                    offset: offset
                }),
                Vacancy.count({
                    where:{
                        [Sequelize.Op.or]:[
                            {
                                name: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                description: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                details: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                }
                            }
                        ],
                        categoryId: categoryId,
                        statusId: 1
                    }
                })
            ]);
    
            const totalPages = Math.ceil(total/limit);
    
            return response.status(200).json({
                'ok': true,
                'vacancies': vacancies,
                'totalPages': totalPages
            });
        }
    
        if(kword != undefined && salaryId != undefined && categoryId != undefined){
    
            const [vacancies, total] = await Promise.all([
                Vacancy.findAll({
                    where: {
                        [Sequelize.Op.or]:[
                            {
                                name: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                description: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                details: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                }
                            }
                        ],
                        categoryId: categoryId,
                        salaryId: salaryId,
                        statusId: 1
                    },
                    limit: limit,
                    offset: offset
                }),
                Vacancy.count({
                    where:{
                        [Sequelize.Op.or]:[
                            {
                                name: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                description: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                },
                                details: {
                                    [Sequelize.Op.like]: `%${kword}%`
                                }
                            }
                        ],
                        categoryId: categoryId,
                        salaryId: salaryId,
                        statusId: 1
                    }
                })
            ]);
    
            const totalPages = Math.ceil(total/limit);
    
            return response.status(200).json({
                'ok': true,
                'vacancies': vacancies,
                'totalPages': totalPages
            });
        }
        
        if(kword == undefined && salaryId == undefined && categoryId == undefined){
    
            const [vacancies, total] = await Promise.all([
                Vacancy.findAll({
                    where: {
                        statusId: 1
                    },
                    limit: limit,
                    offset: offset
                }),
                Vacancy.count({
                    where:{
                        statusId: 1
                    }
                })
            ]);
    
            const totalPages = Math.ceil(total/limit);
    
            return response.status(200).json({
                'ok': true,
                'vacancies': vacancies,
                'totalPages': totalPages,
                'totalElements': total
            });
        }

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong',
            'error': error.message
        })
    } 

}


