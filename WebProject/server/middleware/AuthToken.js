import { Jwt } from "jsonwebtoken";

function AuthToken(req, res, next) {
  const token = req.header("auth-token"); // make sure this matches the front end fetch header
  if (!token) {
    return res.status(401).json({ error: "Access Denied" });
  }
  try {
    const verified = Jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid Token" });
  }
}
