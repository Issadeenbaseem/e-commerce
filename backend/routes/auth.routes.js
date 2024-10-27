import express from 'express'
import { login, logout, register } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/signUp',register);
router.get('/signIn',login);
router.get('/logout',logout);

export default router