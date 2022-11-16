<?php
	$con = mysqli_connect("localhost","root","","wedding");  
	$query = "SELECT * FROM buku_tamu ORDER BY id desc" ;
	$data = mysqli_query($con,$query);
	$rows=array();
	while($row = mysqli_fetch_assoc($data)){
		$rows[] = $row;
	}
	echo json_encode($rows);
?>