<?php 
	$destino = "fr1k1wm@gmail.com";
	$correo = $_POST["E-Mail"];
	$contenido = "E-Mail: " . $correo;
	mail($destino, $contenido);
?>