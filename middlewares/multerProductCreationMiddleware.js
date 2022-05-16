const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads/products"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}_productimg_${Date.now()}${path.extname(
        file.originalname
      )}`
    );
  },
});

const uploadProductImage = multer({ storage: storage });

module.exports = uploadProductImage;
