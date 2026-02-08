import { Router } from "express";
import { UserController } from "./controllers/index.js";

const router = Router();

// routes do User
router.post("/user", UserController.createUser);
router.get("/users",UserController.getUserEmail)
router.delete("/user/:id", UserController.deleteUser);


export {router};
