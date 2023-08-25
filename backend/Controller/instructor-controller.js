const db = require("../model")
const crud = db.empdetail // db.empdetail get from model/index.js
const Op = db.Sequelize.Op
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


console.log("Welcome Instructor controller")

//**** create a new Instructor (register)
exports.create = async (req, res) => {

  try {
    const { username, password, conformPassword, email } = req.body
    const saltRound = 10
    //validate request
    if (!username || !password || !conformPassword || !email) {
      res.status(400).send({ msg: "Must fill all the input fields" })
      return;
    }
    //check the entered password
    if (password !== conformPassword) {
      res.status(401).send({ msg: "Password are not same.Please enter the same password" });
      return;
    }
    //create hashed password
    const hashedPassword = await bcrypt.hash(password, saltRound);

    //create instructor object
    const instructorObj = {
      username,
      password: hashedPassword, // store hashed password in the "password" field
      email,
    }

    const data = await crud.create(instructorObj)
    return res.status(200).json({
      msg: `Welcome to create instructor ${username}`,
      data: data,
    });

  }
  catch (err) {
    res.status(500).send({
      msg: err.msg || "some err occured while creating Instructor",
    });
  }
}

exports.login = async (req, res) => {
  try {
    console.log("welcome login", req.body)
    const { email, password } = req.body;

    // Validate request
    if (!email || !password) {
      res.status(400).send({ msg: "Email and password are required" });
      return;
    }

    // Find admin by email
    const getInstructor = await crud.findOne({
      where: {
        email: {
          [Op.eq]: email,
        },
      },
    });

    if (!getInstructor) {
      res.status(401).send({ msg: "Admin not found" });
      return;
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, getInstructor.password);
    console.log("passwordMatch : ", passwordMatch)
    if (!passwordMatch) {
      res.send({ msg: false });
      return;
    }

    // Generate access token and refresh token
    const accessToken = generateAccessToken(getInstructor);
    const refreshToken = generateRefreshToken(getInstructor);

    // Save the refresh token in the database
    getInstructor.refresh_token = refreshToken;
    await getInstructor.save();

    // Set cookies with refresh token and access token
    res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'none', secure: true });
    res.cookie('accessToken', accessToken, { httpOnly: true, sameSite: 'none', secure: true });
    res.setHeader('Authorization', `Bearer ${accessToken}`);

    // Redirect or send a success message
    //res.redirect('/api/employees');
    console.log("send messange : ", getInstructor)
    res.send(getInstructor);
    //res.json("logged in successfully");
  }
  catch (err) {
    res.status(500).send({
      msg: err.msg || "Some error occurred while logging in",
    });
  }
};

// Generate access token
const generateAccessToken = (getInstructor) => {
  return jwt.sign({ email: getInstructor.email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRATION || '30s',
  });
};

// Generate refresh token
const generateRefreshToken = (getInstructor) => {
  return jwt.sign({ email: getInstructor.email }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRATION || '60s',
  });
};

//***Logout session - Clear all tokens */
exports.logout = async (req, res) => {

  const getInstructorId = req.body.userId
  console.log("User Id", getInstructorId)
  try {
    // Clear the refresh token in the database
    await crud.update(
      { refresh_token: null },
      { where: { id: getInstructorId } }
    );

    // Clear the refresh token and access token cookies
    res.clearCookie('refreshToken', { httpOnly: true, sameSite: 'none', secure: true });
    res.clearCookie('accessToken', { httpOnly: true, sameSite: 'none', secure: true });

    // Send a success message or redirect to the login page
    res.status(200).send({ msg: "Logged out successfully" });
  } catch (error) {
    res.status(500).send({
      msg: error.msg || "Some error occurred while logging out",
    });
  }
};

//*** Get all Instructor
exports.findAll = (req, res) => {
  crud.findAll()
    .then(data => {
      console.log("Find All : ", data)
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Instructor controller."
      });
    });
}