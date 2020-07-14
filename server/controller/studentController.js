/** @format */
import Student from '../models/Student';
import Faculty from '../models/Faculty';
import createToken from '../helper/createToken';

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
		const cypherToken = createToken(student._id,student.role)
		res.status(200).json({ token: cypherToken });
	} catch (err) {
		console.log(err);
		res.status(400).json({ errMsg: 'Student register is not working ' });
	}
};

export default { studentRegister };
