import express from 'express';
import medicalInfoController from '../controllers/medicalinfo.controller.js';
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post('/add-medical-docs',
    verifyJWT,
    upload.fields([
        {
            name: 'medicalDocsFile', // should match the HTML file input name
            maxCount: 1
        },
    ]), medicalInfoController.addMedicalDocs
);
router.get('/get-medical-docs/:petId',
    verifyJWT,
    medicalInfoController.getMedicalDocs
);

export default router;