const { VerifyToken } = require("../Auth/Auth");


function isLoginMiddleware(req, res, next){
    if(!req.isAuthenticated()){
        res.status(401).send({message: "Please Login to Website first"});
    } else {
        next();
    }
}

function VerifyTokenMiddleware(req, res, next) {
    const userID = VerifyToken(req.headers.authorization);
    if (userID) {
        req.user = userID;
        next();
    } else {
        res.status(401).send({ status: 401, message: "You are not authorized" });
    }
}

module.exports = { VerifyTokenMiddleware, isLoginMiddleware };