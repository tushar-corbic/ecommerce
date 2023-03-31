const express = require("express")
const app = express()

const errorMiddleware = require("../backend/middleware/error")

app.use(express.json())


//routes imports
const product = require("./routes/productRoute")
app.use("/api/v1", product);

// middleware for erro
app.use(errorMiddleware);

module.exports = app