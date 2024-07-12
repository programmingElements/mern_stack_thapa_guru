import { ApiError } from "../utils/ApiError.js";

const validate = (schema) => async (request, response, next) => {
    try {
        const parseBody = await schema.parseAsync(request.body);
        request.body = parseBody;
        next();
    } catch (error) {
        // response.status(400).json({ msg: error });
        next(new ApiError(400, "zod validation error.", error));
    }
}

export { validate };