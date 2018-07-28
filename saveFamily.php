<?php
require("connect.php");

$XM = trim($_GET['XM']);
$NL = trim($_GET['NL']);
$GZDW = trim($_GET['GZDW']);
$GX = trim($_GET['GX']);
$ZW = trim($_GET['ZW']);

$sql = "insert into familyresume(XM,NL,GZDW,GX,ZW) 
		values('$XM','$NL','$GZDW','$GX','$ZW')";

mysql_query($sql);

echo mysql_insert_id();

mysql_close($conn);
?>