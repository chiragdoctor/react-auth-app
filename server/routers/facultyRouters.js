/** @format */

import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	res.status(200).json({ Msg: 'This is test route' });
});

export default router;
