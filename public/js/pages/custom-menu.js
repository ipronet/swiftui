// let axios = require("axios");

// var customMenu = document.getElementById("custom--menu");
// const menus = [
//   {
//     menuName: "Dashboard",
//     isParent: false,
//     isRoot: true,
//     route: "/swift/",
//     icon: "settings_input_svideo",
//   },
//   {
//     menuName: "Settings",
//     isParent: true,
//     isRoot: true,
//     route: "#",
//     icon: "settings",
//     menus: [
//       {
//         menuName: "Company",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/company/",
//         icon: "",
//       },
//       {
//         menuName: "Authentication",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/auths",
//         icon: "",
//       },
//       {
//         menuName: "Add Path",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/newpath",
//         icon: "",
//       },
//       {
//         menuName: "Manage Paths",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/paths",
//         icon: "",
//       },
//       {
//         menuName: "Notification Gateway",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/noticegw",
//         icon: "",
//       },
//     ],
//   },
//   {
//     menuName: "Manage Users",
//     isParent: true,
//     isRoot: true,
//     route: "#",
//     icon: "people_outline",
//     menus: [
//       {
//         menuName: "Add Role",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/newrole",
//         icon: "",
//       },
//       {
//         menuName: "Manage Roles",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/roles",
//         icon: "",
//       },
//       {
//         menuName: "Add User",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/newuser",
//         icon: "",
//       },
//       {
//         menuName: "Manage User",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/users",
//         icon: "",
//       },
//       {
//         menuName: "Role Menus",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/rolemenus",
//         icon: "",
//       },
//       {
//         menuName: "User Menus",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/usermenus",
//         icon: "",
//       },
//     ],
//   },
//   {
//     menuName: "Alert Profiles",
//     isParent: true,
//     isRoot: true,
//     route: "#",
//     icon: "notifications",
//     menus: [
//       {
//         menuName: "Add Profile",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/newprofile",
//         icon: "",
//       },
//       {
//         menuName: "Manage Profiles",
//         isParent: false,
//         isRoot: false,
//         route: "/settings/profiles",
//         icon: "",
//       },
//     ],
//   },
//   // {
//   //   menuName: "Sms Gateways",
//   //   isParent: true,
//   //   isRoot: true,
//   //   route: "#",
//   //   icon: "textsms",
//   //   menus: [
//   //     {
//   //       menuName: "Add Gateway",
//   //       isParent: false,
//   //       isRoot: false,
//   //       route: "/settings/newsmsgateway",
//   //       icon: "",
//   //     },
//   //     {
//   //       menuName: "Manage Gateways",
//   //       isParent: false,
//   //       isRoot: false,
//   //       route: "/settings/smsgateways",
//   //       icon: "",
//   //     },
//   //   ],
//   // },
//   {
//     menuName: "SWIFT Messages",
//     isParent: true,
//     isRoot: true,
//     route: "#",
//     icon: "mail",
//     menus: [
//       {
//         menuName: "Create Headers",
//         isParent: false,
//         isRoot: false,
//         route: "/swift/messagetypesh",
//         icon: "",
//       },
//       {
//         menuName: "Update Headers",
//         isParent: false,
//         isRoot: false,
//         route: "/swift/messagetypeshu",
//         icon: "",
//       },
//       {
//         menuName: "Messages",
//         isParent: false,
//         isRoot: false,
//         route: "/swift/messagetypes",
//         icon: "",
//       },
//     ],
//   },
// ];

// if (menus) {
//   menus.forEach((menu) => {
//     addMenu(menu);
//   });
// }

// async function addMenu(req, res) {
// // let response = fetch(`http://162.240.67.159:7000/swiftapp/v1/ums/menus`); //api for the get request
// // .then(response => response.json())
// // .then(data => console.log(data));
// let { data } = await axios.get(
//   `http://162.240.67.159:7000/swiftapp/v1/ums/menus`
// );
// console.log(data);
// console.log(req.session);
// let dataMenu = [];
// let url = "/settings/menus";
// await $.ajax({
//   url: url,
//   method: "GET",
//   dataType: "json",
//   cache: false,
//   contentType: "application/json",
//   success: function async(res) {
//     // $("#loader").hide();
//     console.log(res);
//     // dataMenu = res;
//     // console.log(dataMenu);
//     // if (dataMenu.length > 1) {
//     // }
//   },
// });
// var dataMenu = [];
// const getData = async () => {
//   let url = "/settings/menus";
//   $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     cache: false,
//     contentType: "application/json",
//     success: async function (res) {
//       // $("#loader").hide();
//       // await console.log(res);
//       dataMenu = res;
//       return;
//       // console.log(dataMenu);
//       // if (dataMenu.length > 1) {
//       // }
//     },
//   });
// };
// await getData();
// console.log(dataMenu);
//   customMenu.innerHTML = `
// //   <ul class="sidebar-menu collapsible collapsible-accordion" data-collapsible="accordion">
// //   ${menus
// //     .map((menu) =>
// //       !menu.isParent
// //         ? `<li class="no-padding active"><a class="waves-effect waves-grey active" href=${menu.route}><i class="material-icons">${menu.icon}</i>${menu.menuName}</a></li>`
// //         : `<li class="no-padding">
// //   <a class="collapsible-header waves-effect waves-grey"><i class="material-icons">${
// //     menu.icon
// //   }</i>${
// //             menu.menuName
// //           }<i class="nav-drop-icon material-icons">keyboard_arrow_right</i></a>
// //   <div class="collapsible-body">
// //       <ul>
// //           ${menu.menus
// //             .map(
// //               (data) => `<li><a href=${data.route}>${data.menuName}</a></li>`
// //             )
// //             .join("")}
// //       </ul>
// //   </div>
// // </li>`
// //     )
// //     .join("")}
// //   </ul>
//   `;
// }

// addMenu();
