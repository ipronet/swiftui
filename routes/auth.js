var express = require("express");
var router = express.Router();

const {
  showLogin,
  signinUser,
  signoutUser,
  updatePassword,
  newUpdatePassword,
  showMfa,
  mFactorAuth,
} = require("../controllers/auth");

router.get("/mfactor", showMfa);
router.post("/mauth", mFactorAuth);
router.get("/signin", showLogin);
router.post("/login", signinUser);
router.post("/logout", signoutUser);
router.post("/updatepass", updatePassword);
router.get("/newpass", newUpdatePassword);

module.exports = router;
