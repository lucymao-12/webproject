import mongoose from "mongoose";
const defaultMap = new Map();

defaultMap.set("0", { name: "Good Ending", complete: false });
defaultMap.set("1", { name: "Bad Ending", complete: false });
defaultMap.set("2", { name: "Secret Ending", complete: false });
defaultMap.set("3", { name: "Another Ending", complete: false });
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true, // make is easier so no two users have the same name
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  endingsCompleted: {
    type: Map,
    required: true,
    default: defaultMap,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
