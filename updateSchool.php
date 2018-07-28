<?php
require("connect.php");
$QSRQ = $_GET['QSRQ'];
$JSRQ = $_GET['JSRQ'];
$XXYX = $_GET['XXYX'];
$ZY = $_GET['ZY'];
$XL = $_GET['XL'];
$ID = $_GET['ID'];

$sql = "update schoolresume set QSRQ='$QSRQ',JSRQ='$JSRQ',XXYX='$XXYX',ZY='$ZY',XL='$XL' where id=$ID";

mysql_query($sql);

echo mysql_affected_rows();

mysql_close($conn);

?>