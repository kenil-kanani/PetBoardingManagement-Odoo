import mongoose, { Schema } from "mongoose";

// serviceType objectId[Service]
// bookedBy objectId[user]
// checkInDate Date required
// checkOutDate Date required
// startedAt Date required
// endedAt Date required
// status string
// additionalMessage string

const bookingSchema = new Schema(
  {
    serviceType: {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
    bookedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    checkInDate: {
      type: Date,
      required: true,
    },
    checkOutDate: {
      type: Date,
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
    status: {
      type: String,
      required: true,
    },
    additionalMessage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
export const Booking = mongoose.model("Booking", bookingSchema);
