<?php
require("connect.php");

$sql = "select * from myinfo where id=1";
$result = mysql_query($sql);

$rows = array();
while($row=mysql_fetch_array($result))
	$rows[] = $row;

echo json_encode($rows);

mysql_close($conn);
?>