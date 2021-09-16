$(document).ready(function () {
    $("#email_err").hide();

    var email_err = false;

    $("#email_field").focusout(function () {
        checkEmailField();
    });

    function checkEmailField () {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[+a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/i);
        if (pattern.test($("#email_field").val())){
            $("#email_err").fadeOut();
        }
        else {
            $("#email_err").html("ایمیل نامعتبر است");
            $("#email_err").fadeIn();
            email_err = true;
        }
    }


    $("#signup_submit").on("click",function () {
        email_err = false;

        checkEmailField();

        if (email_err == false){
            return true;
        }
        else {
            return false;
        }
    })


});