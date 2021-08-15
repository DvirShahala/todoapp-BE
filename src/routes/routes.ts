import { Router } from "express";
import Todo from "./todos";

const router = Router();

router.use("/todos", Todo);

export default router;
