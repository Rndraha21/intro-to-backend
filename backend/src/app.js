import express from "express";

const app = express(); // Create an express app

app.use(express.json());

// Routes import
import userRouter from "./routes/user.route.js";

// Routes declaration
app.use("/api/v1/users", userRouter);

export default app;
