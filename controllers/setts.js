// const { BaseUrl } = require("../helpers/vars");
let axios = require("axios");
const lib = require("../functions");

const swiftCtrl = {};

const flattenArr = (members) => {
  let children = [];
  const flattenMembers = members.map((m) => {
    if (m.children && m.children.length > 0) {
      // children = [...m.children];
      children.push(...m.children);
    }
    return m;
  });

  return flattenMembers.concat(
    children.length ? flattenArr(children) : children
  );
};

swiftCtrl.showCompany = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/company/");
  if (dat.length > 0) {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/getcompany` //make all the routes like this
    );


    res.render("company", {
      list: data,
      userDetail: req.session,
      layout: "main.hbs",
      tt: "company",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.updateCompany = async (req, res) => {
  // if (req.session.user && req.cookies.user_sid) {
  //   hbsContent.loggedin = true;
  //   hbsContent.userName = req.session.user.username;

  //   hbsContent.title = "You are logged in";

  const {
    id,
    comp_name,
    comp_email,
    address,
    comp_url,
    comp_slogan,
    comp_logo_name,
    comp_logo_type,
  } = req.body;


  try {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/updatecompany`,

      {
        id,
        comp_name,
        comp_email,
        comp_url,
        comp_slogan,
        comp_logo_name,
        comp_logo_type,
        address,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
  // } else {
  //   res.redirect("/login");
  // }
};

swiftCtrl.showPaths = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/paths");
  if (dat.length > 0) {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/allpaths`
    );


    res.render("paths", {
      list: data.Data,
      userDetail: req.session,
      layout: "main.hbs",
      tt: "paths",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.newPath = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/newpath");
  if (dat.length > 0) {
    res.render("addpath", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "paths",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.showPath = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/paths");
  if (dat.length > 0) {
    const { id } = req.params;
    let processId = parseInt(id);

    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/singlepaths`,
      {
        id: processId,
      }
    );
    const data1 = [data.Data];
    res.render("path", {
      userDetail: req.session,
      list: data1,
      layout: "main.hbs",
      tt: "paths",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.addPath = async (req, res) => {
  // if (req.session.user && req.cookies.user_sid) {
  //   hbsContent.loggedin = true;
  //   hbsContent.userName = req.session.user.username;

  //   hbsContent.title = "You are logged in";

  // const uuid = suid(16);
  // const finaluuid = uuid + unix;
  const {
    src_swift_docs_path_print,
    src_swift_docs_path_pdf,
    src_swift_docs_path_img,
    src_swift_docs_path_txt,
  } = req.body;


  try {
    const { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/createpath`,
      {
        src_swift_docs_path_print,
        src_swift_docs_path_pdf,
        src_swift_docs_path_img,
        src_swift_docs_path_txt,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
  // } else {
  //   res.redirect("/login");
  // }
};

swiftCtrl.updatePath = async (req, res) => {
  // if (req.session.user && req.cookies.user_sid) {
  //   hbsContent.loggedin = true;
  //   hbsContent.userName = req.session.user.username;

  //   hbsContent.title = "You are logged in";

  const {
    id,
    src_swift_docs_path_print,
    src_swift_docs_path_pdf,
    src_swift_docs_path_img,
    src_swift_docs_path_txt,
  } = req.body;


  try {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/updatepath`,

      {
        id,
        src_swift_docs_path_print,
        src_swift_docs_path_pdf,
        src_swift_docs_path_img,
        src_swift_docs_path_txt,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
  // } else {
  //   res.redirect("/login");
  // }
};

swiftCtrl.showRoles = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/roles");
  if (dat.length > 0) {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/roles`
    );

    res.render("roles", {
      list: data.Data,
      userDetail: req.session,
      layout: "main.hbs",
      tt: "roles",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.newRole = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/newrole");
  if (dat.length > 0) {
    res.render("addRole", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "paths",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.showRole = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/roles");
  if (dat.length > 0) {
    const { id } = req.params;
    let processId = parseInt(id);

    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/findrole`,
      {
        id: processId,
      }
    );
    const data1 = [data.Data];
    res.render("role", {
      userDetail: req.session,
      list: data1,
      layout: "main.hbs",
      tt: "role",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.addRole = async (req, res) => {

  const { title } = req.body;


  try {
    const { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/createrole`,
      {
        title,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );


    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
};

swiftCtrl.updateRole = async (req, res) => {

  const { id, title } = req.body;


  try {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/updaterole`,

      {
        id,
        title,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
  // } else {
  //   res.redirect("/login");
  // }
};

// swiftCtrl.showMenus = async (req, res) => {
//   try {
//     let { data } = await axios.post(
//       `http://162.240.67.159:7000/swiftapp/v1/ums/menus`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     // res.render("menus", {
//     //   list: data.Data,
//     //   userDetail: req.session,
//     //   layout: "main.hbs",
//     //   tt: "menus",
//     // });
//     res.json(data.Data);
//   } catch (error) {
//     res.send(error.response.data);
//   }
//   //res.render('main');
//   //res.send("<a href='viewmessages'>This is a PoC</a>");
// };

// swiftCtrl.newMenu = async (req, res) => {
//   res.render("addMenu", {
//     userDetail: req.session,
//     layout: "main.hbs",
//     tt: "menus",
//   });
// };

// swiftCtrl.newSubMenu = async (req, res) => {
//   res.render("addSubMenu", {
//     userDetail: req.session,
//     layout: "main.hbs",
//     tt: "submenu",
//   });
// };

// swiftCtrl.showMenu = async (req, res) => {
//   // if (req.session.user && req.cookies.user_sid) {
//   //   hbsContent.loggedin = true;
//   //   hbsContent.userName = req.session.user.username;

//   //   hbsContent.title = "You are logged in";
//   const { id } = req.params;
//   let processId = parseInt(id);

//   let { data } = await axios.post(
//     `http://162.240.67.159:7000/swiftapp/v1/ums/findmenu`,
//     {
//       id: processId,
//     }
//   );

//   const data1 = [data.Data];

//   res.render("menu", {
//     // hbsContent: {
//     //   loggedin: true,
//     //   userName: req.session.user.username,
//     //   title: "You are logged in",
//     // },
//     userDetail: req.session,
//     list: data1,
//     layout: "main.hbs",
//     tt: "menu",
//   });
// };

// swiftCtrl.addMenu = async (req, res) => {
//   // if (req.session.user && req.cookies.user_sid) {
//   //   hbsContent.loggedin = true;
//   //   hbsContent.userName = req.session.user.username;

//   //   hbsContent.title = "You are logged in";

//   // const uuid = suid(16);
//   // const finaluuid = uuid + unix;
//   const { title, url, icon } = req.body;

//   // const bid = parseInt(isBasedId);

//   try {
//     const { data } = await axios.post(
//       `http://162.240.67.159:7000/swiftapp/v1/ums/createmenu`,
//       {
//         title,
//         url,
//         icon,
//         isBaseId: 0,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     res.json(data);
//   } catch (error) {
//     res.send(error.response.data);
//   }
//   // } else {
//   //   res.redirect("/login");
//   // }
// };

// swiftCtrl.addSubMenu = async (req, res) => {
//   // if (req.session.user && req.cookies.user_sid) {
//   //   hbsContent.loggedin = true;
//   //   hbsContent.userName = req.session.user.username;

//   //   hbsContent.title = "You are logged in";

//   // const uuid = suid(16);
//   // const finaluuid = uuid + unix;
//   const { title, url, icon, id } = req.body;

//   // const bid = parseInt(isBasedId);

//   try {
//     const { data } = await axios.post(
//       `http://162.240.67.159:7000/swiftapp/v1/ums/createmenu`,
//       {
//         id,
//         title,
//         url,
//         icon,
//         isBaseId: 1,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     res.json(data);
//   } catch (error) {
//     res.send(error.response.data);
//   }
//   // } else {
//   //   res.redirect("/login");
//   // }
// };

// swiftCtrl.updateMenu = async (req, res) => {
//   // if (req.session.user && req.cookies.user_sid) {
//   //   hbsContent.loggedin = true;
//   //   hbsContent.userName = req.session.user.username;

//   //   hbsContent.title = "You are logged in";

//   const { id, title, url, icon } = req.body;

//   // const bid = parseInt(isBasedId);


//   try {
//     let { data } = await axios.post(
//       `http://162.240.67.159:7000/swiftapp/v1/ums/updatemenu`,

//       {
//         id,
//         title,
//         url,
//         icon,
//         isBaseId: 0,
//       },

//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );


//     res.json(data);
//   } catch (error) {
//     res.send(error.response.data);
//   }
//   // } else {
//   //   res.redirect("/login");
//   // }
// };

swiftCtrl.showRoleMenus = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/rolemenus");
  if (dat.length > 0) {
    let data1 = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/roles`
    );
    let data2 = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/menus`
    );
    const dd = flattenArr(data2.data.Data);

    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/rolemenu`
    );
    res.render("roleMenus", {
      userDetail: req.session,
      list1: data1.data.Data,
      list2: dd,
      list: data.Data,

      layout: "main.hbs",
      tt: "roleMenus",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

// swiftCtrl.newRoleMenu = async (req, res) => {
//   const d = flattenArr(req.session.menus);
//   d.filter(async (mn) => {
//     if (mn.url !== "/settings/newrole") {
//       res.render("noaccess", {
//         userDetail: req.session,
//         layout: "main.hbs",
//         tt: "no access",
//       });
//     } else {
//       res.render("addRoleMenu", {
//         userDetail: req.session,
//         layout: "main.hbs",
//         tt: "addRoleMenu",
//       });
//     }
//   });

// };

swiftCtrl.deleteRoleMenu = async (req, res) => {
  const { id } = req.body;
  // let processId = parseInt(id);

  try {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/deleterolemenu`,
      {
        id: id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
};

swiftCtrl.showRoleMenu = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/rolemenus");
  if (dat.length > 0) {
    const { id } = req.params;
    let data2 = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/menus`
    );

    const dd = flattenArr(data2.data.Data);

    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/findrolemenu`,
      {
        id: id,
      }
    );

    res.render("roleMenu", {
      userDetail: req.session,
      list1: dd,
      roletitle: data.Data.title,
      roleid: data.Data.id,
      list: data.Data.menus,
      layout: "main.hbs",
      tt: "roleMenu",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.addRoleMenu = async (req, res) => {
  const { roleid, menuid } = req.body;


  try {
    const { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/createrolemenu`,
      {
        roleid,
        menuid,
        status: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
};

swiftCtrl.updateRoleMenu = async (req, res) => {

  const { id, roleid, menuid } = req.body;

  try {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/updaterolemenu`,

      {
        id,
        roleid,
        menuid,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
};

swiftCtrl.updateRoleMenuStatus = async (req, res) => {

  const { id, status } = req.body;


  try {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/updaterolemenu`,

      {
        id,
        status,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
};

// swiftCtrl.showUserMenus = async (req, res) => {
//   let data1 = await axios.post(
//     `http://162.240.67.159:7000/swiftapp/v1/users/fetchallusers`
//   );

//   let data2 = await axios.post(
//     `http://162.240.67.159:7000/swiftapp/v1/ums/menus`
//   );

//   const d = flattenArr(data2.data.Data);

//   let { data } = await axios.post(
//     `http://162.240.67.159:7000/swiftapp/v1/ums/usermenu`
//   );


//   res.render("userMenus", {
//     userDetail: req.session,
//     list1: data1.data,
//     list2: d,
//     list: data.Data,
//     layout: "main.hbs",
//     tt: "userMenus",
//   });
//   //res.render('main');
//   //res.send("<a href='viewmessages'>This is a PoC</a>");
// };

// swiftCtrl.newUserMenu = async (req, res) => {
//   res.render("addUserMenu", {
//     userDetail: req.session,
//     layout: "main.hbs",
//     tt: "addUserMenu",
//   });
// };

// swiftCtrl.showUserMenu = async (req, res) => {
//   // if (req.session.user && req.cookies.user_sid) {
//   //   hbsContent.loggedin = true;
//   //   hbsContent.userName = req.session.user.username;

//   //   hbsContent.title = "You are logged in";
//   const { username } = req.params;
//   // let processId = parseInt(id);

//   let data2 = await axios.post(
//     `http://162.240.67.159:7000/swiftapp/v1/ums/menus`
//   );

//   const d = flattenArr(data2.data.Data);

//   let { data } = await axios.post(
//     `http://162.240.67.159:7000/swiftapp/v1/ums/findusermenu`,
//     {
//       username: username,
//     }
//   );

//   const data1 = [data.Data];

//   res.render("userMenu", {
//     // hbsContent: {
//     //   loggedin: true,
//     //   userName: req.session.user.username,
//     //   title: "You are logged in",
//     // },
//     userDetail: req.session,
//     list1: d,
//     usernm: data.Data.username,
//     user: data.Data.username,
//     userID: data.Data.userID,
//     list: data.Data.menus,
//     layout: "main.hbs",
//     tt: "userMenu",
//   });
// };

// swiftCtrl.addUserMenu = async (req, res) => {
//   const { userID, menuid } = req.body;


//   try {
//     const { data } = await axios.post(
//       `http://162.240.67.159:7000/swiftapp/v1/ums/createusermenu`,
//       {
//         userID,
//         menuid,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     res.json(data);
//   } catch (error) {
//     res.send(error.response.data);
//   }
// };

// swiftCtrl.updateUserMenuAccess = async (req, res) => {

//   const { id, accessType } = req.body;

//   try {
//     let { data } = await axios.post(
//       `http://162.240.67.159:7000/swiftapp/v1/ums/updateusermenu`,

//       {
//         id,
//         accessType,
//       },

//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     res.json(data);
//   } catch (error) {
//     res.send(error.response.data);
//   }
//   // } else {
//   //   res.redirect("/login");
//   // }
// };

// swiftCtrl.updateUserMenuStatus = async (req, res) => {

//   const { id, status } = req.body;

//   try {
//     let { data } = await axios.post(
//       `http://162.240.67.159:7000/swiftapp/v1/ums/updateusermenu`,

//       {
//         id,
//         status,
//       },

//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     res.json(data);
//   } catch (error) {
//     res.send(error.response.data);
//   }
// };

// swiftCtrl.deleteUserMenu = async (req, res) => {
//   const { id } = req.body;
//   // let processId = parseInt(id);


//   try {
//     let { data } = await axios.post(
//       `http://162.240.67.159:7000/swiftapp/v1/ums/deleteusermenu`,
//       {
//         id: id,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );


//     res.json(data);
//   } catch (error) {
//     res.send(error.response.data);
//   }
// };

swiftCtrl.showAuths = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/auths");
  if (dat.length > 0) {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/getoath`
    );

    let data1 = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/getldap`
    );

    res.render("auths", {
      userDetail: req.session,
      list: data,
      list1: data1.data,
      layout: "main.hbs",
      tt: "auths",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.updateOauth = async (req, res) => {

  const { id, url, apikey, secret, redirect_uri, enabled } = req.body;


  try {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/updateoath`,

      {
        id,
        url,
        apikey,
        secret,
        redirect_uri,
        enabled,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
  // } else {
  //   res.redirect("/login");
  // }
};

swiftCtrl.updateLdap = async (req, res) => {

  const { id, ldap_url, ldap_user, ldap_password, ldap_domain, enabled } =
    req.body;


  try {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/updateldap`,

      {
        id,
        ldap_url,
        ldap_user,
        ldap_password,
        ldap_domain,
        enabled,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
  // } else {
  //   res.redirect("/login");
  // }
};

swiftCtrl.showNoticegw = async (req, res) => {
  const d = flattenArr(req.session.menus);
  d.filter(async (mn) => {
    if (mn.url !== "/settings/noticegw") {
      res.render("noaccess", {
        userDetail: req.session,
        layout: "main.hbs",
        tt: "no access",
      });
    } else {
      let data1 = await axios.post(
        `http://162.240.67.159:7000/swiftapp/v1/settings/allsmsgateway`
      );

      let { data } = await axios.post(
        `http://162.240.67.159:7000/swiftapp/v1/settings/getsmtp`
      );

      res.render("noticegw", {
        userDetail: req.session,
        isSms: data1.data.Data.length,
        list: data,
        list1: data1.data.Data,
        layout: "main.hbs",
        tt: "noticegw",
      });
    }
  });
};

swiftCtrl.updateNotification = async (req, res) => {
  const {
    id,
    smtpHost,
    smtpPort,
    smtpTLS,
    smtpUser,
    smtpPass,
    smtpFrom,
    enabled,
  } = req.body;


  try {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/updatesmtp`,

      {
        id,
        smtpHost,
        smtpPort,
        smtpTLS,
        smtpUser,
        smtpPass,
        smtpFrom,
        enabled,
      },

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
};

swiftCtrl.showMsgtable = async (req, res) => {
  // res.render('msgtable',{layout:"formwizard",tt: 'noticegw', data: JSON.stringify(finaldata)});
  res.render("msgtable", {
    layout: "formwizard",
    userDetail: req.session,
    tt: "noticegw",
  });
};

swiftCtrl.showAddalertProfile = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/profiles");
  if (dat.length > 0) {
    const { email } = req.params;

    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/singleprofile`,
      {
        id: email,
      }
    );
    const data1 = [data.Data];
    res.render("addalertprofile", {
      userDetail: req.session,
      list: data1,
      layout: "main.hbs",
      mtdata: lib.getMTs(),
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.showNewalertProfile = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/newprofile");
  if (dat.length > 0) {
    res.render("newalertprofile", {
      userDetail: req.session,
      layout: "main.hbs",
      mtdata: lib.getMTs(),
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.showAddAlertProfiles = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/profiles");
  if (dat.length > 0) {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/allprofile`
    );

    res.render("alertprofiles", {
      userDetail: req.session,
      list: data.Data,
      pagename: "alert/profiles",
      layout: "main.hbs",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.addAlert = async (req, res) => {
  const {
    CustomerName,
    email,
    sms,
    account_number,
    idMsgType,
    idFlow,
    message_template,
    internal_alert_email,
    idalert_type,
    status,
  } = req.body;

  try {
    const { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/createprofile`,
      {
        CustomerName,
        email,
        sms,
        account_number,
        idMsgType,
        idFlow,
        message_template,
        internal_alert_email,
        idalert_type,
        status,
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
};

swiftCtrl.updateAlert = async (req, res) => {

  const {
    id,
    CustomerName,
    email,
    sms,
    account_number,
    idMsgType,
    idFlow,
    message_template,
    internal_alert_email,
    idalert_type,
    status,
  } = req.body;

  try {
    const { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/updateprofile`,
      {
        id,
        CustomerName,
        email,
        sms,
        account_number,
        idMsgType,
        idFlow,
        message_template,
        internal_alert_email,
        idalert_type,
        status,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
};

swiftCtrl.fetchTemplate = async (req, res) => {
  

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


  res.send(jsondata);

};

// swiftCtrl.showSmsgateways = async (req, res) => {

//   let { data } = await axios.post(
//     `http://162.240.67.159:7000/swiftapp/v1/settings/allsmsgateway`
//   );
//   res.render("smsgateways", {
//     userDetail: req.session,
//     list: data.Data,
//     pagename: "Sms Gateways",
//     layout: "main.hbs",
//   });
// };

// swiftCtrl.showNewSmsgateway = async (req, res) => {
//   // if (req.session.user && req.cookies.user_sid) {
//   //   hbsContent.loggedin = true;
//   //   hbsContent.userName = req.session.user.username;

//   res.render("addsmsgateway", {
//     // hbsContent: {
//     //   loggedin: true,
//     //   userName: req.session.user.username,
//     //   title: "You are logged in",
//     // },
//     userDetail: req.session,
//     pagename: "Sms Gateway",
//     layout: "main.hbs",
//   });

//   // } else {
//   //   res.redirect("/login");
//   // }
// };

swiftCtrl.showSmsgateway = async (req, res) => {
  // if (req.session.user && req.cookies.user_sid) {
  //   hbsContent.loggedin = true;
  //   hbsContent.userName = req.session.user.username;

  //   hbsContent.title = "You are logged in";
  const { id } = req.params;
  let processId = parseInt(id);

  let { data } = await axios.post(
    `http://162.240.67.159:7000/swiftapp/v1/settings/allsmsgateway`,
    {
      id: processId,
    }
  );
  // const data1 = data.Data;
  const data1 = [];

  res.render("smsgateway", {
    // hbsContent: {
    //   loggedin: true,
    //   userName: req.session.user.username,
    //   title: "You are logged in",
    // },
    userDetail: req.session,
    list: data1,
    pagename: "Sms Gateway",
    layout: "main.hbs",
  });

  // } else {
  //   res.redirect("/login");
  // }
};

swiftCtrl.addSmsgateway = async (req, res) => {
  // if (req.session.user && req.cookies.user_sid) {
  //   hbsContent.loggedin = true;
  //   hbsContent.userName = req.session.user.username;

  //   hbsContent.title = "You are logged in";

  // const uuid = suid(16);
  // const finaluuid = uuid + unix;
  const { gateway, gatewayurl, gatewaykeys, gatewaypassword, balance } =
    req.body;


  try {
    const { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/createsmsgateway`,
      {
        gateway,
        gatewayurl,
        gatewaykeys,
        gatewaypassword,
        balance,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
  // } else {
  //   res.redirect("/login");
  // }
};

swiftCtrl.updateSmsgateway = async (req, res) => {
  const {
    id,
    gateway,
    gatewayurl,
    gatewaykeys,
    gatewaypassword,
    balance,
    status,
  } = req.body;


  try {
    const { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/settings/updatesmtp`,
      {
        id,
        gateway,
        gatewayurl,
        gatewaykeys,
        gatewaypassword,
        balance,
        status,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
};

swiftCtrl.addUser = async (req, res) => {
  const { fullname, username, phone, email, role } = req.body;


  try {
    const { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/users/create`,
      {
        fullname,
        username,
        phone,
        email,
        roleid: role,
        password: "CAL.1234",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
};

swiftCtrl.updateUser = async (req, res) => {
  const { fullname, username, phone, email, role } = req.body;


  try {
    const { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/users/updateuser`,
      {
        fullname,
        username,
        phone,
        email,
        roleid: role,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.json(data);
  } catch (error) {
    res.send(error.response.data);
  }
};

swiftCtrl.showUsers = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/users");
  if (dat.length > 0) {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/users/fetchallusers`
    );

    res.render("users", {
      userDetail: req.session,
      list: data,
      pagename: "users",
      layout: "main.hbs",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

swiftCtrl.newUser = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/newuser");
  if (dat.length > 0) {
    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/roles`
    );
    res.render("newuser", {
      userDetail: req.session,
      list: data.Data,
      pagename: "user",
      layout: "main.hbs",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

// swiftCtrl.showMyDetail = async (req, res) => {
//   const data = [req.session];
//   res.render("users/mydetail", {
//     list: data,
//     pagename: "profile",
//     layout: "main.hbs",
//   });
// };

swiftCtrl.showUserDetail = async (req, res) => {
  const d = flattenArr(req.session.menus);
  let dat = await d.filter((mn) => mn.url === "/settings/users");
  if (dat.length > 0) {
    let data1 = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/ums/roles`
    );

    const { email } = req.params;

    let { data } = await axios.post(
      `http://162.240.67.159:7000/swiftapp/v1/users/find`,
      {
        email: email,
      }
    );

    res.render("userdetail", {
      userDetail: req.session,
      list: data.Data,
      list1: data1.data.Data,
      pagename: "profile",
      layout: "main.hbs",
    });
  } else {
    res.render("noaccess", {
      userDetail: req.session,
      layout: "main.hbs",
      tt: "no access",
    });
  }
};

module.exports = swiftCtrl;
