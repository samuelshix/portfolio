<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $message = $_POST['subject'];
    $mailFrom = $_POST['mailFrom'];

    $mailTo = "samshi@iu.edu";
    $headers = "From: ".$mailFrom;
    $txt = "You have received a message from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend")
}