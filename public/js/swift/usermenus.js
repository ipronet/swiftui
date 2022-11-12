$("#create_user_submenu").click(function () {
  var user_id = $("#user_id").val();
  var user = $("#user").val();

  var menu_id = $("#menu_id").val();

  if (user_id == "" || menu_id == "") {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Field cannot be empty!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    let url = "/settings/addusermenu";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        userID: user_id,

        menuid: menu_id,
      }),
      success: function (res) {
        $("#loader").hide();


        if (res.Status == 1) {
          // $("form").trigger("reset");

          swal(
            {
              icon: "success",
              title: "Success!",
              text: res.Message,
              type: "success",
            },
            function (isConfirm) {
              if (isConfirm) {
                window.location.replace(`/settings/usermenu/${user}`);
              } else {
                window.location.replace(`/settings/usermenu/${user}`);
              }
            }
          );
        } else {
          swal({
            icon: "error",

            title: "Sorry...",

            text: res.Message,

            footer: "<a href>Why do I have this issue?</a>",
          }).then((value) => {
          });
        }
      },
      error: function (xhr, status, error) {
        $("#loader").hide();


        if (xhr.readyState == 4) {
          // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)

          var err = JSON.parse(xhr.responseText);

          $("form").trigger("reset");

          swal({
            icon: "error",

            title: "Ooops...",

            text: err.message,

            footer: "<a href>Why do I have this issue?</a>",
          });
        } else if (xhr.readyState == 0) {
          // Network error (i.e. connection refused, access denied due to CORS, etc.)

          $("form").trigger("reset");

          swal({
            icon: "error",

            title: "Ooops...",

            text: "Network error (i.e. connection refused, access denied due to CORS, etc.)",

            footer: "<a href>Why do I have this issue?</a>",
          });
        } else {
          // something weird is happening

          $("form").trigger("reset");

          swal({
            icon: "error",

            title: "Ooops...",

            text: "something weird is happening",

            footer: "<a href>Why do I have this issue?</a>",
          });
        }
      },
    });
  }
});

// $("#update_user_menu").click(function () {
//   var id = $("#id").val();
//   var user_id = $("#user_id").val();

//   var menu_id = $("#menu_id").val();

//   if (user_id == "" || menu_id == "") {
//     swal({
//       icon: "error",

//       title: "Oops...",

//       text: "Field cannot be empty!",

//       footer: "<a href>Why do I have this issue?</a>",
//     });
//   } else {
//     let url = "/settings/updateusermenu";

//     $.ajax({
//       url: url,

//       method: "POST",

//       dataType: "json",

//       cache: false,

//       contentType: "application/json",

//       data: JSON.stringify({
//         id: id,
//         userID: user_id,

//         menuid: menu_id,
//       }),
//       success: function (res) {
//         $("#loader").hide();


//         if (res.Status == 1) {
//           // window.location.replace("/settings/usermenus");
//           // $("form").trigger("reset");

//           swal({
//             icon: "success",

//             title: "Success",

//             text: res.Message,

//             footer: "<a href>Why do I have this issue?</a>",
//           });
//           window.location.replace("/settings/usermenus");
//         } else {
//           swal({
//             icon: "error",

//             title: "Sorry...",

//             text: res.Message,

//             footer: "<a href>Why do I have this issue?</a>",
//           }).then((value) => {
//           });
//         }
//       },
//       error: function (xhr, status, error) {
//         $("#loader").hide();


//         if (xhr.readyState == 4) {
//           // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)

//           var err = JSON.parse(xhr.responseText);

//           $("form").trigger("reset");

//           swal({
//             icon: "error",

//             title: "Ooops...",

//             text: err.message,

//             footer: "<a href>Why do I have this issue?</a>",
//           });
//         } else if (xhr.readyState == 0) {
//           // Network error (i.e. connection refused, access denied due to CORS, etc.)

//           $("form").trigger("reset");

//           swal({
//             icon: "error",

//             title: "Ooops...",

//             text: "Network error (i.e. connection refused, access denied due to CORS, etc.)",

//             footer: "<a href>Why do I have this issue?</a>",
//           });
//         } else {
//           // something weird is happening

//           $("form").trigger("reset");

//           swal({
//             icon: "error",

//             title: "Ooops...",

//             text: "something weird is happening",

//             footer: "<a href>Why do I have this issue?</a>",
//           });
//         }
//       },
//     });
//   }
// });

$("#delete_user_menu").click(function () {
  var id = $("#usermenu_id").val();


  if (id == "") {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Field cannot be empty!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    let url = "/settings/deleteusermenu";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        id: id,
      }),
      success: function (res) {
        $("#loader").hide();


        if (res.Status == 1) {
          // window.location.replace("/settings/rolemenus");
          // $("form").trigger("reset");

          swal({
            icon: "success",

            title: "Success",

            text: res.Message,

            footer: "<a href>Why do I have this issue?</a>",
          });
          // window.location.replace("/settings/usermenus");
        } else {
          swal({
            icon: "error",

            title: "Sorry...",

            text: res.Message,

            footer: "<a href>Why do I have this issue?</a>",
          }).then((value) => {
          });
        }
      },
      error: function (xhr, status, error) {
        $("#loader").hide();


        if (xhr.readyState == 4) {
          // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)

          var err = JSON.parse(xhr.responseText);

          $("form").trigger("reset");

          swal({
            icon: "error",

            title: "Ooops...",

            text: err.message,

            footer: "<a href>Why do I have this issue?</a>",
          });
        } else if (xhr.readyState == 0) {
          // Network error (i.e. connection refused, access denied due to CORS, etc.)

          $("form").trigger("reset");

          swal({
            icon: "error",

            title: "Ooops...",

            text: "Network error (i.e. connection refused, access denied due to CORS, etc.)",

            footer: "<a href>Why do I have this issue?</a>",
          });
        } else {
          // something weird is happening

          $("form").trigger("reset");

          swal({
            icon: "error",

            title: "Ooops...",

            text: "something weird is happening",

            footer: "<a href>Why do I have this issue?</a>",
          });
        }
      },
    });
  }
});
