import userService from '../services/user-service.js';

const signup = async (req, res) => {
    const { email, password, role } = req.body;
    try {
        await userService.createUser(email, password, role);
        res.status(201).send('User created successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log(email, password);
        const token = await userService.authenticateUser(email, password);
        res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        if (error.message === 'User not found' || error.message === 'Invalid credentials') {
            res.status(404).send(error.message);
        } else {
            res.status(500).send(error.message);
        }
    }
};

const userController = {
    signup,
    login
};

export default userController;