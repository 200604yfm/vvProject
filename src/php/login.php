<?php
//处理中文乱码
header('content-type:text/html;charset:utf-8');

//获取前端数据
$name = $_GET['username'];
$password = $_GET['password'];

//去数据库查询,是否有一个账号的用户名和密码与传递过来的一致
$link = mysqli_connect('localhost','root','root','vivo_shop');
$sql = "SELECT * FROM `registerinfo` WHERE `username`='$name' AND `password`='$password'";
$res = mysqli_query($link, $sql);

//解析查询结果
$arr = mysqli_fetch_assoc($res);

echo json_encode($arr); //转为json字符串输出

mysqli_close($link); //关闭数据库

?>