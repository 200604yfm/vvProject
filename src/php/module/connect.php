<?php

header('content-type:text/html;charset=utf-8;');

$servername = 'localhost';
$username = 'root';
$password = 'root';

$conn = mysqli_connect($servername,$username,$password);
if(mysqli_connect_error()){
    die('连接失败');
}else{
    echo '成功';
}


//mysqli_connect_error() 函数返回上一次连接错误的错误描述 -- 用来检测是否连接成功
//返回一个描述错误的字符串。如果没有错误发生则返回 NULL
//die() 输出一条消息


?>