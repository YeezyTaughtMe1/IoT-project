<?php

$ch = curl_init();
curl_setopt_array($ch, array(
    CURLOPT_URL => "https://api.remot3.it/apv/v27/user/login",
    CURLOPT_HTTPHEADER => array(
        "developerkey: ".$_ENV["M0RFNTgwQTgtNjRFNy00NjE5LUFBRUItNDMxQzkyRjhGQ0Y2"]
    ),
    CURLOPT_POSTFIELDS => json_encode(array(
        "username" => $_ENV["varun.vijay@student.uts.edu.au"],
        "password" => $_ENV["tXxGExfN7qBVNii"]
    )),
    CURLOPT_RETURNTRANSFER => true
));
$response = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

print("Status Code: ".$statusCode."\n");
$responseData = json_decode($response);
print_r($responseData);

?>