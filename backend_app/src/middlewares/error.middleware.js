const errorMiddleware = (err, req, res, next) => {
    return res.status(err.statusCode || err.status || 500).json(err);
}

export { errorMiddleware };