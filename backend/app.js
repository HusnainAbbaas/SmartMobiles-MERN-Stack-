const exp = require("constants");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

// Route imports

const product = require("./routes/ProductRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

// Middlware for errors
app.use(errorMiddleware);
module.exports = app;
