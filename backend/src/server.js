import express from 'express';
import dotenv from 'dotenv/config'; 
import cors from 'cors';

import getQuestions from './routes/question.route.js';
import connectDB from './db/dbConnection.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json());    

app.use('/api/questions', getQuestions);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});