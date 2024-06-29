import MedicalInfo from '../models/medicalinfo.model.js';
import { ApiError } from '../utils/ApiError.js';

const createMedicalInfo = async (medicalInfoData) => {
    try {
        const medicalInfo = new MedicalInfo(medicalInfoData);
        if (!medicalInfo) {
            throw new ApiError(404, 'Medical info not found');
        }
        await medicalInfo.save();
        return medicalInfo;
    } catch (error) {
        if (error.message === 'Medical info not found') {
            throw error;
        }
        throw new ApiError(500, 'Failed to create medical info', null, error.errors);
    }
};

const getMedicalInfo = async (id) => {
    try {
        const medicalInfo = await MedicalInfo.findById(id);
        if (!medicalInfo) {
            throw new ApiError(404, 'Medical info not found');
        }
        return medicalInfo;
    } catch (error) {
        if (error.message === 'Medical info not found') {
            throw error;
        }
        throw new ApiError(500, 'Failed to retrieve medical info', null, error.errors);
    }
};

const updateMedicalInfo = async (id, updateData) => {
    try {
        const medicalInfo = await MedicalInfo.findByIdAndUpdate(id, updateData, { new: true });
        if (!medicalInfo) {
            throw new ApiError(404, 'Medical info not found');
        }
        return medicalInfo;
    } catch (error) {
        if (error.message === 'Medical info not found') {
            throw error;
        }
        throw new ApiError(500, 'Failed to update medical info', null, error.errors);
    }
};

const deleteMedicalInfo = async (id) => {
    try {
        const medicalInfo = await MedicalInfo.findByIdAndDelete(id);
        if (!medicalInfo) {
            throw new ApiError(404, 'Medical info not found');
        }
        return medicalInfo;
    } catch (error) {
        if (error.message === 'Medical info not found') {
            throw error;
        }
        throw new ApiError(500, 'Failed to delete medical info', null, error.errors);
    }
};

const medicalInfoRepository = {
    createMedicalInfo,
    getMedicalInfo,
    updateMedicalInfo,
    deleteMedicalInfo
};

export default medicalInfoRepository;
