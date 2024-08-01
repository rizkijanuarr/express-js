const { where } = require("sequelize");
const { User } = require("../models");

exports.registerUser = async (req, res) => {
  try {
    if (req.body.password != req.body.passwordConfirm) {
      return res.status(400).json({
        message: "Fail",
        error: ["Password dan Password Confirm Tidak Sama!"],
      });
    } else {
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      return res.status(201).json({
        message: "Berhasil registrasi!",
        data: newUser,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "Validasi Error",
      error: error.errors,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(400).json({
      message: "Fail",
      error: error.errors,
    });
  }

  //   1. FUNGSI VALIDASI
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      status: "Fail",
      message: "Eror Validasi",
      error: "Please Input Email / Password",
    });
  }

  //   2. CHECK JIKA USERS EMAIL YANG DIMASUKAN DI REQ SUDAH ADA DI DB
  // DAN PASSWORD SUDAH BENAR DI INPUT DI REQ

  const userData = await User.findOne({ where: { email: req.body.email } });
  if (
    !userData ||
    !(await userData.CorrectPassword(req.body.password, userData.password))
  ) {
    return res.status(400).json({
      status: "Fail",
      message: "Error Login",
      error: "Invalid Email or Password",
    });
  }
};
