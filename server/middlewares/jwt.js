const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    generateAccessToken: user => {
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '15s'
        });

        return accessToken;
    },

    generateRefreshToken: user => {
        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '30s'
        });

        return refreshToken;
    },

    verifyToken: (req, res, next) => {
        // const authHeader = req.header('Authorization');
        // const token = authHeader && authHeader.split(' ')[1];
        const token = req.cookies.token;
        console.log('JWT: Authorinzing...')
        console.log('Verifying Token...');

        if (!token) {
            console.log('Token is missing!');
            return res.sendStatus(401);
        }

        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            console.log('Token decoded: ', decoded);

            req.user = decoded;

            next();
        } catch (error) {
            //console.log('Error at middlewares/jsonwebtoken/verifyToken: ', error);
            console.log('Token expired');
            res.clearCookie('token');
            return res.sendStatus(403);
        }
    }
}