<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>31261 - Project</title>

  <!-- Bootstrap core CSS -->
  <link href="31261WebApp/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="31261WebApp/css/scrolling-nav.css" rel="stylesheet">


</head>

<body id="page-top">

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">31261</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#LED">LEDs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#Motion">Motion</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <header class="bg-primary text-white">
    <div class="container text-center">
      <h1>UTS Internetwokring Project</h1>
      <p>Deploying an IoT-Application to Multi-Cloud using DevOps and dynamically collected IoT-data from Raspberry Pi sensors</p>
      <p>Georges Bou Ghantos & Students</p>
    </div>
  </header>

  <section id="LED">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2>LED Light Sensor</h2>
          <p class="lead">This is the LED Light Sensor. You can control it using the ON/OFF buttons below.</p>
          
          <form method="post">
            <p>
              <button class="button" name="LEDOn" value="LEDOn">ON</button>
            </p>
          </form>
          <button class="button">OFF</button>
        </div>
      </div>
    </div>
  </section>
    <?php 
      curl_setopt($ch, $url);
      //execute post
      $result = curl_exec($ch);
      //close connection
      curl_close($ch);
      // set post fields
$post = ['LEDOn' => 'LEDOn'];

$ch = curl_init('https://eycnfhqd.p72.rt3.io/');
curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
// execute!
$response = curl_exec($ch);
// close the connection, release resources used
curl_close($ch);

    ?>


  <section id="Motion" class="bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2>Motion Sensor</h2>
          <p class="lead">This is the Motion Sensor.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2>Contact us</h2>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
    </div>
    <!-- /.container -->
  </footer>

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom JavaScript for this theme -->
  <script src="js/scrolling-nav.js"></script>

</body>

</html>
