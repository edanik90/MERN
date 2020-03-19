const jwt = require("jsonwebtoken");
const secret = "1h%^d8$9274#@$%12";
module.exports.secret = secret;
module.exports.authenticate = (req, res, next) => {
    console.log(req.cookies);
    jwt.verify(req.cookies.usertoken, secret, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            next();
        }
    });
}