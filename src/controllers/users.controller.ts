import * as Express from "express";
import User from "../database/user.model";
import * as Crypto from 'crypto';
import rp from 'request-promise';

const create = async (req: Express.Request, res: Express.Response) => {
    try {
        const { firstName, lastName } = req.body;
        const user = new User({ firstName, lastName });

        await user.save();

        res.json({
            data: user
        });

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}

const findAll = async (req: Express.Request, res: Express.Response) => {
    try {
        const users = await User.findAll();
        console.log('PRINT AGAIN');
        res.json({
            data: users
        })

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}

const findById = async (req: Express.Request, res: Express.Response) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });

        res.json({
            data: user
        })

    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

const authenticate = async (req: Express.Request, res: Express.Response) => {

    try {
        const api_key = process.env.ZERODHA_API_KEY;
        const api_secret = process.env.ZERODHA_API_SECRET;
        const request_token = req.body.request_token;
        const checksumInput = `${api_key}${request_token}${api_secret}`;
        const checksum = await Crypto
            .createHash('sha256')
            .update(checksumInput)
            .digest('hex');

        const options = {
            url: 'https://api.kite.trade/session/token',
            method: 'POST',
            headers: {
                "X-Kite-Version": 3,
            },
            form: {
                "api_key": api_key,
                "request_token": request_token,
                "checksum": checksum,
            },
        };

        const accessTokenResponse = await rp(options);
        console.log(accessTokenResponse);
        res.send(accessTokenResponse);
    }
    catch (ex) {
        res.send(ex);
    }
}

export default {
    findAll,
    findById,
    create,
    authenticate
}