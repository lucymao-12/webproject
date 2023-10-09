import express from "express";
import cors from "cors";
import userRoutes from "./routes/User.js";
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import User from "./models/User.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", userRoutes);
app.use("/chapters", userRoutes);
app.use(cors());

//app.options("/", cors());
app.get("/test", (req, res) => {
  res.json({ words: ["some", "stuff", "here"] });
});

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
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connected to mongodb");
});
