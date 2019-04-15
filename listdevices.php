<?php

$ch = curl_init();
curl_setopt_array($ch, array(
    CURLOPT_URL => "https://api.remot3.it/apv/v27/device/list/all",
    CURLOPT_HTTPHEADER => array(
        "developerkey: ".$_ENV["REMOTEIT_DEVELOPER_KEY"],
        "token: ".$_ENV["REMOTEIT_TOKEN"] // Created using the login API
    ),
    CURLOPT_RETURNTRANSFER => true
));
$response = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

print("Status Code: ".$statusCode."\n");
$responseData = json_decode($response);
print_r($responseData);

