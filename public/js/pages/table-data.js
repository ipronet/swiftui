// $(document).ready(function () {
//   $("#example").DataTable({
//     language: {
//       searchPlaceholder: "Search records",
//       sSearch: "",
//       sLengthMenu: "Show _MENU_",
//       sLength: "dataTables_length",
//       oPaginate: {
//         sFirst: '<i class="material-icons">chevron_left</i>',
//         sPrevious: '<i class="material-icons">chevron_left</i>',
//         sNext: '<i class="material-icons">chevron_right</i>',
//         sLast: '<i class="material-icons">chevron_right</i>',
//       },
//     },
//   });
//   $(".dataTables_length select").addClass("browser-default");
// });

var minDate, maxDate;
var datatable;
var currency = 3;

var mtdata;

$(document).ready(function (req, res) {
  // $.get("/swift/getmessages", function (data) {
  //   console.log(data);
  //   buildTable(data);
  // });
  var msgtpe = $("#mttype").val();
  var msgtpe1 = msgtpe.slice(1);

  // console.log(msgtpe);

  $.get(`/swift/getmessages?mt=${msgtpe1}`, function (data) {
    buildTable(data);
  });
});

function buildTable(data) {
  // console.dir(data.data);
  var showCurrencyFilter = false;
  var currencyIndex;
  // console.log(data.headers);
  data.headers.forEach((ele, index) => {
    if (ele.title.toLowerCase() === "currency") {
      showCurrencyFilter = true;
      currencyIndex = index;
    }
  });

  console.log(currencyIndex);

  // console.log(showCurrencyFilter);

  data.headers.push({
    title: "Action",
    data: "docname",
    render: function (data, type, row) {
      //debugger;
      //console.log(data);

      return (
        "<center><a id='jj' href='#' onclick='showmsg(\"" +
        data +
        '",' +
        JSON.stringify(row) +
        ")'><i class='material-icons' style='color:rgb(11, 44, 121);'>visibility</i></a><a id='' class='modal-trigger center-align' href='#msgdetails'></a></center>"
      );
    },
    targets: -1,
  });

  //function showmessage(myform,txtdata,formkey,sendref)

  datatable = $("#mttable").DataTable({
    dom: "Bfrtip",
    data: data.data,
    columns: data.headers,
    deferRender: true,
    //scrollX: true,
    //"columnDefs": [
    //    { "visible": false, "targets": 0 }
    //  ],

    drawCallback: function (settings) {
      //$(this.api().table().header()).hide();
      //$('#mttable thead').remove();
      //alert("me");
    },

    deferRender: true,
    buttons: [
      "print",
      {
        extend: "excelHtml5",
        autoFilter: true,
        sheetName: "Download Table",
        class: "waves-effect waves-light btn",
        text: "Excel",
        //exportOptions: {
        //  columns: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 , 9 ]
        //}
      },
      {
        extend: "pdfHtml5",
        autoFilter: true,
        orientation: "landscape",
        pageSize: "LEGAL",
        class: "waves-effect waves-light btn",
        text: "&nbsp;&nbsp;&nbsp;PDF&nbsp;&nbsp;&nbsp;",
        //exportOptions: {
        //  columns: [ 0, 1, 2, 3, 4, 5, 6, 7, 8 , 9 ]
        //},
        customize: function (doc) {
          // Splice the image in after the header, but before the table
          doc.content.splice(1, 0, {
            margin: [0, 0, 0, 12],
            alignment: "center",
            width: 60,
            image:
              "data:image/jpeg;base64,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ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA=",
          });
        },
      },
    ],

    paging: true,

    language: {
      searchPlaceholder: "Search records",
      sSearch: "",
      sLengthMenu: "_MENU_",
      sLength: "dataTables_length",
      oPaginate: {
        sFirst: '<i class="material-icons">chevron_left</i>',
        sPrevious: '<i class="material-icons">chevron_left</i>',
        sNext: '<i class="material-icons">chevron_right</i>',
        sLast: '<i class="material-icons">chevron_right</i>',
      },
    },
  });

  $(".dataTables_length select").addClass("browser-default");
  $(".whitespace").addClass("col s4");
  $(".dt-button").addClass("waves-effect waves-light btn");
  $(".dt-button").removeClass("dt-button");

  $(".dt-buttons").append(
    '&nbsp;&nbsp;<div id="reportrange" style="display:inline-block; background: #fff; cursor: pointer; padding: 5px; border: 1px solid #ccc;background-color: beige;"><span><i class="material-icons" style="display: inline-flex;Vertical-Align: middle;Box-Sizing: inherit;text-Align: center;">date_range</i>&nbsp;<date></date></span></div>'
  );

  var urlParams = new URLSearchParams(window.location.search);

  if (showCurrencyFilter) {
    $(".dt-buttons").append(
      '&nbsp;&nbsp;<div id="currency" style="display:inline-block;"><select id="currencyx" class="browser-default" style="font-size: 12px;display: inline-block;padding: 9px;height: fit-content;background-color: beige;border: 1px solid #ccc"><option value="" disabled selected>Select Currency</option><option value="1">Local</option><option value="2">Foreign</option><option value="3">ALL</option></select></div>'
    );
  }

  $("#currency").on("change", function (e) {
    currency = $("#currencyx").children("option:selected").val();

    // console.log(currency);

    datatable.draw();
  });

  $(function () {
    var start = moment().subtract(29, "days");
    var end = moment();

    function cb(start, end) {
      $("#reportrange date").html(
        start.format("D/MM/YY-HH:mm") + "-" + end.format("D/MM/YY-HH:mm")
      );
      minDate = start; //.format('D/MM/YY')
      maxDate = end; //.format('D/MM/YY')

      // console.log(datatable.row(":last").data());
      // console.log(datatable.row(2).data());

      datatable.draw();
    }

    $("#reportrange").daterangepicker(
      {
        startDate: moment().startOf("hour"),
        endDate: moment().startOf("hour").add(32, "hour"),
        locale: {
          format: "D/MM/YY hh:mm A",
        },
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [
            moment().subtract(1, "days"),
            moment().subtract(1, "days"),
          ],
          "Last 7 Days": [moment().subtract(6, "days"), moment()],
          "Last 30 Days": [moment().subtract(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Last Month": [
            moment().subtract(1, "month").startOf("month"),
            moment().subtract(1, "month").endOf("month"),
          ],
        },
        timePicker: true,
      },
      cb
    );

    cb(start, end);
  });

  $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
   

    
      if (currency == "1") {
       

        //local
        if (data[currencyIndex].slice(0, 3) == "GHS") return true;
        else return false;
      } else if (currency == "2") {
        if (data[currencyIndex].slice(0, 3) != "GHS") return true;
        else return false;
      } else return true;

      
  });

  // Custom filtering function which will search data in column four between two values
  // $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
  //   var min = minDate;
  //   var max = maxDate;
  //   var date = new Date(
  //     data[0].split("/")[1] +
  //       "/" +
  //       data[0].split("/")[0] +
  //       "/" +
  //       data[0].split("/")[2] +
  //       " " +
  //       data[1]
  //   );

  //   // console.log(data)
  //   // console.log(currencyIndex);
  //   console.log(data[currencyIndex].slice(0, 3));

  //   if (
  //     (min === null && max === null) ||
  //     (min === null && date <= max) ||
  //     (min <= date && max === null) ||
  //     (min <= date && date <= max)
  //   ) {
  //     console.log(data);
  //     console.log(currency);
  //     if (currency == "1") {
  //       // console.log(currencyIndex);
  //       console.log(data[currencyIndex]);

  //       //local
  //       if (data[currencyIndex].slice(0, 3) == "GHS") return true;
  //       else return false;
  //     } else if (currency == "2") {
  //       if (data[currencyIndex].slice(0, 3) != "GHS") return true;
  //       else return false;
  //     } else return true;

  //     return false;
  //   }
  //   return false;
  // });
}
