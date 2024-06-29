import medicalInfoServices from '../services/medicalinfo.services';
import { ApiError } from '../utils/ApiError';
import { APIResponse } from '../utils/ApiResponse';

const createMedicalInfo = async (req, res, next) => {
    try {
        const {name, medicalHistroy, price} = req.body;
    } catch (error) {

    }
};