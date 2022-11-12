const express = require("express");
const app = express();
const expbs = require("express-handlebars");
const lib = require("./functions");
const acl = require("./roles");
const flash = require("connect-flash");
const path = require("path");
const session = require("express-session");
const nodemailer = require("nodemailer");

const gm = require("gm");

var json_location;
let pdf_location = "";
let text_location = "";
let img_location = "";

var adminpath = require("./routes/admin");
var swiftpath = require("./routes/swift");
var settspath = require("./routes/setts");
var authspath = require("./routes/auth");
/**** execute this for all routes to /   --- we can use regex such as /* for ALL routes
app.all('/', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})
**/

app.use(
  session({
    key: "user_sid",
    secret: "somerandonstuffs",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 1000000,
      httpOnly: true,
    },
  })
);

app.engine(
  "hbs",
  expbs({
    //layoutsDir: __dirname + '/views/layouts',
    //partialsDir: __dirname + '/views/partials/',
    extname: "hbs",
    //defaultView: 'main',
    defaultLayout: "login",

    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
    // Specify helpers which are only registered on this instance.
    helpers: {
      checkVal: function (val1, val2) {
        return val1 == val2;
      },

      ifEq: function (val1, val2) {
        if (val1 == val2) {
          // return true;
        }
      },

      isSelected: function (val1, val2) {
        if (val1 == val2) {
          return "selected";
        }
      },

      checkView: function (val1, val2) {
        return val1 == val2;
      },

      isAllowed: function (sysrole) {
        return acl.checkAccess(sysrole, lib.getMyAcl());
      },

      alert: function (val) {
        console.log(eval(val));
      },
    },
  })
);
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "hbs");

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let sessionChecker = (req, res, next) => {
  // console.log(req.session);
  if (req.session.user && !req.session.cookie._expires) {
    res.redirect("/swift");
  } else {
    next();
  }
};

// set flash messages to show
app.use(flash());

// Global variables
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

// Routes for Home-Page

app.get("/", sessionChecker, (req, res) => {
  // res.redirect("/swift");
  res.redirect("/auth/signin");
});

// Routing
// app.get("/signin", (req, res) => {
//   //res.render('index',{tt: 'index'});
//   //res.render('index', {usedef: true});
//   //res.send("<a href='viewmessages'>This is a PoC</a>");
//   res.render("login", { layout: "login", title: "SWIFTPlus 8.0" });
// });

app.use("/auth", authspath);
app.use("/admin", adminpath);
app.use("/swift", swiftpath);
app.use("/settings", settspath);

// app.get("/signin", (req, res) => {
//   res.render("login", { layout: "login", mtdata: lib.getMTs() });
//   //res.render('main');
//   //res.send("<a href='viewmessages'>This is a PoC</a>");
// });

// app.get("/searchmessage", (req, res) => {
//   res.render("searchmessage", { mtdata: lib.getMTs() });
//   //res.render('main');
//   //res.send("<a href='viewmessages'>This is a PoC</a>");
// });

// app.get("/searchresult", (req, res) => {
//   res.render("main", { layout: "searchresult", mtdata: lib.getMTs() });
//   //res.send("<a href='viewmessages'>This is a PoC</a>");
// });

// app.get("/manageprofile", (req, res) => {
//   //res.locals.testData = "Jackson";
//   //res.render('main',{layout: 'manageprofile', tabledata: lib.getProfiles(), title: "Manage Alert Profiles", mtdata: lib.getMTs(), msgflow: lib.getMsgFlow(), alerttypes: lib.getAlertTypes()
//   //               , alertgroups: lib.getAlertGroups(), alerttemps: lib.getAlertTemplates()});
//   //res.render('main');
//   res.send("<a href='viewmessages'>This is a PoC</a>");
// });

// app.post("/updateprofile", function (req, res) {
//   console.log(req.body);

//   data = req.body;
//   req.body.processed = 1;
//   //res.send(req.body);
//   res.send("<a href='viewmessages'>This is a PoC</a>");
// });

app.listen(8080, () => {
  var pathSettings = lib.getPaths();

  console.log("Setting Paths . . . .");
  console.dir(pathSettings);

  json_location = pathSettings[0].json;
  pdf_location = pathSettings[0].pdf;
  text_location = pathSettings[0].txt;
  img_location = pathSettings[0].img;

  console.log("Server started");
});
