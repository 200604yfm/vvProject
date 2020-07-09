<?php

$id = $_REQUEST['id'];

//连接数据库
$conn = mysqli_connect('localhost','root','root','vivo_shop');

//根据id删除数据
$sql = "DELETE FROM `cartinfo` WHERE `product_id`=$id";

$res = mysqli_query($conn,$sql);

if($res){
    echo $res;
}

mysqli_close($conn);








// $rows = mysqli_num_rows($res); //返回结果集中行的数量

// if($rows>0){
//     $arr = mysqli_fetch_all($res,MYSQL_ASSOC);//解析所有
//     echo json_encode($arr); //转成json字符串输出
// }

?>