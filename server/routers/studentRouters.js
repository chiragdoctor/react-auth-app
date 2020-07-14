import { Router } from 'express';
import studentController from '../controller/studentController';
import { registerRules, validate } from '../validator/index';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();
const { studentRegister, studentDashboard } = studentController;

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

/* 
  @ Student Dashboard 
  @ Private Route
  @ /api/student/dashboard 
  GET
*/
router.get('/dashboard', authMiddleware, studentDashboard);

export default router;
