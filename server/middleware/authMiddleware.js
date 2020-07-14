import { AES, enc } from 'crypto-js';
import { verify } from 'jsonwebtoken';

import config from '../config/default';

export default async function authMiddleware(req, res, next) {
  const bearer = req.header('Authorization').split(' ');
  const origToken = bearer[1];

  if (!origToken) {
    return res.status(401).json({ errMsg: 'You are not register user' });
  }
  try {
    const token = await AES.decrypt(origToken, config.CRYPTOKey).toString(enc.Utf8);
    const decoded = await verify(token, config.JWTKey);
    if (decoded.role === 'student') {
      req.student = decoded;
    } else {
      req.faculty = decoded;
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errMsg: 'Token is not valid and login again' });
  }
}
