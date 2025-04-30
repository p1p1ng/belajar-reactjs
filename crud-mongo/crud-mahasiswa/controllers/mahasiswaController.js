const Mahasiswa = require("../models/Mahasiswa");

module.exports = {
    viewMahasiswa: async (req, res) => {
        try {
            const mahasiswa = await Mahasiswa.find();
            const alertMessage = req.flash("alertMessage");
            const alertStatus = req.flash("alertStatus");
            const alert = { message: alertMessage, status: alertStatus };
            res.render("index", {
                mahasiswa,
                alert,
                title: "CRUD",       
            });
            } catch (error) {
                res.redirect("/mahasiswa");
            }
    },
    addMahasiswa: async (req, res) => {
        try {
            const { nama, nim, jurusan, alamat } = req.body;
            await Mahasiswa.create({ nama, nim, jurusan, alamat });
            req.flash("alertMessage", "Berhasil tambah data mahasiswa");
            req.flash("alertStatus", "success");
            res.redirect("/mahasiswa");
        } catch (error) {
            req.flash("alertMessage", "Gagal tambah data mahasiswa");
            req.flash("alertStatus", "danger");
            res.redirect("/mahasiswa");
        }
    },
    EditMahasiswa: async (req, res) => {
        try {
            const { id, nama, nim, jurusan, alamat } = req.body;
            const mahasiswa = await Mahasiswa.findOne({_id: id});
            
            mahasiswa.nama = nama;
            mahasiswa.nim = nim;
            mahasiswa.jurusan = jurusan;
            mahasiswa.alamat = alamat;
            await mahasiswa.save(); // simpan perubahan ke database
            
            req.flash("alertMessage", "Berhasil ubah data mahasiswa");
            req.flash("alertStatus", "success");
            res.redirect("/mahasiswa"); // kembali ke halaman mahasiswa jika berhasil
        } catch (error) {
            req.flash("alertMessage", "Gagal ubah data mahasiswa");
            req.flash("alertStatus", "danger");
            res.redirect("/mahasiswa");
        }
    },
    DeleteMahasiswa: async (req, res) => {
        try {
            const { id } = req.params;
            const mahasiswa = await Mahasiswa.findOne({_id: id});
            await mahasiswa.remove(); // hapus data mahasiswa jika data ada

            req.flash("alertMessage", "Berhasil hapus data mahasiswa");
            req.flash("alertStatus", "warning");
            res.redirect("/mahasiswa");
        } catch (error) {
            req.flash("alertMessage", "Gagal hapus data mahasiswa");
            req.flash("alertStatus", "danger");
            res.redirect("/mahasiswa");
        }
    }
};