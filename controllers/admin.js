let axios = require("axios");
const { BaseUrl } = require("../helpers/vars");
const lib = require("../functions");

const swiftCtrl = {};

swiftCtrl.showAuths = async (req, res) => {
  res.render("auths", { tt: "auths", layout: "main.hbs" });
  //res.send('Birds home page')
};

swiftCtrl.signoutUser = async (req, res) => {
  try {
    await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/users/logout`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (req.session.user) {
      req.session.user_id = "";
      req.session.user = "";
      req.session.phone = "";
      req.session.email = "";
      req.session.username = "";
      req.session.role = "";
      return res.redirect("/signin");
    } else {
      req.flash("error_msg", "Sorry, you do not have access");
      return res.redirect("/auth/signin");
    }
  } catch (error) {
    return res.redirect("/swift");
  }
};

swiftCtrl.signinUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    let { data } = await axios.post(
      `${BaseUrl}/users/auth`,
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );


    if (data && data.Status == 1) {
      req.session.user_id = data.Data.idsys_users;
      req.session.user = data.Data.fullname;
      req.session.phone = data.Data.phone;
      req.session.email = data.Data.email;
      req.session.username = data.Data.username;
      req.session.role = data.Data.role;

    } else {
      req.flash("error_msg", "Sorry, you do not have access");
      return res.redirect("/signin");
    }

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
    req.flash("error_msg", error.response.data.Message);
    return res.redirect("/admin");
  }
};

swiftCtrl.aboutRoute = async (req, res) => {
  res.send("About birds", { layout: "main.hbs" });
};

swiftCtrl.addAlertProfile = async (req, res) => {
  res.render("main", {
    layout: "addalertprofile",
    plugins_path: "../../../plugins",
    css_path: "../../../css",
    js_path: "../../../js",
    mtdata: lib.getMTs(),
  });
  //res.render('main');
};

swiftCtrl.showMsgtable = async (req, res) => {
  // res.render('msgtable',{layout:"formwizard",tt: 'noticegw', data: JSON.stringify(finaldata)});
  res.render("msgtable", { layout: "formwizard", tt: "noticegw" });
};

swiftCtrl.showAddalertProfile = async (req, res) => {
  res.render("addalertprofile", { layout: "main.hbs", mtdata: lib.getMTs() });
  //res.render('main');
  //res.send("<a href='viewmessages'>This is a PoC</a>");
};

swiftCtrl.fetchTemplate = async (req, res) => {

  console.dir(req.body);
  //try
  // {

  let templatedata = {
    MT: "103",
    SAMPLE: "",
    DATA: [
      {
        Field: "20",
        Type: 1,
        TypeName: "Date",
        Name: "Date",
        Searcheable: 1,
        Display: 0,
      },
      //{Field: "32", Type: 1, TypeName: "Text", Name: "Account number", Searcheable: 1, Display: 1}
    ],
  };

  var fieldcols = [
    { title: "Field", data: "Field", type: "text" },
    { title: "Display Name", data: "Name", type: "text" },
    {
      title: "Type",
      data: "TypeName",
      type: "select",
      option: ["Data", "Text", "Money"],
    },
    { title: "Searcheable", data: "Searcheable", type: "checkbox" },
    { title: "Display ?", data: "Display", type: "checkbox" },
  ];

  templatedata["fieldcols"] = fieldcols;

  let jsondata = JSON.stringify(templatedata);

  console.dir(JSON.parse(jsondata));

 

  res.send(jsondata);

};

module.exports = swiftCtrl;
