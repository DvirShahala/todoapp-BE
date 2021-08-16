import mongoose from "mongoose";

export interface ItodoScema {
  id: number;
  name: string;
  ifComplete: boolean;
}

const TodoSchema = new mongoose.Schema<ItodoScema>({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  ifComplete: {
    type: Boolean,
    require: true,
  },
});

const todoModel = mongoose.model("todo", TodoSchema);

// module.exports = todoModel;
export default todoModel;
