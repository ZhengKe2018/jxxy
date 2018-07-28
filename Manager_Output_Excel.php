<?php
include 'PHPExcel\Classes\PHPExcel.php' ;
include 'PHPExcel\Classes\PHPExcel\IOFactory.php';

$objPHPExcel=new PHPExcel();
//获得数据 ---一般是从数据库中获得数据
$conn=@mysql_connect("127.0.0.1","root",""); //连接数据库
mysql_select_db("mydb");  //选择数据库
mysql_query("SET names UTF8");  //设置字符编码UTF8

$sql = "select * from myinfo";
$result = mysql_query($sql);

$data = array();
while($row=mysql_fetch_array($result,MYSQL_ASSOC))
	$data[] = $row;

mysql_close($conn);

//设置excel列名
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('A1','姓名');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('B1','性别');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('C1','民族');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('D1','身份证');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('E1','籍贯');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('F1','户籍');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('G1','毕业院校');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('H1','最高学历');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('I1','最高学位');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('J1','类型');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('K1','政治面貌');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('L1','婚否');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('M1','所学专业');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('N1','专业职务');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('O1','资格证书');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('P1','目前工作单位');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('Q1','职务');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('R1','手机');
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('S1','出生年月');

//把数据循环写入excel中
foreach($data as $key => $value){
$key+=2;
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('A'.$key,$value['XM']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('B'.$key,$value['XB']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('C'.$key,$value['MZ']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('D'.$key,$value['SFZH']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('E'.$key,$value['JG']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('F'.$key,$value['HJSZD']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('G'.$key,$value['BYYX']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('H'.$key,$value['ZGXL']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('I'.$key,$value['ZGXW']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('J'.$key,$value['LX']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('K'.$key,$value['ZZMM']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('L'.$key,$value['HF']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('M'.$key,$value['SXZY']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('N'.$key,$value['ZYZW']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('O'.$key,$value['ZGZS']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('P'.$key,$value['GZDW']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('Q'.$key,$value['ZW']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('R'.$key,$value['LXSJ']);
$objPHPExcel->setActiveSheetIndex(0)->setCellValue('S'.$key,$value['CSNY']);
}

header("Content-Type: application/vnd.ms-excel;");
header("Content-Disposition:attachment;filename=".date('Y-m-d',mktime()).".xls");
header("Pragma:no-cache");
header("Expires:0");
$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
$objWriter->save('php://output');
?>