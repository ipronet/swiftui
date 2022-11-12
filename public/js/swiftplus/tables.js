/*    $(document).ready(function() {

        $('#fieldtable').removeAttr('width').DataTable( {
            data: fielddata,
            dom: '<"top"if>rt<"bottom"p><"clear">',
            columns: fieldcols,
            pageLength: 4,
            lengthChange: false,
            //scrollY:        "50vh",
            //scrollCollapse: true,
            paging:         true,
            bInfo: false,
            columnDefs: [
                { width: "5%", targets: 0 },
                { width: "90%", targets: 1 },
                { width: "5%", targets: 2 },
            ],
            fixedColumns: true,
        } );
    } );

$(document).ready( function () {
    ////$('#fieldtable').columns.adjust().draw();
} );

/**

$(document).ready( function () {
   alert(fielddata);
} );
*/

//alert("me")