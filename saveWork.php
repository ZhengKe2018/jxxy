<?php
require("connect.php");

$QSRQ = trim($_GET['QSRQ']);
$JSRQ = trim($_GET['JSRQ']);
$GZDW = trim($_GET['GZDW']);
$GW = trim($_GET['GW']);
$ZC = trim($_GET['ZC']);

$sql = "insert into workresume(QSRQ,JSRQ,GZDW,GW,ZC) 
		values('$QSRQ','$JSRQ','$GZDW','$GW','$ZC')";

mysql_query($sql);

echo mysql_insert_id();

mysql_close($conn);
?>