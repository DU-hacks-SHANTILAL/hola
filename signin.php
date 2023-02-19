<?php
  $name1 = $_POST['name'];
  $uname1 = $_POST['username'];
  $pasw1 = $_POST['password'];
  
  

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

//   $querry = "INSERT INTO `signin`(`Name`, `User_Name`, `Password`) VALUES ('$name1','$uname1','$uname1')";
    $querry = "SELECT * FROM `signup`WHERE User_Name = '$uname1'";
    
    $res = mysqli_query($conn,$querry);

    
    if($res){
      while($row=mysqli_fetch_array($res)){
        if($pasw1 == $row['Password'] && $uname1 == $row['User_Name']){
          header("location:chat.html");
        }
        else{
          header("location:signinalert.html");
          // echo"There is some error";
        }
      }
    }
    else{
        echo"There is some error";
        // header("location:signinalert.html");

    }

//   if($insert){
//     echo "Data Inserted Successfully.";
//     // echo "<a href="chat.html/"> abc</a>":
//     header("location:chat.html");
//   }
//   else{
//     echo"There is some error";
//   }
?>