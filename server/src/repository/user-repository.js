import User from '../models/userModel.js';

const createUser = async (email, password, role) => {
    const newUser = new User({ email, password, role });
    await newUser.save();
    return newUser;
};

const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

const userRepository = {
    createUser,
    findUserByEmail
};

export default userRepository;