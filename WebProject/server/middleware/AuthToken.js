import jwt from "jsonwebtoken";

function AuthToken(req, res, next) {
  console.log("auth token");
  var token = req.header("Authorization"); // make sure this matches the front end fetch header
  if (token && token.startsWith("Bearer ")) {
    token = token.split(" ")[1];
    console.log(token);
  }
  if (!token) {
    return res.status(401).json({ error: "Access Denied" });
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    //console.log(verified);
    req.user = verified;
    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Invalid Token" });
  }
}
export default AuthToken;
