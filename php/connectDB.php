<?php
$connection = mysqli_connect('db.fast.md', 'c221_amigo', 'n@Z8cwWzXWSmk', 'c221_amigo');

if (!$connection -> set_charset("utf8")) {
  print("Error");
}

  if ($connection == false) {
      echo 'ERROR!! <br>';
      echo mysqli_connect_error();
      exit();
  }
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
?>
