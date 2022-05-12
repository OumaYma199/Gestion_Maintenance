<?php
     $pdo = new PDO("mysql:host=localhost;dbname=react_app;charset=utf8","root","");
     $stmt = $pdo->prepare("SELECT * FROM users") ;
     $stmt->execute();
     $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
     $stmt->closeCursor();
     print_r($users);


?>
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <div id="component_react"></div>
    <?= $infos ?>
    <div id="composant_react"></div>
    <script src="unpkg.com/react@16.7.0/umd/react.production.min.js"></script>
    <script src="unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js"></script>
    <script src="./src/Pages/home/home.jsx"></script>

    
</body>
</html>