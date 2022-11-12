// $(document).ready(function() {
//     // $('select').select2();
//  /**
//     $('#multiple').select2({
//         placeholder: 'Select Multiple States'
//     });

//     $(".js-example-basic-multiple-limit").select2({
//     maximumSelectionLength: 2,
//         placeholder: 'Limited Selection'
//     });

//     $(".js-example-tokenizer").select2({
//         tags: true,
//         tokenSeparators: [',', ' '],
//         placeholder: 'With Tokenization'
//     });
//     **/

//     // var data = [
//     //             { id: 0, text: '103' },
//     //             { id: 1, text: '950' },
//     //             { id: 2, text: '940' }];

//     // var data = [
//     //     { id: 0, text: "enhancement" },
//     //     { id: 1, text: "bug" },
//     //     { id: 2, text: "duplicate" },
//     //     { id: 3, text: "invalid" },
//     //     { id: 4, text: "wontfix" },
//     //   ];

//     // $(".js-example-data-array").select2({
//     //     data: data
//     // });

// });

$(document).ready(function () {
  $("select").select2();

  $("#multiple").select2({
    placeholder: "Select Multiple States",
  });

  $(".js-example-basic-multiple-limit").select2({
    maximumSelectionLength: 2,
    placeholder: "Limited Selection",
  });

  $(".js-example-tokenizer").select2({
    tags: true,
    tokenSeparators: [",", " "],
    placeholder: "With Tokenization",
  });

  var data = [
    { id: 0, text: "enhancement" },
    { id: 1, text: "bug" },
    { id: 2, text: "duplicate" },
    { id: 3, text: "invalid" },
    { id: 4, text: "wontfix" },
  ];

  $(".js-example-data-array").select2({
    data: data,
  });
});
