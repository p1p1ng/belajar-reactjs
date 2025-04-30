const router = require("express").Router();

 // export controller yang ingin dipakai
const mahasiswaController = require("../controllers/mahasiswaController");

 // endpoint mahasiswa
router.get("/", mahasiswaController.viewMahasiswa); // Untuk view
router.post("/", mahasiswaController.addMahasiswa); // Untuk tambah data mahasiswa
router.put("/", mahasiswaController.EditMahasiswa); // Untuk ubah data mahasiswa
router.delete("/:id", mahasiswaController.DeleteMahasiswa); // Untuk hapus data mahasiswa

 // Lalu export routernya
module.exports = router;