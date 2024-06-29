import medicalInfoRepository from '../repository/medicalinfo.repository.js';
import { ApiError } from '../utils/ApiError.js';

const createMedicalInfo = async (medicalInfo) => {
    try {
        const res = await medicalInfoRepository.createMedicalInfo(medicalInfo);
        if (!res) {
            throw new ApiError(400, 'Medical info not found');
        }
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
        const medicalInfo = await medicalInfoRepository.getMedicalInfo(id);
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
        const medicalInfo = await medicalInfoRepository.updateMedicalInfo(id, updateData);
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
        const medicalInfo = await medicalInfoRepository.deleteMedicalInfo(id);
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

const medicalInfoServices = {
    createMedicalInfo,
    getMedicalInfo,
    updateMedicalInfo,
    deleteMedicalInfo
};

export default medicalInfoServices;