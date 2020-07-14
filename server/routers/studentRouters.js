import { Router } from 'express';
import studentController from '../controller/studentController';
import { registerRules, validate } from '../validator/index';

const router = Router();
const { studentRegister } = studentController;

router.get('/', (req, res) => {
	res.status(200).json({ Msg: 'This is test route' });
});

/* 
  @ Student Post 
  @ Public Route
  @ /api/student/register 
  POST
*/
router.post('/register', registerRules(), validate, studentRegister);



export default router;
