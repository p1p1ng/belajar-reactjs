const mongoose = require ('mongoose')

const mahasiswaScheme = new mongoose.Schema({
    nama: {
        type: String,
        require: true,
    },
    nim: {
        type: Number,
        require: true,
    },
    jurusan: {
        type: String,
        require: true,
    },
    alamat: {
        type: String,
        require: true,
    },
});

module.exports = mongoose.model("Mahasiswa", mahasiswaScheme);