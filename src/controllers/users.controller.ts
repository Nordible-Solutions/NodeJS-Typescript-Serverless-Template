import * as Express from "express";
import User from "../database/user.model";
import * as Crypto from 'crypto';
import Axios from 'axios';
import rp from 'request-promise';

const create = async (req: Express.Request, res: Express.Response) => {
    try {

        res.json({
            status: 'success',
            data: req.body
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
        res.json({
            status: 'success',
            data: ['a', 'b']
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
        res.json({
            status: 'success',
            data: 'user of id' + req.params.id
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
            data: {
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