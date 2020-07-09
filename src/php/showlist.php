<?php

//连接数据库
$conn = mysqli_connect('localhost','root','root','vivo_shop');


//书写sql语句
$sql = "SELECT * FROM `cartinfo`";

//执行sql语句
$result = mysqli_query($conn,$sql);

if(mysqli_num_rows($result)>0){	
	$arr = mysqli_fetch_all($result,MYSQL_ASSOC);
	echo json_encode(array("code"=>1,"data"=>$arr));
}else{	
	echo json_encode(array("code"=>0));
}

mysqli_close($conn);

?>