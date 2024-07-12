import { User } from "../models/user.models.js";
import {asyncHandler} from "../utils/asynHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js";

const signup = asyncHandler(async (request, response) => {
    try {
        
        const { username, email, phone, password } = request.body;

        const user = await User.findOne({ $or : [{ username }, { email }]});

        if (user) {
            throw new ApiError(400, "User Already Exists.");
        }

        const newUser = await User.create({ username, email, phone, password });

        return response.status(200).json(new ApiResponse(201, newUser, "signup completed successfully."));

    } catch (error) {
        return response.status(error.statusCode || 500).json(error);
    }
})

const login = async (request, response) => {
    try {
        const {email, password} = request.body;

        const user = await User.findOne({ email });

        if (!user) {
            throw new ApiError(400, "Invalid Credentials.");
        }

        const passwordCorrect = await user.isPasswordCorrect(password);

        if (!passwordCorrect) {
            throw new ApiError(401, "Invalid Credentials.");
        }

        const access_token = user.generateAccessToken();

        return response.status(200).json(new ApiResponse(200, {user, access_token}, "signin completed successfully."));
    } catch (error) {
        return response.status(error.statusCode || 500).json(error);
    }
}

export { 
    signup,
    login 
}