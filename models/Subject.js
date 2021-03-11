const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    mata_pelajaran: {
        type: String,
        required: true
    },
    sekolah_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'schools',
    },
    teacher_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers'
    }
});

const Subject = new mongoose.model('subjects', classSchema);
module.exports = {Subject}