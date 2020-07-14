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
      return res.status(500).json({ errMsg: `${email} already register as student` });
    }
    if (faculty) {
      return res.status(500).json({ errMsg: `${email} already register as faculty` });
    }
    student = new Student({ email, name, role, password });
    await student.save();
    const cypherToken = createToken(student._id, student.role);
    res.status(200).json({ token: cypherToken });
  } catch (err) {
    console.log(err);
    res.status(400).json({ errMsg: 'Student register is not working ' });
  }
};

const studentDashboard = async (req, res) => {
  const student = await Student.findById(req.student._id);
  const { _id, role, name, email } = student;
  res.json({ _id, role, name, email });
};

export default { studentRegister, studentDashboard };
