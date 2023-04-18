<?php
// Email settings
$to = 'mike.dev@skiff.com';
$subject = 'New message from website';
$message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
$message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
$message .= 'Message: ' . $_POST['message'];

// SendGrid API key
$apiKey = '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';

// SMTP configuration
$smtp = array(
    'host' => 'smtp.sendgrid.net',
    'port' => 587,
    'auth' => true,
    'username' => 'apikey',
    'password' => $apiKey
);

// Create a new PHPMailer instance
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer();

// SMTP configuration
$mail->isSMTP();
$mail->Host = $smtp['host'];
$mail->Port = $smtp['port'];
$mail->SMTPAuth = $smtp['auth'];
$mail->Username = $smtp['username'];
$mail->Password = $smtp['password'];

// Email content
$mail->setFrom($_POST['email'], $_POST['name']);
$mail->addAddress($to);
$mail->Subject = $subject;
$mail->Body = $message;

// Send email and check for errors
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message sent successfully.';
}
?>

