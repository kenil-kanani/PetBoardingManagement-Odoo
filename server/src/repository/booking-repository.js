import mongoose from "mongoose";
import { Booking } from "../models/booking.model.js";
import { ApiError } from "../utils/ApiError.js";

const createBooking = async (booking) => {
  try {
    const newBooking = new Booking(booking);
    await newBooking.save();
    return newPet;
  } catch (error) {
    console.log("createBooking Repo error: ", error.message);
    throw new ApiError(500, "Error while creating booking");
  }
};

const updateBooking = async (bookingId) => {
  try {
    const updatedBooking = await Booking.findById(bookingId);
    if (!updatedBooking) throw new ApiError(400, "Booking not found");
    updateBooking.isCancelled = !updateBooking.isCancelled;
    await updateBooking.save();
    return updatedBooking;
  } catch (error) {
    console.log("updateBooking Repo error: ", error.message);
    throw new ApiError(500, "Error while updating booking");
  }
};

const bookingRepository = {
  createBooking,
  updateBooking,
};

export default bookingRepository;
