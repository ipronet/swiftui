let axios = require("axios");
const lib = require("../functions");

const authCtrl = {};

authCtrl.showMfa = async (req, res) => {
  const rand1 = Math.floor(Math.random() * 100) + 1;
  const rand2 = Math.floor(Math.random() * 100) + 1;

  const data = { value1: rand1, value2: rand2 };


  res.render("mfactor", {
    layout: "mfactor",
    values: data,
    title: "SWIFTPlus 8.0",
  });
};

authCtrl.mFactorAuth = async (req, res) => {
  const { value1, value2, answer } = req.body;

  const addition = parseInt(value1) + parseInt(value2);

  if (addition == parseInt(answer)) {
    req.session.mfactor = true;

    const data = { Status: true };
    res.json(data);
  } else {
    req.session.mfactor = false;

    const data = { Status: false };
    res.json(data);
  }
};

authCtrl.showLogin = async (req, res) => {
  res.render("login", { layout: "login", title: "SWIFTPlus 8.0" });
};

authCtrl.signoutUser = async (req, res) => {
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
      return res.redirect("/auth/signin");
    } else {
      req.flash("error_msg", "Sorry, you do not have access");
      return res.redirect("/auth/signin");
    }
  } catch (error) {
    // res.send(error.response.data);
    // req.flash("error_msg", error.response.data.Message);
    return res.redirect("/");
  }
};

authCtrl.signinUser = async (req, res) => {
  const { username, password } = req.body;



  try {
    // let data1 = await axios.post(
    //   `http://162.240.67.159:7000/swiftapp/v1/ums/menus`
    // );
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/users/auth`,
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (data && data.Status == 1) {
      req.session.user_id = data.Data.userInfo.id;
      req.session.user = data.Data.userInfo.fullname;
      req.session.phone = data.Data.userInfo.phone;
      req.session.email = data.Data.userInfo.email;
      req.session.username = data.Data.userInfo.username;
      req.session.role = data.Data.userInfo.roleTitle;
      req.session.menus = data.Data.menus;
    } else {
      req.flash("error_msg", "Sorry, you do not have access");
      return res.redirect("/auth/signin");
    }


    res.json(data);
  } catch (error) {
    res.send(error.response.data);
    req.flash("error_msg", error.response.data.Message);
    return res.redirect("/");
  }
};

authCtrl.updatePassword = async (req, res) => {
  const { oldpassword, newpassword } = req.body;
  try {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/users/auth`,
      { oldpassword, newpassword },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );


    // if (data && data.Status == 1) {
    //   req.session.user_id = data.Data.id;
    //   req.session.user = data.Data.fullname;
    //   req.session.phone = data.Data.phone;
    //   req.session.email = data.Data.email;
    //   req.session.username = data.Data.username;
    //   req.session.role = data.Data.roleTitle;

    // } else {
    //   req.flash("error_msg", "Sorry, you do not have access");
    //   return res.redirect("/auth/signin");
    // }


    res.json(data);
  } catch (error) {
    res.send(error.response.data);
    req.flash("error_msg", error.response.data.Message);
    return res.redirect("/");
  }
};

authCtrl.newUpdatePassword = async (req, res) => {
  res.render("updatePassword", {
    userDetail: req.session,
    layout: "main.hbs",
    tt: "newPass",
  });
};

module.exports = authCtrl;
