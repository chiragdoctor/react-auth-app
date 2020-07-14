import { Router } from 'express';
import { loginRules, validate } from '../validator';
import userLogin from '../controller/authController';
import authMiddleware from '../middleware/authMiddleware';
import Student from '../models/Student';
import Faculty from '../models/Faculty';

const router = Router();

router.get('/', authMiddleware, async (req, res) => {
  try {
    if (req.student) {
      const student = await Student.findById(req.student._id).select('-hashedPassword');
      return res.json(student);
    } else if (req.faculty) {
      const faculty = await Faculty.findById(req.faculty._id).select('-hashedPassword');
      return res.json(faculty);
    } else {
      return res.status(500).send('Invalid User Role');
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.post('/login', loginRules(), validate, userLogin);

export default router;
