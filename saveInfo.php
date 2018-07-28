<?php
require("connect.php");

$XM = trim($_GET['XM']);
$XB = trim($_GET['XB']);
$MZ = trim($_GET['MZ']);
$SFZH = trim($_GET['SFZH']);
$JG = trim($_GET['JG']);

$HJSZD = trim($_GET['HJSZD']);
$BYYX = trim($_GET['BYYX']);
$ZGXL = trim($_GET['ZGXL']);
$ZGXW = trim($_GET['ZGXW']);
$LX = trim($_GET['LX']);

$ZZMM = trim($_GET['ZZMM']);
$HF = trim($_GET['HF']);
$SXZY = trim($_GET['SXZY']);
$ZYZW = trim($_GET['ZYZW']);
$ZGZS = trim($_GET['ZGZS']);

$GZDW = trim($_GET['GZDW']);
$ZW = trim($_GET['ZW']);
$LXSJ = trim($_GET['LXSJ']);
$CSNY = trim($_GET['CSNY']);
$BYSJ = trim($_GET['BYSJ']);
$YX = trim($_GET['YX']);

$sql = "select XM from myinfo where SFZH='$SFZH' limit 1";
$result = mysql_query($sql);

$row=mysql_fetch_array($result);

if(strlen($row['XM']) > 0)
{
	$sql = "update myinfo set XM='$XM',XB='$XB',MZ='$MZ',SFZH='$SFZH',HJSZD='$HJSZD',BYYX='$BYYX',LX='$LX',ZZMM='$ZZMM',HF='$HF',SXZY='$SXZY',ZYZW='$ZYZW',ZGZS='$ZGZS',GZDW='$GZDW',ZW='$ZW',LXSJ='$LXSJ',CSNY='$CSNY',BYSJ='$BYSJ',YX='$YX' where id = 1";

}
else
{
	$sql = "insert into myinfo(XM,XB,MZ,SFZH,JG,HJSZD,BYYX,ZGXL,ZGXW,LX,ZZMM,HF,SXZY,ZYZW,ZGZS,GZDW,ZW,LXSJ,CSNY,BYSJ,YX) 
		values('$XM','$XB','$MZ','$SFZH','$JG','$HJSZD','$BYYX','$ZGXL','$ZGXW','$LX','$ZZMM','$HF','$SXZY','$ZYZW','$ZGZS','$GZDW','$ZW','$LXSJ','$CSNY','$BYSJ','$YX')";
}
mysql_query($sql);

echo mysql_affected_rows();

mysql_close($conn);
?>