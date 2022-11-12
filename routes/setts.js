const { json, raw } = require("express");
var express = require("express");
const { connect } = require("pm2");
var router = express.Router();

const {
  showCompany,
  showPaths,
  showPath,
  addPath,
  updatePath,
  showAuths,
  showNoticegw,
  showMsgtable,
  showAddalertProfile,
  showAddAlertProfiles,
  addAlert,
  updateAlert,
  fetchTemplate,
  updateNotification,
  updateCompany,
  updateOauth,
  updateLdap,
  // showSmsgateways,
  showSmsgateway,
  addSmsgateway,
  updateSmsgateway,
  newPath,
  showNewalertProfile,
  // showNewSmsgateway,
  addUser,
  showUsers,
  showUserDetail,
  newUser,
  showRoles,
  newRole,
  showRole,
  addRole,
  updateRole,
  // newMenu,
  // showMenus,
  // showMenu,
  // addMenu,
  // updateMenu,
  showRoleMenus,
  // newRoleMenu,
  showRoleMenu,
  addRoleMenu,
  updateRoleMenu,
  // showUserMenus,
  // newUserMenu,
  // showUserMenu,
  // addUserMenu,
  // addSubMenu,
  // newSubMenu,
  deleteRoleMenu,
  // deleteUserMenu,
  // updateUserMenuAccess,
  // updateUserMenuStatus,
  updateRoleMenuStatus,
  updateUser,
} = require("../controllers/setts");

const lib = require("../functions");
const { authenticate } = require("../middleware/bounce");

router.use(express.static("public"));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.all("/*", function (req, res, next) {
  req.app.locals.layout = "main"; // set your layout here
  next(); // pass control to the next handler
});
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  next();
});

router.get("/company", authenticate, showCompany);

router.post("/updatecompany", authenticate, updateCompany);

router.get("/roles", authenticate, showRoles);
router.get("/newrole", authenticate, newRole);

router.get("/role/:id", authenticate, showRole);
router.post("/addrole", authenticate, addRole);
router.post("/updaterole", authenticate, updateRole);

// router.get("/menus", authenticate, showMenus);
// router.get("/newmenu", authenticate, newMenu);
// router.get("/newsubmenu", authenticate, newSubMenu);

// router.get("/menu/:id", authenticate, showMenu);
// router.post("/addmenu", authenticate, addMenu);
// router.post("/addsubmenu", authenticate, addSubMenu);
// router.post("/updatemenu", authenticate, updateMenu);

router.get("/rolemenus", authenticate, showRoleMenus);
// router.get("/newrolemenu", authenticate, newRoleMenu);

router.get("/rolemenu/:id", authenticate, showRoleMenu);
router.post("/deleterolemenu", authenticate, deleteRoleMenu);
router.post("/addrolemenu", authenticate, addRoleMenu);
router.post("/updaterolemenu", authenticate, updateRoleMenu);
router.post("/updaterolemenustatus", authenticate, updateRoleMenuStatus);

// router.get("/usermenus", authenticate, showUserMenus);
// router.get("/newusermenu", authenticate, newUserMenu);

// router.get("/usermenu/:username", authenticate, showUserMenu);
// router.post("/deleteusermenu", authenticate, deleteUserMenu);
// router.post("/addusermenu", authenticate, addUserMenu);
// router.post("/updateusermenuaccess", authenticate, updateUserMenuAccess);
// router.post("/updateusermenustatus", authenticate, updateUserMenuStatus);

router.get("/paths", authenticate, showPaths);
router.get("/newpath", authenticate, newPath);

router.get("/path/:id", authenticate, showPath);
router.post("/addpath", authenticate, addPath);
router.post("/updatepath", authenticate, updatePath);

router.get("/auths", authenticate, showAuths);

router.post("/updateoauth", authenticate, updateOauth);
router.post("/updateldap", authenticate, updateLdap);

router.get("/noticegw", authenticate, showNoticegw);

router.post("/updatenotification", authenticate, updateNotification);

router.get("/msgtable", authenticate, showMsgtable);

// router.get("/addalertprofile", showAddalertProfile);

router.get("/profiles", authenticate, showAddAlertProfiles);

router.get("/newprofile", authenticate, showNewalertProfile);

router.get("/profiledetail/:email", authenticate, showAddalertProfile);
router.post("/addalert", authenticate, addAlert);
router.post("/updatealert", authenticate, updateAlert);

// router.get("/smsgateways", authenticate, showSmsgateways);

// router.get("/newsmsgateway", authenticate, showNewSmsgateway);

router.get("/smsgateway/:id", authenticate, showSmsgateway);
router.post("/addsmsgateway", authenticate, addSmsgateway);
router.post("/updatesmsgateway", authenticate, updateSmsgateway);

router.get("/users", authenticate, showUsers);

router.get("/newuser", authenticate, newUser);

// router.get(
//   "/user/detail",
//   // authenticate,
//   showMyDetail
// );
router.get("/userdetail/:email", authenticate, showUserDetail);
router.post("/adduser", authenticate, addUser);
router.post("/updateuser", authenticate, updateUser);

/**
router.post('/fetchtemplate', function (req, res) {

  console.dir(req.body)
  try
  {
      let finaldata = []
      
      var pathSettings = lib.getPaths()

      //open the jsonfile
      const fs = require('fs');
    
      let rawdata = fs.readFileSync(pathSettings[0].json+ req.body.messagetype+'.json');

      rawdata = "[" + (rawdata.toString()).substring(1) + "]"

      let student = JSON.parse(rawdata);


      let sampledata_keys = Object.keys(student[1])

      sampledata_keys.forEach(element => { 
        finaldata.push({"field": element, "value": eval("student[1]."+element)})
    });


      res.send(JSON.stringify(finaldata))
  }catch{

    res.send([{}]);

  }

})
**/

router.post("/fetchtemplate", authenticate, fetchTemplate);
module.exports = router;
