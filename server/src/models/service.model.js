import mongoose, { Schema } from "mongoose";

// id string
// serviceName string required
// location string required
// contact string required
// capacity number required
// startedAt date required
// endedAt date required
// operatingHours number required
// price number required
// images string[]

const serviceSchema = new Schema(
  {
    serviceName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    startedAt: {
      type: Date,
      required: true,
    },
    endedAt: {
      type: Date,
      required: true,
    },
    operatingHours: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);
export const Service = mongoose.model("Service", serviceSchema);
