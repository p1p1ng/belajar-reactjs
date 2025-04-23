const router = require("express").Router();

 // export controller yang ingin dipakai
const mahasiswaController = require("../controllers/mahasiswaController");

 // endpoint mahasiswa
router.get("/", mahasiswaController.viewMahasiswa); // Untuk view

 // Lalu export routernya
module.exports = router;