<?php
$destination =$_POST['Destination'];
$from =$_POST['From:'];
if (!empty($destination)||($from)){
$host="localhost";
$dbUsername="root";
$dbPassword="";
$dbname="project";

$conn= new mysqli($host,$dbUsername,$dbPassword,$dbname);

if (mysqli_connect_error()){
die('Connect  Error('.mysqli_connect_error().').mysqli_connect_error());
else{
    $SELECT = "SELECT from train(id_tr,From:,Destination);
}
else {
echo"ALL FIELDS ARE REQUIRED"
die();

?>