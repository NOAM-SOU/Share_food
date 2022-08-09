import { UserInfo } from "../../interfaces/interfaces";
import mongoose from "mongoose";

const userInfoSchema = new mongoose.Schema<UserInfo>({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
  phone: {
    type: Number,
  },
  aboutMe: {
    type: String,
  },
  foodCategory: [String],
  specialDiet: {
    type: String,
  },
  allergies: [String],
});

export default mongoose.model("UserInfo", userInfoSchema);
