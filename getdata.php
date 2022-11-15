<?php
	$con = mysqli_connect("sql109.epizy.com","epiz_33000611","1fmExXtoBKMTJ","epiz_33000611_wedding"); 
	$query = "SELECT * FROM buku_tamu ORDER BY id desc" ;
	$data = mysqli_query($con,$query);
	$rows=array();
	while($row = mysqli_fetch_assoc($data)){
		$rows[] = $row;
	}
	echo json_encode($rows);
?>