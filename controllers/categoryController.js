exports.getAllCategories = (req, res) => {
  res.status(200).json({
    status: "success",
    data: [
      {
        id: "01",
        name: "Iphone",
      },
      {
        id: "02",
        name: "Android",
      },
      {
        id: "03",
        name: "MacOS",
      },
    ],
  });
};

exports.storeCategory = (req, res) => {
  let name = req.body.name;
  let description = req.body.description;

  if (!name && !description) {
    return res.status(400).json({
      status: "fail",
      error: "Validasi gagal!",
    });
  }

  return res.status(200).json({
    status: "Success",
    message: "Validasi Sukses!",
  });
};
