<?php 
    include('Net/SSH2.php');

    $server = "58.173.226.157:59972";
    $username = "pi";
    $password = "networking";
    $command = "python ~/Documents/Project/blink4.py";

    $ssh = new Net_SSH2($server);
    if (!$ssh->login($username, $password)) {
        echo '<p>Login Failed</p>';
    }

    /*$connection = @ssh2_connect('58.173.226.157', 59972);

    if (@ssh2_auth_password($connection, 'pi', 'networking')) {
    echo "Authentication Successful!\n";
    } else {
    die('Authentication Failed...');
}   */
?>