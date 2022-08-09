import { Recipe } from "../../interfaces/interfaces";
import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema<Recipe>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  Ingredients: [
    {
      quantity: String,
      typeOfMeasure: String,
      name: String,
    },
  ],
  img: {
    type: String,
  },
  directions: {
    type: String,
    required: true,
  },
  numberOfDishes: {
    type: Number,
    required: true,
  },

  cookTime: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Recipe", recipeSchema);
