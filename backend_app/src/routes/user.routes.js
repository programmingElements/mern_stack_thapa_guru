// express.Router

// https://expressjs.com/en/guide/routing.html

import { Router } from "express";
import { login, signup } from "../controllers/user.controllers.js";

const router = Router();

router.route('/signup').post(signup);

router.route('/login').post(login);

export default router;