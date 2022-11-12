$("#create_user_menu").click(function () {
  var user_id = $("#user_id").val();

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

          swal({
            icon: "success",

            title: "Success",

            text: res.Message,

            footer: "<a href>Why do I have this issue?</a>",
          });
          window.location.replace("/settings/usermenus");
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

$("#update_user_menu").click(function () {
  var id = $("#id").val();
  var user_id = $("#user_id").val();

  var menu_id = $("#menu_id").val();

  if (user_id == "" || menu_id == "") {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Field cannot be empty!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    let url = "/settings/updateusermenu";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        id: id,
        userID: user_id,

        menuid: menu_id,
      }),
      success: function (res) {
        $("#loader").hide();


        if (res.Status == 1) {
          // window.location.replace("/settings/usermenus");
          // $("form").trigger("reset");

          swal({
            icon: "success",

            title: "Success",

            text: res.Message,

            footer: "<a href>Why do I have this issue?</a>",
          });
          window.location.replace("/settings/usermenus");
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

function update_useemenu_accessinactive(usermenuid) {
  const usm = document.getElementById("user");


  if (usermenuid) {
    // swal(
    //   {
    //     title: "Are you sure?",
    //     text: "You will not be able to recover this imaginary file!",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#DD6B55",
    //     confirmButtonText: "Yes, delete it!",
    //     cancelButtonText: "No, cancel plx!",
    //     closeOnConfirm: false,
    //     closeOnCancel: false,
    //   },
    //   function (isConfirm) {
    //     if (isConfirm) {
    let url = "/settings/updateusermenuaccess";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        id: usermenuid,
        accessType: 1,
      }),
      success: function (res) {
        $("#loader").hide();


        if (res.Status == 1) {
          // window.location.replace("/settings/rolemenus");
          // $("form").trigger("reset");

          swal(
            {
              title: "Upaded!",
              text: "Menu is accessible now.",
              type: "success",
            },
            function (isConfirm) {
              if (isConfirm) {
                window.location.replace(`/settings/usermenu/${usm.value}`);
              } else {
                window.location.replace(`/settings/usermenus/${usm.value}`);
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
    // } else {
    //   swal("Cancelled", "Your imaginary file is safe :)", "error");
    // }
    // }
    // );
  }
}

function update_useemenu_accessactive(usermenuid) {
  const usm = document.getElementById("user");


  if (usermenuid) {
    // swal(
    //   {
    //     title: "Are you sure?",
    //     text: "You will not be able to recover this imaginary file!",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#DD6B55",
    //     confirmButtonText: "Yes, delete it!",
    //     cancelButtonText: "No, cancel plx!",
    //     closeOnConfirm: false,
    //     closeOnCancel: false,
    //   },
    //   function (isConfirm) {
    //     if (isConfirm) {
    let url = "/settings/updateusermenuaccess";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        id: usermenuid,
        accessType: 0,
      }),
      success: function (res) {
        $("#loader").hide();


        if (res.Status == 1) {
          // window.location.replace("/settings/rolemenus");
          // $("form").trigger("reset");

          swal(
            {
              title: "Upaded!",
              text: "Menu is inaccessible now.",
              type: "success",
            },
            function (isConfirm) {
              if (isConfirm) {
                window.location.replace(`/settings/usermenu/${usm.value}`);
              } else {
                window.location.replace(`/settings/usermenu/${usm.value}`);
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
    // } else {
    //   swal("Cancelled", "Your imaginary file is safe :)", "error");
    // }
    // }
    // );
  }
}

function update_useemenu_statusinactive(usermenuid) {
  const usm = document.getElementById("user");

 

  if (usermenuid) {
    // swal(
    //   {
    //     title: "Are you sure?",
    //     text: "You will not be able to recover this imaginary file!",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#DD6B55",
    //     confirmButtonText: "Yes, delete it!",
    //     cancelButtonText: "No, cancel plx!",
    //     closeOnConfirm: false,
    //     closeOnCancel: false,
    //   },
    //   function (isConfirm) {
    //     if (isConfirm) {
    let url = "/settings/updateusermenustatus";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        id: usermenuid,
        status: 1,
      }),
      success: function (res) {
        $("#loader").hide();


        if (res.Status == 1) {
          // window.location.replace("/settings/rolemenus");
          // $("form").trigger("reset");

          swal(
            {
              title: "Upaded!",
              text: "Menu status is active now.",
              type: "success",
            },
            function (isConfirm) {
              if (isConfirm) {
                window.location.replace(`/settings/usermenu/${usm.value}`);
              } else {
                window.location.replace(`/settings/usermenu/${usm.value}`);
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
    // } else {
    //   swal("Cancelled", "Your imaginary file is safe :)", "error");
    // }
    // }
    // );
  }
}

function update_useemenu_statusactive(usermenuid) {
  const usm = document.getElementById("user");


  if (usermenuid) {
    // swal(
    //   {
    //     title: "Are you sure?",
    //     text: "You will not be able to recover this imaginary file!",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#DD6B55",
    //     confirmButtonText: "Yes, delete it!",
    //     cancelButtonText: "No, cancel plx!",
    //     closeOnConfirm: false,
    //     closeOnCancel: false,
    //   },
    //   function (isConfirm) {
    //     if (isConfirm) {
    let url = "/settings/updateusermenustatus";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        id: usermenuid,
        status: 0,
      }),
      success: function (res) {
        $("#loader").hide();


        if (res.Status == 1) {
          // window.location.replace("/settings/rolemenus");
          // $("form").trigger("reset");

          swal(
            {
              title: "Upaded!",
              text: "Menu status is inactive now.",
              type: "success",
            },
            function (isConfirm) {
              if (isConfirm) {
                window.location.replace(`/settings/usermenu/${usm.value}`);
              } else {
                window.location.replace(`/settings/usermenus/${usm.value}`);
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
    // } else {
    //   swal("Cancelled", "Your imaginary file is safe :)", "error");
    // }
    // }
    // );
  }
}

function delete_click(usermenuid) {
  const usm = document.getElementById("user");


  if (usermenuid) {
    swal(
      {
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel plx!",
        closeOnConfirm: false,
        closeOnCancel: false,
      },
      function (isConfirm) {
        if (isConfirm) {
          let url = "/settings/deleteusermenu";

          $.ajax({
            url: url,

            method: "POST",

            dataType: "json",

            cache: false,

            contentType: "application/json",

            data: JSON.stringify({
              id: usermenuid,
            }),
            success: function (res) {
              $("#loader").hide();


              if (res.Status == 1) {
                // window.location.replace("/settings/rolemenus");
                // $("form").trigger("reset");

                swal(
                  {
                    title: "Deleted!",
                    text: "Your imaginary file has been deleted.",
                    type: "success",
                  },
                  function (isConfirm) {
                    if (isConfirm) {
                      window.location.replace(
                        `/settings/usermenu/${usm.value}`
                      );
                    } else {
                      window.location.replace(
                        `/settings/usermenus/${usm.value}`
                      );
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
        } else {
          swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
      }
    );
  }
}
