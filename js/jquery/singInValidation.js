$(document).ready(function () {
    $("#name_field_err").hide();
    $("#email_field_err").hide();
    $("#pass_field_err").hide();
    $("#re_pass_field_err").hide();
    $("#phone_field_err").hide();
    var name_err = false;
    var email_err = false;
    var pass_err = false;
    var rePass_err = false;
    var phoneNumber_err = false;

    $("#name_field").focusout(function () {
       checkNameField();
    });

    $("#email_field").focusout(function () {
        checkEmailField();
    });

    $("#pass_field").focusout(function () {
        checkPassField();
    });

    $("#re_pass_field").focusout(function () {
        checkRepassField();
    });
    $("#phone_number_field").focusout(function () {
        checkPhoneNumberField();
    });


    function checkNameField () {
        var name_length = $("#name_field").val().length;
        if (name_length > 20 || name_length < 5){
            $("#name_field_err").html("نام و نام خانوادگی معتبر نیست");
            $("#name_field_err").show();
            name_err = true;
        }
        else {
            $("#name_field_err").hide();
        }
    }

    function checkEmailField () {
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[+a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/i);
        if (pattern.test($("#email_field").val())){
            $("#email_field_err").hide();
        }
        else {
            $("#email_field_err").html("ایمیل نامعتبر است");
            $("#email_field_err").show();
            email_err = true;
        }
    }

    function checkPassField () {
        var pass_lenght = $("#pass_field").val().length;
        if (pass_lenght < 6){
            $("#pass_field_err").html("پسورد کوتاه است");
            $("#pass_field_err").show();
            pass_err = true;
        }
        else {
            $("#pass_field_err").hide();
        }
    }

    function checkRepassField () {
        var password = $("#pass_field").val();
        var retyped_password = $("#re_pass_field").val();
        if (password != retyped_password){
            $("#re_pass_field_err").html("پسوردها یکسان نیستند");
            $("#re_pass_field_err").show();
            rePass_err = true;
        }
        else {
            $("#re_pass_field_err").hide()
        }
    }

    function checkPhoneNumberField() {
        var phone_number = $("#phone_number_field").val();
        if (phone_number.length != 11 || isNaN(phone_number)){
            $("#phone_field_err").html("شماره تلفن نامعتبر است");
            $("#phone_field_err").show();
            phoneNumber_err = true;
        }
        else {
            $("#phone_field_err").hide();
        }
    }


    $("#singIN_form").submit(function () {
        name_err = false;
        email_err = false;
        pass_err = false;
        rePass_err = false;
        phoneNumber_err = false;
        checkEmailField();
        checkNameField();
        checkPassField();
        checkRepassField();
        checkPhoneNumberField();

        if (name_err == false && email_err == false && pass_err==false && rePass_err == false && phoneNumber_err == false){
            return true;
        }
        else {
            return false;
        }
    })



});

