import express from "express";
import cors from "cors";
import userRoutes from "./routes/User.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();

app.use(cors);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
