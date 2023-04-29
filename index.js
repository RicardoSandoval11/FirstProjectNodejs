import express from "express";

import { db } from "./config/db.js";
import bodyParser from 'body-parser';
import cors from 'cors';

import applicationsRoutes from './routes/applicationsRoutes.js';
import authRoutes from './routes/authenticationRoutes.js';
import categoriesRoutes from './routes/categoriesRoutes.js';
import messagesRoutes from './routes/messagesRoutes.js';
import salariesRoutes from './routes/salariesRoutes.js';
import statusRoutes from './routes/statusRoutes.js';
import userRoutes from './routes/userRoutes.js';
import vacanciesRoutes from './routes/vacanciesRoutes.js';

const app = express();


// Database conection
try {
    await db.authenticate();
    db.sync();
} catch (error) {
    console.log(error);
}

// Enable body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Enable cors
app.use(cors());

// Routes
app.use('/api/applications', applicationsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/salaries', salariesRoutes);
app.use('/api/status/', statusRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vacancies', vacanciesRoutes);

// static files
app.use(express.static('public/uploads'));

app.listen(3000);
