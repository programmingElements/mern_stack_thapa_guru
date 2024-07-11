import { User } from "../models/user.models.js";

const signup = async (request, response) => {
    try {
        
        const { username, email, phone, password } = request.body;

        const user = await User.findOne({ $or : [{ username }, { email }]});

        if (user) {
            throw new Error("User Already Exists.");
        }

        const newUser = await User.create({ username, email, phone, password });

        response.status(200).json({ message: 'signup successfully completed.', user: newUser });
    } catch (error) {
        response.status(500).json({err: error.message})
    }
}

const login = async (request, response) => {
    try {
        response.status(200).json({ message: 'Welcome to login page.'});
    } catch (error) {
        console.log(error);
    }
}

export { 
    signup,
    login 
}