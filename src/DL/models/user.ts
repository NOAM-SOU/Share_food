import { User } from "../../interfaces/interfaces";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema<User>({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passWord: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
