const mongoose = require("mongoose")
const mongoUri = require("../db.config").uri
mongoose.connect(`${mongoUri}`, { useNewUrlParser: true }).catch((e) => {
  console.error("Connection error", e.message)
})

const db = mongoose.connection

module.exports = db
