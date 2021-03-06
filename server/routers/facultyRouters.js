import { Router } from 'express';
import { registerRules, validate } from '../validator';
import { facultyRegister, facultyDashboard } from '../controller/facultyController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({ Msg: 'This is test route' });
});

/* 
	@ Faculty Post 
	@ Public Route
	@ /api/faculty/register
	POST
*/
router.post('/register', registerRules(), validate, facultyRegister);

router.get('/dashboard', authMiddleware, facultyDashboard);

export default router;
