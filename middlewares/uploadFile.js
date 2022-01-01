const multer = require('multer') // Inisialisasi multer

// Destinasi file disimpan
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads') // lokasi penyimpanan
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) // penamaan file agar tidak memiliki nama yg sama menggunakan tambahan datenow
  },
})

const upload = multer({ storage: storage })

module.exports = upload
