<?php
require("connect.php");
$XM = $_GET['XM'];
$NL = $_GET['NL'];
$GZDW = $_GET['GZDW'];
$GX = $_GET['GX'];
$ZW = $_GET['ZW'];
$ID = $_GET['ID'];

$sql = "update familyresume set XM='$XM',NL='$NL',GZDW='$GZDW',GX='$GX',ZW='$ZW' where id=$ID";

mysql_query($sql);

echo mysql_affected_rows();

mysql_close($conn);

?>