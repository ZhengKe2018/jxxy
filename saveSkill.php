<?php
require("connect.php");

$JN = trim($_GET['JN']);
$RY = trim($_GET['RY']);

$sql = "insert into skillresume(JN,RY) 
		values('$JN','$RY')";

mysql_query($sql);

echo mysql_insert_id();

mysql_close($conn);
?>