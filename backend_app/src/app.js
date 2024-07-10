import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.status(200).send('Welcome to world best mern series by chakri');
});

app.get('/register', (request, response) => {
    response.status(200).send('Welcome to registration page');
});

app.use('/api/v1/user', userRouter);

export default app;