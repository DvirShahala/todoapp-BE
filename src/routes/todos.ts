import * as express from "express";
import todoModel, { ItodoScema } from "../models/Todo";

const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {
  const todos = await todoModel.find({});
  try {
    res.status(200).send(todos);
  } catch (error) {
    res.status(404).send(error);
  }
});

// Add todo
router.post("/addTodo", async (req, res) => {
  const { id, name, ifComplete } = req.body;
  const newTodo = new todoModel({
    id: id,
    name: name,
    ifComplete: ifComplete,
  });
  try {
    await newTodo.save();
    res.status(200).send(newTodo);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update todo
router.put("/toggleComplete", async (req, res) => {
  const todo = await todoModel.findOne({
    id: +req.body.id,
  });
  todo.ifComplete = !req.body.ifComplete;
  try {
    todo.save();
    res.status(200).send(todo);
  } catch (error) {
    res.status(404).send(error);
  }
});

// Delete todo
router.delete("/delete", async (req, res) => {
  const delTodo = await todoModel.findOneAndRemove({ id: +req.body.id });
  try {
    res.status(200).send(delTodo);
  } catch (error) {
    res.status(404).send(error);
  }
});

export default router;
