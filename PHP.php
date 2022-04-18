<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php</title>
    <link rel="stylesheet" href="scc/style.css">
</head>
<body>
    
    <?php
        $userName = $_GET["nameLog"];
        $userPass = $_GET["passLog"];
        $userAge = $_GET["ageLog"];

        if($userName == ""){
            echo "<h2>All fields must be filled outh<2>";
        }else{
            echo "<h2>welcome ". $userName."<h2>";
        }
        if($userPass == "1234"){
            echo "<h2>The password is not strong enough<h2>";
        }else if($userPass == ""){
            echo "<h2>All fields must be filled out<h2>";
        }else{
            echo "<h2>The password was received<h2>";
        }
        if($userName == ""){
            echo "<h2>All fields must be filled outh<2>";
        }else{
            echo "<h2>You are ".$userAge." years old<h2>";
        }

?>
</body>
</html>