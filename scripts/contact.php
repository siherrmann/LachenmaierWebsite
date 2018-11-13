if (isset($_POST['send']) && !empty($POST['send'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $nachricht = $_POST['nachricht'];
  $secretkey = '6LcKjHoUAAAAAMVyhwFE6OuLtXsGqCdEViFgyIma';

  $antwortJSON = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.       $secretkey.'&response='.$_POST['g-recaptcha-response']);
  $antwortDaten = json_decode($antwortJSON);

  if($antwortDaten->success){
    mail("info@lachenmaier.org", "$subject - Nachricht von $name", $nachricht, "From: $email");

    // Betreff
    $betreff = 'Vielen Dank für Ihre Nachricht';

    // Nachricht
    $nachricht = 'Vielen Dank für Ihre Nachricht, wir werden uns schnellstmöglich bei Ihnen melden.';

    <!-- // für HTML-E-Mails muss der 'Content-type'-Header gesetzt werden
    $header[] = 'MIME-Version: 1.0';
    $header[] = 'Content-type: text/html; charset=iso-8859-1'; -->

    // zusätzliche Header
    $header[] = 'To: $email';
    $header[] = 'From: Lachenmaier Werkzeugbau GmbH <info@lachenmaier.org>';

    // verschicke die E-Mail
    mail($email, $betreff, $nachricht, implode("\r\n", $header));
  }
}
