import mongoose from "mongoose";

export interface ItodoScema {
  id: number;
  name: string;
  ifComplete: boolean;
}

const TodoSchema = new mongoose.Schema<ItodoScema>({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  ifComplete: {
    type: Boolean,
  },
});

const todoModel = mongoose.model("todo", TodoSchema);

// module.exports = todoModel;
export default todoModel;
