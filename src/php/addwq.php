<?php
// require('./module/connect_new.php');  //连接数据库

//获取前端数据
$id = $_GET['id'];
$img = $_GET['img'];
$name = $_GET['name'];
$price = $_GET['price'];
// $num = $_GET['num'];

//存到数据库cartinfo表
$conn = mysqli_connect('localhost','root','root','vivo_shop');
$sql = "SELECT * FROM `cartinfo` WHERE `product_id`=$id";
$res = mysqli_query($conn, $sql);
$rows = mysqli_num_rows($res); //返回结果集中行的数量

if($rows>0){
    $arr = mysqli_fetch_assoc($res);//解析单行
    $num = $arr['product_num']+1;
    // $num = $arr['product_num']+$num;
    $sql = "UPDATE `cartinfo` SET `product_num`=$num WHERE `product_id`=$id"; //有就数量+1
}else{
    $num = $arr['product_num']+1;
    $sql = "INSERT INTO `cartinfo` (`product_id`,`product_img`,`product_name`,`product_price`,`product_num`) VALUES ('$id','$img','$name','$price','$num')";
}

$result = mysqli_query($conn,$sql);
if($result){
    echo $result;
}

?>