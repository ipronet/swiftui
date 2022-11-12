$("#create_role_submenu").click(function () {
  var role_id = $("#role_id").val();
  var role = $("#rolemenu_id").val();

  var menu_id = $("#menu_id").val();

  if (role_id == "" || menu_id == "") {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Field cannot be empty!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    let url = "/settings/addrolemenu";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        roleid: role_id,

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
                window.location.replace(`/settings/rolemenu/${role}`);
              } else {
                window.location.replace(`/settings/rolemenu/${role}`);
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

// $("#update_role_menu").click(function () {
//   var id = $("#id ").val();
//   var role_id = $("#role_id").val();

//   var menu_id = $("#menu_id").val();

//   if (role_id == "" || menu_id == "") {
//     swal({
//       icon: "error",

//       title: "Oops...",

//       text: "Field cannot be empty!",

//       footer: "<a href>Why do I have this issue?</a>",
//     });
//   } else {
//     let url = "/settings/updaterolemenu";

//     $.ajax({
//       url: url,

//       method: "POST",

//       dataType: "json",

//       cache: false,

//       contentType: "application/json",

//       data: JSON.stringify({
//         id: id,
//         roleid: role_id,

//         menuid: menu_id,
//       }),
//       success: function (res) {
//         $("#loader").hide();


//         if (res.Status == 1) {
//           // window.location.replace("/settings/rolemenus");
//           // $("form").trigger("reset");

//           swal({
//             icon: "success",

//             title: "Success",

//             text: res.Message,

//             footer: "<a href>Why do I have this issue?</a>",
//           });
//           window.location.replace("/settings/rolemenus");
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

$("#delete_role_menu").click(function () {
  var id = $("#rolemenu_id").val();


  if (id == "") {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Field cannot be empty!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    let url = "/settings/deleterolemenu";

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
          window.location.replace("/settings/rolemenus");
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
