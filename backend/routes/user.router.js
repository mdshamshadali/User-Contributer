import express, { Router } from 'express'
import { userRegister } from '../controller/user.controller.js';

const router = Router();

router.route("/sign").post(userRegister)

export default router;
