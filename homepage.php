<?php
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    // $dob=$_POST['dob'];
    // $gender=$_POST['gender'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    $password=$_POST['password'];

    //Connection
    $conn=new mysqli('localhost','root','','formdb');
    if($conn->connect_error){
        die('Connection failed:'.$conn->connect_error);
    }
    else{
        $stmt=$conn->prepare("insert into registration (fname,lname,phone,email,password) values(?,?,?,?,?)");
        $stmt->bind_param("sssiss",$fname,$lname,$dob,$phone,$email,$password);
        $stmt->execute();
        echo "Sucessfully";
        $stmt->close();
        $conn->close();
    }
?>