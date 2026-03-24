const express = require("express");
const app = express();

app.use(express.json());

// Routes
const taskRoutes = require("./routes/taskRoutes");
const usersRouter = require("./routes/users");

app.use("/tasks", taskRoutes);
app.use("/users", usersRouter);

module.exports = app;