<?php

// $mahasiswa = [
//     "nama" => "Putra Andhika Bagaskara",
//     "nim" => "10118268",
//     "email" => "putraandhika28@gmail.com"
// ];

$dbh = new PDO('mysql:host=localhost;dbname=belajar_laravel', 'root', '');
$db = $dbh->prepare('SELECT * FROM pegawai');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);
echo $data;
?>