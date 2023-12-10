import express from "express";
import User from "../models/User.js";
import { connect } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
///import cors from "cors";
const app = express();
app.get("/users/:id", async (req, res) => {
  const { id } = req.params.id;
  let user = await User.findById(id);
  res.send(user).status(200);
});

app.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(400).send("Missing username or password");
    }
    const user = await User.findOne({ name: name });
    if (!user) {
      return res.status(400).send("User does not exist");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send("Invalid password");
    }
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/register", async (req, res) => {
  try {
    const { name, password } = req.body;
    if (!name || !password) {
      return res.status(400).send("Missing username or password");
    }
    const userExist = await User.findOne({ name: name });
    if (userExist) {
      return res.status(400).send("User already exists");
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name: name,
      password: hashedPassword,
    });
    const saved = await user.save();
    res.send(saved).status(204);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});
app.patch("/:ending", async (req, res) => {
  const user = await User.findById(req.body.name);
  const currentEnding = user.endingsCompleted.get({ key: req.params.ending });
  const newEndings = user.endingsCompleted.set({
    key: req.params.ending,
    value: { name: currentEnding, complete: true },
  });
  await User.updateOne(req.body.name, { endingsCompleted: newEndings });
});

export default app;
