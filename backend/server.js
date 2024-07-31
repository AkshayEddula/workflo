import express from 'express';
import dotenv from 'dotenv'
import { ConnectDatabase } from './connectDatabase/connectDB.js';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'
import taskRoutes from './routes/taskRoutes.js'

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use('/auth/', authRoutes);
app.use('/task/', taskRoutes);

app.listen('5000', () => {
    ConnectDatabase();
    console.log('Server running on port 5000');
})