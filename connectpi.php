<?php
        $ch = curl_init();
        curl_setopt_array($ch, array(
            CURLOPT_URL => "https://api.remot3.it/apv/v27/device/connect",
            CURLOPT_HTTPHEADER => array(
                "developerkey: ".$_ENV["M0RFNTgwQTgtNjRFNy00NjE5LUFBRUItNDMxQzkyRjhGQ0Y2"],
                "token: ".$_ENV[$responseData] // Created using the login API
            ),
            CURLOPT_POSTFIELDS => json_encode(array(
                "deviceaddress" => $_ENV["b8:27:eb:13:04:e7-Y2aVuov3p8JRyGYtgEjH"],
                "wait" => true
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