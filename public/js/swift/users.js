$("#add_user").click(function () {
  var fullname = $("#fullname").val();

  var username = $("#username").val();

  var email = $("#email").val();
  var phone = $("#phone").val();
  var role = $("#role").val();


  var emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  var phoneReg =
    /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  var password = $("#password").val();

  if (
    fullname == "" ||
    username == "" ||
    email == "" ||
    phone == "" ||
    role == ""
    // password == ""
  ) {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Field cannot be empty!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else if (emailReg.test(email) == false) {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Email is not valid!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else if (phoneReg.test(phone) == false) {
    swal({
      icon: "error",
      title: "Oops...",
      text: "Phone number is not valid!",
      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    let url = "/settings/adduser";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        fullname: fullname,

        username: username,

        email: email,

        // password: password,

        phone: phone,

        role: role,
      }),
      success: function (res) {
        $("#loader").hide();


        if (res.success == 1) {
          $("form").trigger("reset");

          swal({
            icon: "success",

            title: "Success",

            text: res.message,

            footer: "<a href>Why do I have this issue?</a>",
          });
          window.location.replace("/settings/users");
        } else {
          swal({
            icon: "error",

            title: "Sorry...",

            text: res.message,

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

$("#update_user").click(function () {
  var fullname = $("#fullname").val();

  var username = $("#username").val();

  var email = $("#email").val();
  var phone = $("#phone").val();
  // var id = $("#id").val();
  var role = $("#role").val();


  var emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  var phoneReg =
    /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  var password = $("#password").val();

  if (
    fullname == "" ||
    username == "" ||
    email == "" ||
    phone == "" ||
    role == ""
  ) {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Field cannot be empty!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else if (emailReg.test(email) == false) {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Email is not valid!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else if (phoneReg.test(phone) == false) {
    swal({
      icon: "error",
      title: "Oops...",
      text: "Phone number is not valid!",
      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    let url = "/settings/updateuser";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        fullname: fullname,

        username: username,

        email: email,

        phone: phone,

        role: role,
      }),
      success: function (res) {
        $("#loader").hide();


        if (res.success == 1) {
          $("form").trigger("reset");

          swal({
            icon: "success",

            title: "Success",

            text: res.message,

            footer: "<a href>Why do I have this issue?</a>",
          });
          window.location.replace("/settings/users");
        } else {
          swal({
            icon: "error",

            title: "Sorry...",

            text: res.message,

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

$("#update_password").click(function () {
  var id = $("#id").val();

  var old_password = $("#old_password").val();
  var new_password = $("#new_password").val();

  if (id == "" || old_password == "" || new_password == "") {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Field cannot be empty!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    let url = "/auth/updatepass";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        id: id,
        old_password: old_password,
        new_password: new_password,
      }),
      success: function (res) {
        $("#loader").hide();


        if (res.success == 1) {
          window.location.replace("/swift");
          // $("form").trigger("reset");

          // swal({
          //   icon: "success",

          //   title: "Success",

          //   text: res.message,

          //   footer: "<a href>Why do I have this issue?</a>",
          // }).then((value) => {
          //   window.location.replace("/settings/paths");
          // });
        } else {
          swal({
            icon: "error",

            title: "Sorry...",

            text: res.message,

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
