require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const auth = require("./routes/auth");
const cors = require('cors');
// Connect DB

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/private", require("./routes/private"));
// app.use("/api/admin/login", loginRoutes);
// app.use("/api/admin/courses", courseRoutes);
// app.use("/api/admin/users", userRoutes);
const cors = require('cors');const cors = require('cors');
// Error Handler should be last piece of middleware

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server runnig on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});

//to start server (backend) just type "npm run server" on the terminal
//be sure to connect to MongoDB in config.env (MONGO_URI)
