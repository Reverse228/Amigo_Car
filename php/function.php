<?php
  include 'connectDB.php';


  function getValSql($table, $name){
    global $connection;

    $result      = mysqli_query($connection, "SELECT * FROM `$table`");
    $retResult   = [];
    $i           = 0;

    while (($record = mysqli_fetch_assoc($result))) {
      $retResult[$i] = $record[$name];
      $i++;
    }
    return $retResult;
  }

  function getValSqlWhere($table, $name, $whereName, $whereValue){
    global $connection;

    $result      = mysqli_query($connection, "SELECT * FROM `$table` WHERE $whereName = $whereValue");
    $retResult   = [];
    $i           = 0;

    while (($record = mysqli_fetch_assoc($result))) {
      $retResult[$i] = $record[$name];
      $i++;
    }
    return $retResult;
  }

  function getData($dataNameJs){
      $dataName = !empty($_GET[$dataNameJs]) ? $_GET[$dataNameJs] : " " ;
      return $dataName;
  }
 ?>
