<?php


class DataBase{
    const HOST = 'localhost';
    const DB_NAME = 'tamirkar20';
    const USER = 'root';
    const PASS = '';
    const DSN = 'mysql:host=' . self::HOST . ';dbname=' . self::DB_NAME;

    private $connection = null;
    private static $instance = null;

    private function __construct(){
        try {
            $this->connection = new PDO(self::DSN, self::USER, self::PASS);
            $this->connection->query("SET NAMES UTF8");
        }
        catch (PDOException $e) {
            echo $e;
        }

    }

    public static function getInstance(){
        if (self::$instance == null) {
            self::$instance = new DataBase();
            return self::$instance;
        }
        else {
            return self::$instance;
        }
    }

    public function getCon(){
        return $this->connection;
    }

    public function closeConnection(){
        $this->connection = null;
    }

    public function login_check($email,$password){
        $databse = self::getInstance();
        $query_for_email = "select * from tm_user WHERE user_email = '".$email."'";
        $full_query = "select * from tm_user WHERE user_email = '".$email."'  and user_password = '".$password."'";
        $email_exist =$databse->connection->query($query_for_email);
        $full_result = $databse->connection->query($full_query);
        if ($full_result->rowCount()) {
            return "you can log in";
        }
        else if ($email_exist->rowCount()){
            return "wrong password";
        }
        else
            return "wrong email and password";
    }


}