/** @format */

import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import dbController from './controller/dbController';
import config from './config/default';
import studentRoutes from './routers/studentRouters';
import facultyRoutes from './routers/facultyRouters';

const app = express();

// Database
dbController();

// Middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/student', studentRoutes);
app.use('/api/faculty', facultyRoutes);

// Server
const port = config.port;
app.listen(port, () => {
	console.log(`Server is running on the port ${port}.... 🤺 🤺`);
});
