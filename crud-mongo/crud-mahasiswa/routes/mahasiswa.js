const router = require("express").Router(); 

// import controller mahasiswa
const mahasiswaController = require("../controllers/mahasiswaController");

// endpoint mahasiswa
router.get("/", mahasiswaController.viewMahasiswa); // Untuk view data mahasiswa
router.post("/", mahasiswaController.addMahasiswa); // Untuk tambah data mahasiswa
router.put("/", mahasiswaController.EditMahasiswa); // Untuk ubah data mahasiswa
router.delete("/:id", mahasiswaController.DeleteMahasiswa); // Untuk hapus data mahasiswa berdasarkan ID

// Lalu export routernya
module.exports = router;