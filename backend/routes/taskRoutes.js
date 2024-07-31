import express from 'express';
import { createTask, getAllTasks } from '../controllers/taskControllers.js';

const router = express.Router();

router.post('/createtask/', createTask);
router.get('/alltasks/:id', getAllTasks);


export default router;