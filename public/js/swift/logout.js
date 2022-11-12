$("#logout_user").click(function () {
  let url = "/logout";

  $.ajax({
    url: url,

    method: "POST",

    cache: false,

    contentType: "application/json",
    success: function (res) {
      $("#loader").hide();
      window.location.replace("/signin");
    },
  });
});

function logout() {
  let url = "/auth/logout";

  $.ajax({
    url: url,

    method: "POST",

    cache: false,

    contentType: "application/json",
    success: function (res) {
      $("#loader").hide();
      window.location.replace("/auth/signin");
    },
  });
}
