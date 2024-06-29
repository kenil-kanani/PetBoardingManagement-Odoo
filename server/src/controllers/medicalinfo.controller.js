import medicalInfoServices from '../services/medicalinfo.services';
import { ApiError } from '../utils/ApiError';
import { APIResponse } from '../utils/ApiResponse';
import { uploadOnCloudinary } from '../utils/cloudinary';

const addMedicalDocs = async (req, res) => {
    try {
        const { type } = req.body;
        const { petId } = req.params;

        const medicalInfo = await medicalInfoServices.addMedicalDocs(petId, type);
        return APIResponse.successResponse(res, medicalInfo);
    } catch (error) {

    }
};