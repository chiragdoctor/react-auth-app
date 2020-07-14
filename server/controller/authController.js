
import Student from "../models/Student";
import Faculty from "../models/Faculty";
import createToken from "../helper/createToken";

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    const faculty = await Faculty.findOne({ email });
    if (student) {
      const isMatch = student.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({errMsg: 'Invalid Password'})        
      }
      const cypherToken = createToken(student._id, student.role)
      res.status(200).json({token : cypherToken })
    } else {
      
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({errMsg: 'Login server Error '})
  }
  
}

export default userLogin