import mongoose, { Schema } from "mongoose";

// id string pk
// name string required
// medicalHistory string[]
// vaccinationRecords string[]
// allergies string[]
// CurrentMedications string[]
// veterinarianContact string
// dietaryPreferences string[] required
// medicalDocsFile string[]
// petId objectId[Pet]

const medicalInfoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    medicalHistory: {
      type: [String],
      required: false,
    },
    vaccinationRecords: {
      type: [String],
      required: false,
    },
    allergies: {
      type: [String],
      required: false,
    },
    currentMedications: {
      type: [string],
      required: false,
    },
    veterinarianContact: {
      type: String,
      required: false,
    },
    dietaryPreferences: {
      type: [String],
      required: true,
    },
    medicalDocsFile: {
      type: [String],
      required: false,
    },
    petId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
export const MedicalInfo = mongoose.model("MedicalInfo", medicalInfoSchema);
