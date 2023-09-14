import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/users/:id", async (req, res) => {
  const { id } = req.params.id;
  let user = await User.findById(id);
  res.send(user).status(200);
});

router.post("/", async (req, res) => {
  const userName = req.body.name;
  const user = new User({
    name: userName,
  });
  const saved = await user.save();
  res.send(saved).status(204);
});

router.patch("/:ending", async (req, res) => {
  const user = await User.findById(req.body.name);
  const currentEnding = user.endingsCompleted.get({ key: req.params.ending });
  const newEndings = user.endingsCompleted.set({
    key: req.params.ending,
    value: { name: currentEnding, complete: true },
  });
  await User.updateOne(req.body.name, { endingsCompleted: newEndings });
});
export default router;
