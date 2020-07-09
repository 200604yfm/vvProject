<?php

$id = $_REQUEST['id'];
$type = $_REQUEST['type'];

//连接数据库
$conn = mysqli_connect('localhost','root','root','vivo_shop');

$sql = "SELECT * FROM `cartinfo` WHERE `product_id`='$id'";
$res = mysqli_query($conn,$sql);

$row = mysqli_fetch_assoc($res);//解析查询结果

$num = $row['product_num'];

if($type=='add'){
    $num = $num+1;
    $sql = "UPDATE `cartinfo` SET `product_num`='$num' WHERE `product_id`='$id'";
}else{
    $num = $num-1;
    if($num>0){
        $sql = "UPDATE `cartinfo` SET `product_num`='$num' WHERE `product_id`='$id'";
    }
}

$result = mysqli_query($conn,$sql);
if($result){
    // echo json_encode($result);
    echo json_encode(array("code"=>1));
}else{
    echo json_encode(array("code"=>0));
}

mysqli_close($conn);

?>