<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = array(
    'test' => $_POST['isbn'] + 1
);
echo json_encode($data);
