/** @format */

import express from 'express';
import dbController from './controller/dbController';
import config from './config/default';

const app = express();

// Database
dbController();

// Server
const port = config.port;
app.listen(port, () => {
	console.log(`Server is running on the port ${port}.... 🤺 🤺`);
});
