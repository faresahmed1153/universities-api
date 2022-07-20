const { validation } = require("../../middleware/validation");
const { signUpValidator, loginValidator, emailValidator, resetValidator, searchValidator } = require("./user.validation");
const { signup } = require("./controller/signup");
const { login } = require("./controller/signin");
const { search } = require("./controller/search");
const forgotPassword = require("./controller/resetPassword");
const { auth } = require("../../middleware/auth");
const router = require("express").Router();

router.post("/signup", validation(signUpValidator), signup);
router.post("/signin", validation(loginValidator), login);
router.post("/reset", validation(emailValidator), forgotPassword.reset);
router.patch("/reset-password/:token", validation(resetValidator), forgotPassword.resetPassword);
router.get("/search", validation(searchValidator), auth(), search);
module.exports = router;
