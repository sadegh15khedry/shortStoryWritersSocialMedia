<?php
    require_once "../php/classes/DataBaseClass.php";
    $message = "";
    if (isset($_POST['submit'])&& !$_POST['email']==''){
        //echo "<script type='text/javascript'>alert('');</script>";
        $password = $_POST['password'];
        $email = $_POST['email'];
        $database_obj = DataBase::getInstance();
        $db_answer = $database_obj->login_check($email,$password);
        switch ($db_answer) {
            case "you can log in": {
                header("Location: home.php");
                break;
            }
            case "wrong password": {
                $message = "پسورد اشتباه است";
                break;
            }
            case "wrong email and password": {
                $message = "ایمیل و پسورد اشتباه است";
                break;
            }
        }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ورود به سایت</title>
    <script src="../js/src/jquery-3.2.1.min%20(1).js"></script>
    <link rel="stylesheet" href="../resourse/bootstrap-3.3.7-dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="../resourse/bootstrap-3.3.7-dist/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <link rel="stylesheet" href="../style/css/logIn.css">
    <link rel="stylesheet" href="../style/css/basics.css">
</head>
<body>
<div class="container-fluid">
    <!----------- navbar --------------------------->
    <div class="row">
        <nav class="  navbar-inverse" role="navigation" id="hor-nav">
            <div class="navbar-header navbar-right">
                <button type="button" class="navbar-toggle"
                        data-toggle="collapse" data-target="#collapse">
                    <span class="sr-only">toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="home.php">تــعــمــیـــــــرگــاه</a>
            </div>
            <div class="collapse navbar-collapse" id="collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a >آگهی ها</a></li>
                    <li><a class="active" href="singIn.php">ثبت نام</a></li>
                    <li><a href="logIN.php">ورود به سایت</a></li>
                    <li><a href="ac2.php">ثبت آگهی</a></li>
                    <li><a href="#">درباره ی ما</a></li>
                </ul>
            </div>
        </nav>
    </div>
<!---------------------------------------------------------- login form -------------------------------------------------------------->
    <div class="row" id="rapper">
        <form name="login_form" method="POST" id="#login_form" action="logIN.php">
            <div class="form-group">
                <label  for="email_field" >ایمیل</label>
                <input name="email" class="form-control" type="text" id="email_field" value="<?php echo htmlspecialchars($email); ?>">
                <div id="email_err"></div>
            </div>
            <div class="form-group">
                <label for="pass_field">پسورد</label>
                <input name="password" class="form-control" type="password" id="pass_field">
            </div>
            <div id="login_err">
                <?php
                    echo "<p style='color: red;'>$message</p>";
                ?>
            </div>
                <input name="submit" id="login_submit" class="btn" type="submit" value="submit">
        </form>
    </div>
</div>
<div class="navbar navbar-fixed-bottom" id="footer">
    <p id="footer_text">    تمامی خدمات این فروشگاه، حسب مورد دارای مجوزهای لازم از مراجع مربوطه می‌باشد و فعالیت‌های این سایت تابع قوانین و مقررات جمهوری اسلامی ایران است.
    </p>
</div>
<script src="../resourse/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
<!--<script src="../js/jquery/loginValidation.js"></script>-->
</body>
</html>