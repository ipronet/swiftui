var express = require("express");
const {
  showAuths,
  aboutRoute,
  addAlertProfile,
} = require("../controllers/admin");
var router = express.Router();

const lib = require("../functions");
const { authenticate } = require("../middleware/bounce");

router.all("/*", function (req, res, next) {
  req.app.locals.layout = "admin"; // set your layout here
  next(); // pass control to the next handler
});

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

// define the home page route
router.get("/",authenticate, showAuths);

// define the about route
router.get("/about", authenticate, aboutRoute);

router.get("/addalertprofile", authenticate,addAlertProfile);

module.exports = router;
