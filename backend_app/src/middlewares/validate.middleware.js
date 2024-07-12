const validate = (schema) => async (request, response, next) => {
    try {
        const parseBody = await schema.parseAsync(request.body);
        request.body = parseBody;
        next();
    } catch (error) {
        // response.status(400).json({ msg: error });
        next(error);
    }
}

export { validate };