$("#login_user").click(function () {
  var username = $("#username").val();
  var password = $("#password").val();


  if (username == "" || password == "") {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Field cannot be empty!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    let url = "/auth/login";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        username: username,
        password: password,
      }),
      success: function (res) {
        $("#loader").hide();
        window.location.replace("/swift");
      },
    });
  }
});

$("#mfa").click(function () {
  var value1 = $("#value1").val();
  var value2 = $("#value2").val();
  var answer = $("#answer").val();


  if (value1 == "" || value2 == "" || answer == "") {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Field cannot be empty!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    let url = "/auth/mauth";

    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        value1: value1,
        value2: value2,
        answer: answer,
      }),
      success: function (res) {
        $("#loader").hide();
        // window.location.replace("/swift");
      },
    });
  }
});
