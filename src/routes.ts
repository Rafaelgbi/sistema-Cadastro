import { Router } from "express";
import { UserController } from "./controllers/index.js";

const router = Router();

router.post("/user", UserController.creatUser);


export {router};
