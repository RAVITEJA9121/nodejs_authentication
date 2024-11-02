const express = require("express");
const user_router = require("./routes/user_route");
const mongoose = require("mongoose");
const logger = require("./middlewares/logger");


app = express();
mongoose.connect("mongodb://127.0.0.1:27017/auth")
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use(logger);

app.use("/user", user_router);

app.listen(9000);