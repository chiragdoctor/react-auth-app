import { Router } from 'express';
import { loginRules, validate } from '../validator';
import userLogin from '../controller/authController';


const router = Router()

router.post('/', loginRules(), validate,userLogin)

export default router