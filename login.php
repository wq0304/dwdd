<?php 
	//设置字符集
	header("content-type:text/html;charset=utf-8");
	//链接数据库
	$db = mysql_connect("localhost","root","root");
	//判断数据库是否链接
	if(!$db){
		echo"数据库链接失败";
		exit;
	}
	//设置字符集
	mysql_set_charset("utf8");
	//选择数据库
	mysql_select_db("thetive");

	$phonenum = $_POST["phone-num"];
	$pwd = $_POST["password"];

	//编写sql语句
	$sql = "SELECT * FROM `five_users` WHERE `phone-num`='$phonenum'";
	$res = mysql_query($sql);
	
	$arr = mysql_fetch_array($res);
	
	//print_r($arr);

	if($arr['phone-num'] == $phonenum){
		if($arr['password'] == $pwd){
			echo"<script> alert('登录成功');location.href='/TheFive/dist/index.html';</script>";
		}else{
			echo"<script> alert('密码输入错误');location.href='/TheFive/dist/login.html';</script>";
		}
	}else{
		echo"<script> alert('用户名不存在请先注册');location.href='/TheFive/dist/regist.html';</script>";
	}
 ?>