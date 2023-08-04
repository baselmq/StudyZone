require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cors = require("cors");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
//port
const PORT = process.env.PORT || 8080;

//connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //listen for requests
    app.listen(PORT, () => {
      console.log("Connect to db & listen to port", PORT);
    });
  });
