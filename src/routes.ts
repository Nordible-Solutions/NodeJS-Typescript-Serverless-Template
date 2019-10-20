import * as Express from "express";
const router = Express.Router();
import UserController from "./controllers/users.controller";

router.post("/authenticate", UserController.authenticate);
export default router;