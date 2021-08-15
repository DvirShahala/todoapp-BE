import * as express from "express";
import todoModel, { ItodoScema } from "../models/Todo";

const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await todoModel.find({});
  try {
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/addTodo", async (req, res) => {
  const newTodo = new todoModel(req.body);

  try {
    await newTodo.save();
    res.status(200).send(newTodo);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/toggleComplete/:id", async (req, res) => {
  const todo = await todoModel.findOne({ id: +req.params.id });
  todo.ifComplete = !todo.ifComplete;
  try {
    todo.save();
    res.status(200).send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const delTodo = await todoModel.findOneAndRemove({ id: +req.params.id });
  try {
    res.status(200).send(delTodo);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
