const express = require("express");
const {
  registerUserCtrl,
  loginUserCtrl,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/register", registerUserCtrl);
userRouter.post("/login", loginUserCtrl);

module.exports = userRouter;
