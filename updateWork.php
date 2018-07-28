<?php
require("connect.php");
$QSRQ = $_GET['QSRQ'];
$JSRQ = $_GET['JSRQ'];
$GZDW = $_GET['GZDW'];
$GW = $_GET['GW'];
$ZC = $_GET['ZC'];
$ID = $_GET['ID'];

$sql = "update workresume set QSRQ='$QSRQ',JSRQ='$JSRQ',GZDW='$GZDW',GW='$GW',ZC='$ZC' where id=$ID";

mysql_query($sql);

echo mysql_affected_rows();

mysql_close($conn);

?>