<?php
require('./module/connect_new.php'); 

//获取前端数据
$username = $_GET['username'];
$password = $_GET['userpassword'];

// echo $username;
// echo $password;

//存到数据库
$sql = "INSERT INTO `registerinfo` (`username`,`password`) VALUES ('$username','$password')";
$res = mysqli_query($conn, $sql);

if($res){
    echo $res;
}
else{
    echo "注册失败";
}

mysqli_close($conn);

?>