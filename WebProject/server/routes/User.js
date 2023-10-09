import express from "express";
import User from "../models/User.js";
///import cors from "cors";
const app = express();
app.get("/users/:id", async (req, res) => {
  const { id } = req.params.id;
  let user = await User.findById(id);
  res.send(user).status(200);
});
app.post("/", async (req, res) => {
  console.log(req.body.name);
  const userName = req.body.name;
  const user = new User({
    name: userName,
  });
  console.log(user);
  const saved = await user.save();
  console.log(user);
  //res.send(JSON.stringify("working fine"));
  return res.send(saved).status(204);
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
