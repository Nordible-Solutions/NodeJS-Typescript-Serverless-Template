import * as Express from "express";
const router = Express.Router();
import testController from "./test/test.controller";

router.get("/test-route", testController.test);
export default router;