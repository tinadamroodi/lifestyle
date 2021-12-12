<?php

include 'apps/connection.php';
$query = $pdo->prepare(

  "SELECT * FROM workshop"
);

$query->execute();

$styles=$query->fetchAll(PDO::FETCH_ASSOC);

include'our-story.phtml';
 ?>
