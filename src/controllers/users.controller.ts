import * as Express from "express";
import * as Crypto from 'crypto';
import * as rp from 'request-promise';

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
        res.send(accessTokenResponse);
    }
    catch (ex) {
        res.send(ex);
    }
}

export default {
    authenticate
}