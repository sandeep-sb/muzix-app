const express = require("express");
const passport = require("passport");
const {RegisterUser, UserLogin, UserLogout, PasswordReset, SendMail, isAuthenticated } = require("../Controller/UserController");
const { isLoginMiddleware, VerifyTokenMiddleware } = require("../Middleware/Middleware");
const router = express.Router();

// router.get("/profile", isLoginMiddleware, VerifyTokenMiddleware, Profile);
router.post("/register", RegisterUser);
router.post("/login", passport.authenticate('local'), UserLogin);
router.post("/logout", UserLogout);
router.post("/resetpassword", isLoginMiddleware, VerifyTokenMiddleware, PasswordReset);
router.post("/forgotpassword", SendMail);
router.get("/isAuthenticated", isLoginMiddleware, isAuthenticated);
// router.get('/auth/google', passport.authenticate('google', { scope: [ 'email', 'profile' ] }));
// router.get("/google/callback", passport.authenticate('google', {successRedirect: "/home", failureRedirect: "/login"}));
// router.post("/login", UserLogin);



// router.get("login/page", (req, res)=>{
//     res.render("/login");
// });
// router.get("register/page", (req, res)=>{
//     res.render("/register");
// });
// router.get("/home", VerifyTokenMiddleware, (req, res)=>{
//     res.render("userhome");
// });
// router.get("/forgotpassword/page", (req, res)=>{
//     res.render("forgotpassword");
// });
// router.get("/resetpassword/:email/:token", TokenAuthentication, (req, res)=>{
//     res.render("resetpassword")
// })

module.exports = router;