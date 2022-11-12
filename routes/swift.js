var express = require('express');
const {
  viewMessages,
  getMessages,
  getMessage,
  getImg,
  getPdfImg,
  aboutRoute,
  sendMail,
  getPdf,
  addAlertProfile,
  getMessageTypes,
  showAddMsgHeader,
  AddMsgHeader,
  getMessageTypesH,
  showUpdateMsgHeader,
  UpdateMsgHeader,
  getMessageTypesHU,
  getPdfLink,
  getImageLink,
  getPdfLinkAndEmail,
  getRawMsg,
} = require('../controllers/swift');
var router = express.Router();

const lib = require('../functions');
const { authenticate } = require('../middleware/bounce');
const acl = require('../roles');

var json_location;
let pdf_location = '';
let text_location = '';
let img_location = '';

router.all('/*', function (req, res, next) {
  req.app.locals.layout = 'main'; // set your layout here

  if (!json_location) {
    var pathSettings = lib.getPaths();

    json_location = pathSettings[0].json;
    pdf_location = pathSettings[0].pdf;
    text_location = pathSettings[0].txt;
    img_location = pathSettings[0].img;
  }
  next(); // pass control to the next handler
});

// middleware that is specific to this router
//router.use(function timeLog (req, res, next) {
//  next()
//})

// define the home page route
router.get('/', authenticate, function (req, res) {
  res.render('index', {
    layout: 'dashboard',
    userDetail: req.session,
    tt: 'index',
  });
  //res.send('Birds home page')
});

router.get('/viewmessages', authenticate, viewMessages);

router.get('/getmessages', authenticate, getMessages);

router.get('/msgheaderview', authenticate, showAddMsgHeader);

router.get('/msgupdateheaderview', authenticate, showUpdateMsgHeader);

router.post('/addheader', authenticate, AddMsgHeader);

router.post('/updateheader', authenticate, UpdateMsgHeader);

router.get('/messagetypes', authenticate, getMessageTypes);

router.get('/messagetypesh', authenticate, getMessageTypesH);

router.get('/messagetypeshu', authenticate, getMessageTypesHU);

router.get('/getmessage', authenticate, getMessage);

router.get('/getimg', authenticate, getImg);

router.get('/getpdfimg', authenticate, getPdfImg);

router.get('/getpdf', authenticate, getPdf);
router.post('/getrawmsg', authenticate, getRawMsg);
router.post('/getpdflink', authenticate, getPdfLink);
router.post('/getimagelink', authenticate, getImageLink);
router.post('/getpdflinkandemail', authenticate, getPdfLinkAndEmail);

router.post('/sendmail', authenticate, sendMail);

// define the about route
router.get('/about', authenticate, aboutRoute);

router.get('/addalertprofile', authenticate, addAlertProfile);

module.exports = router;
