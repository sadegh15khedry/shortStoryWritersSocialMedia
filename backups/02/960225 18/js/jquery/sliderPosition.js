var navOffSet = $("#slider_rapper").offset().top;

var stickyNav = function () {
    var scrollPos = $("body").scrollTop;
    $("#loading").innerHTML="";
    if (scrollPos>=navOffSet){
        $("#slider_rapper").addClass("fixed_top");
     }
     else {
         $("#slider_rapper").removeClass("fixed_top");
     }
};

stickyNav();

$("body").scroll(function(){
    stickyNav();
});










//$(document).ready(function(){
    //var navOffSet = $("#slider_rapper").offset().top;
    //$("window").scroll(function(){
        //var scrollPos = $("window").scrollTop;
        //$("#loading").innerHTML="jdhf;aj";
        // if (scrollPos>=navOffSet){
        //     $("#slider_rapper").addClass("fixed_top");
        //  }
        //  else {
        //      $("#slider_rapper").removeClass("fixed_top");
        //  }
//     });
// });

// window.scroll=function (ev) {
//     var navOffSet = $("#slider_rapper").offset().top;
//        //var scrollPos = $("window").scrollTop;
//         alert("");
//        // scrollPos.appendTo($("#loading"));
//        //     if (scrollPos>=navOffSet){
//        //         // $("#slider_rapper").addClass("fixed_top");
//        //         // alert("");
//        //
//        //
//        //     }
//        //     else {
//        //        // alert("");
//        //         // $("#slider_rapper").removeClass("fixed_top");
//        //     }
// };















// $.fn.followTo = function (pos) {
//     var $this = this,
//         $window = $(window);
//
//     $window.scroll(function (e) {
//         if ($window.scrollTop() > pos) {
//             $this.css({
//                 position: 'absolute',
//                 top: pos
//             });
//         } else {
//             $this.css({
//                 position: 'fixed',
//                 top: 0
//             });
//         }
//     });
// };
//
// $('#yourDiv').followTo(250);