const User = require("../model/User");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const generateWebToken = require("../utils/generateToken");

const registerUserCtrl = asyncHandler(async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // check if user is already registered

    if (!fullname || !email || !password) {
      throw new Error("Fill out complete information!");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User Already Exists!");
    }

    // Generating hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = await User.create({
      fullname,
      email,
      password: passwordHash,
    });

    res.status(201).json({
      status: "success",
      msg: "User created successfully!",
      data: user,
    });
  } catch (error) {
    throw new Error(error);
  }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User?.findOne({ email });

    if (!email || !userFound) {
      throw new Error("Enter Email or Password!");
    }

    if (userFound && (await bcrypt.compare(password, userFound?.password))) {
      res.status(201).json({
        msg: "Logged in successfully",
        status: "success",
        userFound,
        token: generateWebToken(userFound?._id),
      });
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error: " + error);
  }
});

module.exports = { registerUserCtrl, loginUserCtrl };
