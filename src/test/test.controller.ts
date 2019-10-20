import * as Express from "express";

const test = async (req: Express.Request, res: Express.Response) => {

    res.status(200).send({ message: "Ok" });
}

export default {
    test
}