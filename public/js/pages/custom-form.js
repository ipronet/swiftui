var counter = 1;

// var msg = $("#selectMsgType").val();



//   if (msg == "0") {
//     swal({
//       icon: "error",

//       title: "Oops...",

//       text: "Select a msg type",

//       footer: "<a href>Why do I have this issue?</a>",
//     });
//   } else {
//     window.location.replace(`/swift/msgheaderview?mt=${msg}`);
//   }

function add_more_field() {
  counter += 1;
  html =
    '<div style="margin-top: -50px;" class="row" id="1424585' +
    counter +
    '">\
                    <div class="input-field col s5">\
                    <input name="array[]" value="" type="text" class="validate" placeholder="Title">\
                </div>\
                <div class="input-field col s5">\
                    <input name="array[]" value="" type="text" class="validate" placeholder="Data">\
                </div>\
                <div class="col s1">\
                                <br/>\
                                <a  href="#" onclick="remove_field(this)" id="1424585' +
    counter +
    '" class="waves-effect   red " style="display: flex; align-items: center; justify-content:center; border-radius: 50%; color: white">\
                                <i class="material-icons style="color: white;" ">remove</i>\
                            </a>\
                            </div>\
            </div > ';
  var div = document.getElementById("header_form");
  div.insertAdjacentHTML("beforeend", html);
}

function remove_field(a) {
  let number = a.id;
  let row = document.getElementById(number);
  row.remove();
}
var k = [];
var k1 = [];

$("#add_header").click(function () {
  var input = document.getElementsByName("array[]");

  for (var i = 0; i < input.length; i++) {
    var a = input[i];

    k.push(a.value);
  }


  for (var j = 0; j < k.length; j += 2) {
    let element_split = k[j];
    let element_split1 = k[j + 1];

    k1.push({ title: element_split, data: element_split1 });
  }

  var messagetype = $("#messagetype").val();

  var msgtype = messagetype.slice(1);

  var msgtypei = parseInt(msgtype);


  let url = "/swift/addheader";

  $.ajax({
    url: url,

    method: "POST",

    dataType: "json",

    cache: false,

    contentType: "application/json",

    data: JSON.stringify({
      messagetype: msgtypei,
      isdefault: 1,
      version: 100,
      jsondata: {
        headers: k1,
      },
      createdBy: "gashie",
    }),

    // data: JSON.stringify({ formdata }),
    success: function (res) {
      // $("#loader").hide();


      if (res.Status == 1) {
        $("form").trigger("reset");

        swal({
          icon: "success",

          title: "Success",

          text: res.Message,

          footer: "<a href>Why do I have this issue?</a>",
        });
        window.location.replace("/swift/messagetypes");
      } else {
        swal({
          icon: "error",

          title: "Sorry...",

          text: "There was something wrong",

          footer: "<a href>Why do I have this issue?</a>",
        });
      }
    },
  });
});

$("#update_header").click(function () {
  var input = document.getElementsByName("array[]");

  for (var i = 0; i < input.length; i++) {
    var a = input[i];

    k.push(a.value);
  }


  for (var j = 0; j < k.length; j += 2) {
    let element_split = k[j];
    let element_split1 = k[j + 1];

    k1.push({ title: element_split, data: element_split1 });
  }

  var messagetype = $("#messagetype").val();

  var msgtype = messagetype.slice(1);

  var msgtypei = parseInt(msgtype);


  let url = "/swift/updateheader";

  $.ajax({
    url: url,

    method: "POST",

    dataType: "json",

    cache: false,

    contentType: "application/json",

    data: JSON.stringify({
      messagetype: msgtypei,
      isdefault: 1,
      version: 100,
      jsondata: {
        headers: k1,
      },
      createdBy: "gashie",
    }),

    // data: JSON.stringify({ formdata }),
    success: function (res) {
      // $("#loader").hide();


      if (res.Status == 1) {
        $("form").trigger("reset");

        swal({
          icon: "success",

          title: "Success",

          text: res.Message,

          footer: "<a href>Why do I have this issue?</a>",
        });
        window.location.replace("/swift/messagetypes");
      } else {
        swal({
          icon: "error",

          title: "Sorry...",

          text: "There was something wrong",

          footer: "<a href>Why do I have this issue?</a>",
        });
      }
    },
  });
});
