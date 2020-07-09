<?php

header('content-type:text/html;charset=utf-8;');
require('./connect_new.php');

//创建数据表
$sql = "CREATE TABLE registerinfo (  
    username VARCHAR(300) NOT NULL,
    userpassword VARCHAR(30) NOT NULL,
    product_id VARCHAR(300) NOT NULL PRIMARY KEY,
    submission_date TIMESTAMP
)";

$result = mysqli_query($conn,$sql);

if($result){
    echo '数据表创建成功';
}else{
    echo '数据表创建失败';
}



?>