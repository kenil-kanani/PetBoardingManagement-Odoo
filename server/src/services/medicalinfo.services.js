import medicalInfoRepository from '../repository/medicalinfo.repository.js';
import { ApiError } from '../utils/ApiError.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';

const addMedicalDocs = async (petId, type) => {
    try {
        const docLocalPath = req.files?.medicalDocsFile[0]?.path;
        const docCloudinaryResponse = await uploadOnCloudinary(docLocalPath);
        if (!docCloudinaryResponse) {
            throw new ApiError(400, 'Failed to upload medical docs');
        }
        const url = docCloudinaryResponse.secure_url;
        const fileName = docCloudinaryResponse.original_filename;
        const lastModified = docCloudinaryResponse.last_modified;
        const medicalInfo = await medicalInfoRepository.addMedicalDocs(petId, type, url, fileName, lastModified);
        return medicalInfo;
    } catch (error) {
        if (error.message === 'Failed to upload medical docs') {
            throw error;
        }
        throw new ApiError(500, 'Failed to add medical docs', null, error.errors);
    }
};

const medicalInfoServices = {
    addMedicalDocs
};

export default medicalInfoServices;