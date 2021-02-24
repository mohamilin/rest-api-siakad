const mongoose = require("mongoose")

const roleSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const Role = new mongoose.model("roles", roleSchema)

module.exports = Role