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
      error: error.errors.map((err) => err.message),
    });
  }
};
