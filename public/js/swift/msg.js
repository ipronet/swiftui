$("#msg_selected").click(function () {
  var msg = $("#msgType").val();


  if (msg == "0" || msg == null || msg == undefined) {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Select a msg type",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    window.location.replace(`/swift/viewmessages?mt=${msg}`);
  }
});

$("#msg_selectedH").click(function () {
  var msg = $("#msgTypeH").val();


  if (msg === "0" || msg == null || msg == undefined) {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Select a msg type",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    window.location.replace(`/swift/msgheaderview?mt=${msg}`);
  }
});

$("#msg_selectedH_upd").click(function () {
  var msg = $("#msgTypeHU").val();


  if (msg === "0" || msg == null || msg == undefined) {
    swal({
      icon: "error",

      title: "Oops...",

      text: "Select a msg type",

      footer: "<a href>Why do I have this issue?</a>",
    });
  } else {
    window.location.replace(`/swift/msgupdateheaderview?mt=${msg}`);
  }
});
