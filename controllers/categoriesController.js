import { Op } from 'sequelize';
import Sequelize from 'sequelize';

import { Category } from '../models/index.js';
import { Vacancy } from '../models/Vacancy.js';

export const findAllCategories = async(request, response) => {

    try {

        const categories = await Category.scope('removeExtraData').findAll();
        
        return response.status(200).json({
            'ok': true,
            'msg': 'Categories with more vacancies',
            'categories': categories
        });

    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong'
        });

    }

}

export const findCategoriesWithMoreVacancies = async(request, response) => {

    try {
        
            
        const query = await Vacancy.findAll({
            attributes: ['categoryId'],
            group: ['categoryId'],
            order: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'DESC']],
            limit: 4
        });

        const categoriesId = [];

        query.map((vacancy) => {categoriesId.push(vacancy.dataValues.categoryId)});

        const categories = await Category.findAll({
            where: {
                id: categoriesId
            }
        });
          
        return response.status(200).json({
            'ok': true,
            'categories': categories
        });

    } catch (error) {
        console.log(error);
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong'
        })

    }

}

export const getAllCategories = async(request, response) => {

    try {
        
        const { kword, page } = request.query;
    
        const limit = 6;
        const offset = page*limit;
        
        console.log(kword);
        if(kword.trim() == '' || kword == null){
            const [categories, total] = await Promise.all([
                Category.findAll({
                    limit: limit,
                    offset: offset,
                }),
                Category.count()
            ]);
    
            const totalPages = Math.ceil(total/limit);
    
            return response.status(200).json({
                'ok': true,
                'categories': categories,
                'totalPages': totalPages
            });
        }
    
        const [categories, total] = await Promise.all([
            Category.findAll({
                limit: limit,
                offset: offset,
                where: {
                    [Sequelize.Op.or]: [
                        {
                            name: {
                            [Sequelize.Op.like]: `%${kword}%`
                            }
                        },
                        {
                            description: {
                            [Sequelize.Op.like]: `%${kword}%`
                            }
                        }
                    ]
                }
            }),
            Category.count({
                where: {
                    [Sequelize.Op.or]: [
                        {
                            name: {
                            [Sequelize.Op.like]: `%${kword}%`
                            }
                        },
                        {
                            description: {
                            [Sequelize.Op.like]: `%${kword}%`
                            }
                        }
                    ]
                }
            })
        ]);
    
        const totalPages = Math.ceil(total/limit);
    
        return response.status(200).json({
            'ok': true,
            'categories': categories,
            'totalPages': totalPages
        });

    } catch (error) {
        
        return response.status(200).json({
            'ok': false,
            'msg': 'Something went wrong',
            'error': error.message
        });
    }
}