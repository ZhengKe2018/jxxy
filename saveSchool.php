<?php
require("connect.php");

$QSRQ = trim($_GET['QSRQ']);
$JSRQ = trim($_GET['JSRQ']);
$XXYX = trim($_GET['XXYX']);
$ZY = trim($_GET['ZY']);
$XL = trim($_GET['XL']);

$sql = "insert into schoolresume(QSRQ,JSRQ,XXYX,ZY,XL) 
		values('$QSRQ','$JSRQ','$XXYX','$ZY','$XL')";

mysql_query($sql);

echo mysql_insert_id();

mysql_close($conn);
?>