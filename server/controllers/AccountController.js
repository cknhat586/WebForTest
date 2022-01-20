const passport = require('passport');
const jwt = require('../middlewares/jwt');

class AccountController {

    logout(req, res) {
        if (req.user) {
            req.logOut();
        }

        if (req.cookies.token) {
            res.clearCookie('token');
        }

        res.redirect('/');
    }

    signupGET(req,res) {
        res.render('signup');
    }

    signinGET(req, res) {
        if (req.cookies.token) {
            res.redirect('/user/dashboard');
        }
        res.render('login');
    }

    signinPOST(req, res, next) {
        passport.authenticate('local', (err, user, info) => {
            if (err) { 
                return res.render('login', {
                message: err,
                msgcolor: 'danger'
                });
            }
                
            if (!user) { 
                return res.render('login', {
                    message: info.message,
                    msgcolor: 'warning'
                });
            }
                
            req.logIn(user, (err) => {
                if (err) { 
                    return res.render('login', {
                        message: err,
                        msgcolor: 'danger'
                    }); 
                }
                
                const accessToken = jwt.generateAccessToken(user);
                // const refreshToken = jwt.generateRefreshToken(user);

                res.cookie('token', accessToken);
                //console.log('Signed in successfully -> access token: ', accessToken);
                
                if (user.f_Permission == 2) {
                    return res.redirect('/admin');
                } else if (user.f_Permission == 1) {
                    return res.redirect('/manager');
                } else {
                    return res.redirect('/user');
                }
            }) 
        })(req, res, next);
    }

    signupPOST(req, res) {
        res.render('signup');
    }

}

module.exports = new AccountController;