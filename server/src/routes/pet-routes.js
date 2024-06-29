import express from "express";
import petController from "../controllers/pet-controller.js";

const router = express.Router();

router.get("/", petController.getPetsByOwner);
router.get("/get/:petId", petController.getPetById);
router.post("/add", petController.addPet);
router.patch("/update/:petId", petController.updatePet);
router.delete("/delete/:petId", petController.deletePet);

export default router;
