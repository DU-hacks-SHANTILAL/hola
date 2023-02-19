<?php
  $name = $_POST['name'];
  $uname = $_POST['username'];
  $pasw = $_POST['password'];
  $mail = $_POST['email'];
  $phone = $_POST['phone'];
  $age = $_POST['age'];
  $dob = $_POST['dob'];
  $gender = $_POST['gender'];
  // $terms = $_POST['terms'];

  // echo "$name <br>";
  // echo "$uname <br>";
  // echo "$pasw <br>";
  // echo "$mail <br>";
  // echo "$phone <br>";
  // echo "$age <br>";
  // echo "$dob <br>";
  // echo "$gender <br>";
  // echo "$terms <br>";
  $conn = mysqli_connect("localhost","root","","hola");

  $querry = "INSERT INTO `signup`(`Name`, `User_Name`, `Password`, `Email`, `Phone`, `Age`, `DOB`, `Gender`) VALUES ('$name','$uname','$pasw','$mail','$phone','$age','$dob','$gender')";

  $insert = mysqli_query($conn,$querry);

  if($insert){
    echo "Data Inserted Successfully.";
    // echo "<a href="chat.html/"> abc</a>":
    header("location:signin.html");
  }
  else{
    echo"There is some error";
  }
?>