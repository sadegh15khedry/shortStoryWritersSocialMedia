// var navOffSet = $("#slider_rapper").offset().top;
//
// var stickyNav = function () {
//     var scrollPos = $("body").scrollTop;
//     $("#loading").innerHTML="";
//     if (scrollPos>=navOffSet){
//         $("#slider_rapper").addClass("fixed_top");
//      }
//      else {
//          $("#slider_rapper").removeClass("fixed_top");
//      }
// };
//
// stickyNav();
//
// $("body").scroll(function(){
//     stickyNav();
// });
$(document).ready(function () {
    if ( $(window).width() > 739) {
        var sOffset = $("#hor-nav").offset().top;
        $("#hor-nav").wrap('<div class="navplaceholder"></div>');
        $(".navplaceholder").height($("#hor-nav").outerHeight());
        $("#slider_rapper").wrap('<div class="navplaceholder2"></div>');
        $(".navplaceholder2").height($("#slider_rapper").outerHeight());
        $(window).scroll(function() {
            var scrollYpos = $(document).scrollTop();
            if (scrollYpos >= sOffset) {
                $("#slider_rapper").addClass("fixed_top");
                $("#hor-nav").addClass("navbar-fixed-top");
            } else {
                $("#slider_rapper").removeClass("fixed_top");
                $("#hor-nav").removeClass("navbar-fixed-top");
            }
        });
    }
    else {
        $("#hor-nav").addClass("navbar-fixed-top");
        $("#search_select_div").css("margin-top", "80px");
    }
});










// $(document).ready(function(){
//     var navOffSet = $("#slider_rapper").offset().top;
//     $(window).scroll(function(){
//         var scrollPos = $(window).scrollTop;
//         if (scrollPos>=navOffSet){
//             $("#slider_rapper").addClass("fixed_top");
//          }
//          else {
//              $("#slider_rapper").removeClass("fixed_top");
//          }
//     });
// });

// window.scroll=function (ev) {
//     var navOffSet = $("#slider_rapper").offset().top;
//        var scrollPos = $("window").scrollTop;
//         alert(navOffSet);
//            if (scrollPos>=navOffSet){
//                // $("#slider_rapper").addClass("fixed_top");
//                // alert("");
//
//
//            }
//            else {
//               // alert("");
//                // $("#slider_rapper").removeClass("fixed_top");
//            }
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