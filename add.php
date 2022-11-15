<?php 
		$con = mysqli_connect("sql109.epizy.com","epiz_33000611","1fmExXtoBKMTJ","epiz_33000611_wedding"); 
		$nama = $_POST["nama"];
		$ucapan = $_POST["ucapan"];
		$kehadiran = $_POST["kehadiran"];
		
		$q = "INSERT INTO buku_tamu VALUES ('','$nama','$ucapan','$kehadiran')";
		$result = mysqli_query($con,$q);

		echo json_encode($result); 
?>