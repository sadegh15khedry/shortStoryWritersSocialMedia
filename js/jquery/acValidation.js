$(document).ready(function () {
    $("#radio_err").hide();
    $("#price_type_err").hide();
    $("#price_num_err").hide();
    $("#city_err").hide();
    $("#title_err").hide();
    $("#ad_type_err").hide();

    var title_err = false;
    var radio_err = false;
    var price_num_err = false;
    var price_type_err = false;
    var city_err = false;
    var ad_type_err = false;




//-----------------------------------------------------checkers-----------------------------------------------------------------------
    function check_ad_type() {
        var ad_type = get_ad_type();
        if (ad_type == "none"){
            $("#ad_type_err").html("نوع را مشخص کنید");
            $("#ad_type_err").fadeIn();
            ad_type_err = true;
        }
        else
            $("#ad_type_err").fadeOut();
    }


    function check_price_num_field () {
        var priceType = get_price_type();
        var price_num = $("#price_number_field").val();
        if (isNaN(price_num) || (price_num.length <= 0 && priceType == "maghto")||(price_num.length <= 0 && priceType == "none")){
            $("#price_num_err").html("قیمت را وارد کنید");
            $("#price_num_err").fadeIn();
            price_type_err = true;
        }
        else {
            $("#price_num_err").fadeOut();
        }
    }



    function check_price_type() {
        if (!$("#maghto").is(":checked") && !$("#tavafoghi").is(":checked")){
            $("#price_radio_err").html("نوع را وارد کنید");
            $("#price_radio_err").show();
            title_err = true;
        }
        else
            $("#price_radio_err").fadeOut();
    }


    function check_title_Field () {
        var title_lenght = $("#title_field").val().length;
        if (title_lenght <= 0){
            $("#title_err").html("عنوان را وارد کنید");
            $("#title_err").show();
            title_err = true;
        }
        else {
            $("#title_err").hide();
        }
    }


    function check_city_Field () {
        var city_select = $("#city_select_field").val();
        if (city_select == "nothing"){
            $("#city_err").html("شهر را انتخاب کنید");
            $("#city_err").show();
            city_err = true;
        }
        else {
            $("#city_err").hide();
        }
    }

//-----------------------------------------------------getter functions-----------------------------------------------------------------------
    function get_ad_type() {
        if ($("#for_buy_radio").is(":checked")){
            return "buy";
        }
        else if ($("#for_sale_radio").is(":checked")){
            return "sale";
        }
        else if ($("#for_rent_radio").is(":checked")){
            return "rent";
        }
        else
            return "none";
    }




    function get_price_type() {
        if ($("#maghto").is(":checked")){
            return "maghto";
        }
        else if ($("#tavafoghi").is(":checked")){
            return "tavafoghi";
        }
        else
            return "none";
    }
//-----------------------------------------------------event listeners-----------------------------------------------------------------------



    $("#price_number_field").focusout(function () {
        check_price_num_field();
    });

    $("#title_field").focusout(function () {
        check_title_Field();
    });

    $("#tavafoghi").on("click",function () {
        $("#p_rapper").hide("fast");
        $("#price_radio_err").fadeOut();
        $("#price_num_err").fadeOut();
    });

    $("#maghto").on("click",function () {
        $("#p_rapper").show("slow");
        $("#price_radio_err").fadeOut();
    });




    $("#city_select_field").on("change",function () {
        $("#city_err").fadeOut();
    });


    $("#for_sale_radio , #for_rent_radio , #for_buy_radio ").on("click",function () {
        $("#ad_type_err").fadeOut();
    });

//-----------------------------------------------------submit btn-----------------------------------------------------------------------


    $("#add_como_form").submit(function () {
        title_err = false;
        radio_err = false;
        price_num_err = false;
        price_type_err = false;
        city_err = false;
        ad_type_err = false;
        check_ad_type();
        check_title_Field();
        check_price_num_field();
        check_city_Field();
        check_price_type();


        if (title_err == false && radio_err == false && price_num_err == false && price_type_err == false && city_err == false && ad_type_err == false)
            return true;
        else
            return false;

    });

});
