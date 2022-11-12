$("#update_smtp").click(function () {
  var idsettings_sms = $("#idsettings_sms").val();
  var smtpHost = $("#smtpHost").val();

  var smtpPort = $("#smtpPort").val();

  var smtpTLS = $("#smtpTLS").val();
  var smtpUser = $("#smtpUser").val();
  var smtpPass = $("#smtpPass").val();
  var smtpFrom = $("#smtpFrom").val();
  // var enabled2 = $("#enabled2").val();

  // let dgg;

  let enabledNumber;

  if (document.getElementById("enabled2").checked) {
    enabledNumber = 1;
  } else {
    enabledNumber = 0;
  }

  // var enabled2 = $("#enabled2").on();


  if (
    idsettings_sms == "" ||
    smtpHost == "" ||
    smtpPort == "" ||
    smtpTLS == "" ||
    smtpUser == "" ||
    smtpPass == "" ||
    smtpFrom == ""
    // enabled2 == ""
  ) {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Field cannot be empty!",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    let url = "/settings/updatenotification";

    var data = {
      id: idsettings_sms,
      smtpHost: smtpHost,
      smtpPort: smtpPort,
      smtpTLS: smtpTLS,
      smtpUser: smtpUser,
      smtpPass: smtpPass,
      smtpFrom: smtpFrom,
      enabled: enabledNumber,
    };


    $.ajax({
      url: url,

      method: "POST",

      dataType: "json",

      cache: false,

      contentType: "application/json",

      data: JSON.stringify({
        id: idsettings_sms,
        smtpHost: smtpHost,
        smtpPort: smtpPort,
        smtpTLS: smtpTLS,
        smtpUser: smtpUser,
        smtpPass: smtpPass,
        smtpFrom: smtpFrom,
        enabled: enabledNumber,
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

          window.location.replace("/settings/noticegw");
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
