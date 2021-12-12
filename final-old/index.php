<?php

include 'apps/connection.php';
$query = $pdo->prepare(

  "SELECT * FROM article"
);

$query->execute();
$result=$query->fetchAll(PDO::FETCH_ASSOC);


include'index.phtml';
 ?>
