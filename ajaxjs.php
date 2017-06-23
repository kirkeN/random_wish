<?php
$promptWish = $_POST['data'];     // gets the data it received from the request

$host="localhost";
$user="test";
$pass="t3st3r123";
$db="test";
$connection = mysqli_connect($host, $user, $pass, $db) or die("ei saa ühendust mootoriga- ".mysqli_error());
mysqli_query($connection, "SET CHARACTER SET UTF8") or die("Ei saanud baasi utf-8-sse - ".mysqli_error($connection));


$query =mysqli_query($connection,"INSERT INTO bday_wish(wish) VALUES('$promptWish')");



//table bday_wish (id, wish (varchar 500)
