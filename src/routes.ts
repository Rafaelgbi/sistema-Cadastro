import { Router } from "express";
import { UserController } from "./controllers/index.js";

const router = Router();

router.get("/user", UserController.creatUser);


export {router};
