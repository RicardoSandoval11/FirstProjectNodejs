import { Salary } from '../models/Salary.js';


export const getAllSalaries = async(request, response) => {

    try {

        const salaries = await Salary.findAll();

        return response.status(200).json({
            'ok': true,
            'msg': 'Salaries found',
            'salaries': salaries
        })
        
    } catch (error) {
        
        return response.status(500).json({
            'ok': false,
            'msg': 'Something went wrong'
        })
    }
    

     
}