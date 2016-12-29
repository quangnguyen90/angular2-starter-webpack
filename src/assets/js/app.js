/**
 * Created by phuctran on 29/12/2016.
 */


<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
jQuery.widget.bridge('uibutton', $.ui.button);

$(function () {
    $('.dataTable').DataTable({
//            "paging": true,
//            "lengthChange": false,
//            "searching": false,
//            "ordering": true,
//            "info": true,
//            "autoWidth": false
    });
});