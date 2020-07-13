/** @format */
import Student from '../models/Student';
import Faculty from '../models/Faculty';
import { sign } from 'jsonwebtoken';
import config from '../config/default';
import { AES } from 'crypto-js';

// Student Register
const studentRegister = async (req, res) => {
	try {
		const { email, name, role, password } = req.body;
		let student = await Student.findOne({ email });
		const faculty = await Faculty.findOne({ email });

		if (student) {
			return res
				.status(500)
				.json({ errMsg: `${email} already register as student` });
		}
		if (faculty) {
			return res
				.status(500)
				.json({ errMsg: `${email} already register as faculty` });
		}
		student = new Student({ email, name, role, password });
		await student.save();
		const payload = { student: student._id, role: student.role };
		const token = sign(payload, config.JWTKey, { expiresIn: 9999 });
		const cypherToken = AES.encrypt(token, config.CRYPTOKey).toString();
		res.status(200).json({ student });
	} catch (err) {
		console.log(err);
		res.status(400).json({ errMsg: 'Student register is not working ' });
	}
};

export default { studentRegister };
