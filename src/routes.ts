import { Router } from "express";
import { UserController } from "./controllers/index.js";

const router = Router();

// routes do User
router.post("/user", UserController.createUser);
router.get("/users",UserController.getUserEmail)


export {router};
