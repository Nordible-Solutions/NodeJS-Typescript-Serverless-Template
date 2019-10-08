import * as Express from "express";
const router = Express.Router();
import UserController from "./controllers/users.controller";

router.get("/users", UserController.findAll);
router.get("/users/:id", UserController.findById);
router.post("/users", UserController.create);
router.post("/authenticate", UserController.authenticate);
export default router;