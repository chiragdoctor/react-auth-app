import { AES, enc } from 'crypto-js';
import { verify } from 'jsonwebtoken';

import config from '../config/default';

export default async function authMiddleware(req, res, next) {
	const bearer = req.header('Authorization').split(' ');
	const token = bearer[1];
	if (!token) {
		return res.status(401).json({ errMsg: 'You are not register user' });
	}
	try {
		const token = await AES.decrypt(token, config.CRYPTOKey).toString(enc.Utf8);
		const decoded = await verify(token, config.JWTKey);
		req.user = decoded;
		next();
	} catch (err) {
		console.log(err);
		return res
			.status(500)
			.json({ errMsg: 'Token is not valid and login again' });
	}
}
