<?php
require("connect.php");
$ID = $_GET['ID'];

$sql = "delete from workresume where id=$ID";

mysql_query($sql);

echo mysql_affected_rows();

mysql_close($conn);
?>