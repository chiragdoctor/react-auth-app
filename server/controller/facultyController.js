import Student from '../models/Student';
import Faculty from '../models/Faculty';
import createToken from '../helper/createToken';

const facultyRegister = async (req, res) => {
	try {
		const { email, name, role, password } = req.body;
		const student = await Student.findOne({ email });
		let faculty = await Faculty.findOne({ email });

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
    faculty = new Faculty({ email, name, role, password });
    console.log(faculty);
		await faculty.save();
		const cypherToken = createToken(faculty._id, faculty.role);
	 return	res.status(200).json({ token: cypherToken });
	} catch (err) {
		console.log(err);
		res.status(400).json({ errMsg: 'faculty register is not working ' });
	}
};

export { facultyRegister };
