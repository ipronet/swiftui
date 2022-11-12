$("#create_role_menu").click(function () {
  var role_id = $("#role_id").val();

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

$("#update_role_menu").click(function () {
  var id = $("#id ").val();
  var role_id = $("#role_id").val();

  var menu_id = $("#menu_id").val();

  if (role_id == "" || menu_id == "") {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Field cannot be empty!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    let url = "/settings/updaterolemenu";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        id: id,
        roleid: role_id,

        menuid: menu_id,
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

function update_rolemenu_statusinactive(rolemenuid) {
  const rlm = document.getElementById("rolemenu_id");


  if (rolemenuid) {
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
    let url = "/settings/updaterolemenustatus";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        id: rolemenuid,
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
                window.location.replace(`/settings/rolemenu/${rlm.value}`);
              } else {
                window.location.replace(`/settings/rolemenu/${rlm.value}`);
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

function update_rolemenu_statusactive(rolemenuid) {
  const rlm = document.getElementById("rolemenu_id");


  if (rolemenuid) {
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
    let url = "/settings/updaterolemenustatus";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        id: rolemenuid,
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
                window.location.replace(`/settings/rolemenu/${rlm.value}`);
              } else {
                window.location.replace(`/settings/rolemenu/${rlm.value}`);
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

function delete_role_menu_click(rolemenuid) {
  const rlem = document.getElementById("rolemenu_id");


  if (rolemenuid) {
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
          let url = "/settings/deleterolemenu";

          $.ajax({
            url: url,

            method: "POST",

            dataType: "json",

            cache: false,

            contentType: "application/json",

            data: JSON.stringify({
              id: rolemenuid,
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
                        `/settings/rolemenu/${rlem.value}`
                      );
                    } else {
                      window.location.replace(
                        `/settings/rolemenu/${rlem.value}`
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
