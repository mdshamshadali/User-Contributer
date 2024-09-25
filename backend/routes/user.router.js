import express, { Router } from 'express'
import { userRegister } from '../controller/user.controller.js';

const router = Router();

router.post('/sign', userRegister)
router.post('/sign', userRegister)

export {router};
