require("dotenv").config();

const express = require("express");
const cors = require("cors");
const dbConnect = require("../config/dbconfig");
const {
  invalidRoute,
  globalErrorHandler,
} = require("../middlewares/errorMiddleware");

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

dbConnect();

// Importing all the routes
const userRouter = require("../routes/userRoutes");

app.use("/api/v1/user", userRouter);

app.use(invalidRoute);

app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
