import express from 'express';
import {  getSignUpDetails, getLoginDetails } from '../controllers/authControllers.js'

const router = express.Router();

router.post('/login', getLoginDetails);
router.post('/signup', getSignUpDetails);


export default router;