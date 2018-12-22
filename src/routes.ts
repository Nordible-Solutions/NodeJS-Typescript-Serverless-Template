import * as Express from "express";

const router = Express.Router();

router.get("/users", (req: Express.Request, res: Express.Response) => {

    res.json({
        status: "success",
        data: [{
            name: "User1"
        }]
    })

});

export default router;