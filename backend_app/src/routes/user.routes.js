// express.Router

// https://expressjs.com/en/guide/routing.html

import { Router } from "express";
import { login, signup } from "../controllers/user.controllers.js";
import { validate } from "../middlewares/validate.middleware.js";
import { loginSchema, signupSchema } from "../validators/user.validators.js";

const router = Router();

router.route('/signup').post(validate(signupSchema), signup);

router.route('/login').post(validate(loginSchema), login);

export default router;