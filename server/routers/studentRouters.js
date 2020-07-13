/** @format */

import { Router } from 'express';
import studentController from '../controller/studentController';

const router = Router();
const { studentRegister } = studentController;

router.get('/', (req, res) => {
	res.status(200).json({ Msg: 'This is test route' });
});

/* 
  @ Student Post 
  @ /api/student/register 
  POST
*/
router.post('/register', studentRegister);

export default router;
