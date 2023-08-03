const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")
const db = require("./db")

const app = express()
const productRouter = require("./routes/productRouter")

app.use(
  cors({
    origin: "https://foo-die.netlify.app",
  })
)
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Foodie" })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})

app.use("/api/", productRouter)
