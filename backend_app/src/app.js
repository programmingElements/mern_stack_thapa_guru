import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";

const app = express();

// configure dotenv
dotenv.config({
    path: "./.env"
});


// builtin middlewares
app.use(express.json());

// health check
app.get('/', (request, response) => {
    response.status(200).send('Welcome to world best mern series by chakri');
});

// user routes
app.use('/api/v1/user', userRouter);

export default app;