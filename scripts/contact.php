<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $lastname = $_POST['lastname'];

  if (strlen($lastname)>0) {
    http_response_code(403); #403=forbidden
    echo "Es gab ein internes Problem, bitte versuchen Sie es erneut.";
    exit;
  } else {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if (strpos($email, '@') == false) {
      http_response_code(403); #403=forbidden
      echo "Sie müssen eine gültige Email-Adresse eingeben.";
      exit;
    }
    if (strlen($message)<10) {
      http_response_code(403); #403=forbidden
      echo "Bitte schreiben Sie eine etwas längere Nachricht.";
      exit;
    }

    $mail_to = "info@lachenmaier.org, $email";
	  $messageResponse_to = '
  		<html>
  		<head>
  			<title>Ihre Nachricht an Lachenmaier Werkzeugbau GmbH</title>
  		</head>
  		<body>
  		  <p>Vielen Dank für Ihre Nachricht, wir werden uns schnellstmöglich bei Ihnen melden.</p>
  		  <p>Ihre Nachricht an Lachenmaier Werkzeugbau GmbH: '.$message.'</p>
  		  <p>Mit freundlichen Grüßen,<br/>Ralph Lachenmaier</p>
  		</body>
  		</html>';

    $headerResponse_to[] = 'MIME-Version: 1.0';
    $headerResponse_to[] = 'Content-type: text/html; charset=utf-8';
	  $headerResponse_to[] = 'From: Lachenmaier Werkzeugbau GmbH <info@lachenmaier.org>';

    $success = mail($mail_to, "$subject - Nachricht von $name", "$messageResponse_to", implode("\r\n", $headerResponse_to));
    if ($success) {
        http_response_code(200); #200=okay
        echo "Danke für Ihre Kontaktaufnahme, $name. Wir werden uns so schnell wie möglich bei Ihnen melden.";
    } else {
        http_response_code(500); #500=internal server error
        echo "Es tut mir leid, aber Ihre Email wurde leider nicht gesendet.";
        exit;
    }
  }
} else {
  http_response_code(403); #403=forbidden
  echo "Es gab ein internes Problem, bitte versuchen Sie es erneut.";
}
?>
