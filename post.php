<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = array(
    'test' => 1
);
echo json_encode($data);
