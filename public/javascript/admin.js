// $(document).ready(function() {
//     $('#orders').DataTable();
// } );

$(document).ready(function() {
    var table = $('#orders').DataTable();
     
    $('#orders tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();
    } );
} );