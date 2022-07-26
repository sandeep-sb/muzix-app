const { VerifyToken } = require('../Auth/Auth');
const repo = require("../Repository/UserRepository");

const RegisterUser = (req, res)=>{
    repo.RegisterUser(req.body).then(data=>{
        res.status(200).send(data);
    });
}

const UserLogin = (req, res) => {
    console.log(req.body.email, req.body.password);
    repo.LoginUser(req.body.email, req.body.password).then(data => {
        // console.log(data.token)
        res.cookie("jwttoken", data.token, {
            maxAge: 1000 * 60 * 60,
            httpOnly: true,
        })
        // console.log(req.cookies);
        res.status(200).send(data);
    }).catch((err)=>{
        res.send(err);
    })
}

const UserLogout = (req, res) => {
    repo.LogoutUser().then((data)=>{
        res.clearCookie("jwttoken");
        // res.redirect("/login");
        res.status(200).send(data)
    });
}

const PasswordReset = (req, res)=>{
    repo.ResetPassword(req.body.email, req.body.password).then(data=>{
        res.status(200).send(data);
    }).catch((data)=>{
        res.send(data);
    })
}

const SendMail = (req, res)=>{
    repo.SendMail(req.body.email, req.hostname).then(data => {
        res.send(data)
    }).catch((data)=>{
        res.send(data);
    })
}

// function TokenAuthentication(req, res) {
//     let token = req.params.token;
//     if (VerifyToken(token) === true) {
//         next();
//     } else {
//         res.status(401).send({ status: 401, message: "You are not authorized" });
//     }
// }

function isAuthenticated(req, res) {
    res.send({ isAuthenticated: VerifyToken(req.headers.authorization) })
}



module.exports = { UserLogin, UserLogout, PasswordReset, SendMail, RegisterUser, isAuthenticated }
