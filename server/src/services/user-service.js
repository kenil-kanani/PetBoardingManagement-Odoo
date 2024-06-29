import userRepository from '../repository/user-repository.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createUser = async (email, password, role) => {
    return await userRepository.createUser(email, password, role);
};

const authenticateUser = async (email, password) => {
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }

    console.log(user.password);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
    return token;
};

const userService = {
    createUser,
    authenticateUser
};

export default userService;
