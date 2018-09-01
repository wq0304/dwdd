<?php 
	header("content-type:text/html;charset=utf-8");
	//链接数据可
	$db = mysql_connect("localhost","root","root");
	//判断是否连接成功
	if(!$db){
		echo"数据库连接失败";
		exit;
	}
	//设置字符集
	mysql_set_charset("utf-8");
	//选择数据库
	mysql_select_db("thetive");
	$phonenum = $_POST["phone-num"];
	$pwd = $_POST["password"];
	//编写sql语句
	//编写sql语句
	$sql1 = "SELECT * FROM `five_users` WHERE `phone-num` = '$phonenum'";
	$res1 = mysql_query($sql1);
	$arr = mysql_fetch_array($res1);
	if($arr){
		echo"<script> alert('用户名存在请重新输入');location.href='/theFive/dist/regist.html';</script>";
	}else{
		$sql = "INSERT INTO `five_users`(`phone-num`, `password`) VALUES ('$phonenum','$pwd')";
		//发送sql语句
		$res = mysql_query($sql);
		//接收集合
		if($res){
			echo"<script> alert('注册成功');location.href='/theFive/dist/login.html';</script>";                                   
		}
	}
	
	

	mysql_close($db);
 ?>