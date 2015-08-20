<?php
	$destino = "fr1k1wm@gmail.com";
	$nombre = $_POST["nombre"];
	$correo = $_POST["correo"];
	$telefono = $_POST["telefono"];
	$asunto = $_POST["asunto"];
	$mensaje = $_POST["mensaje"];
	$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTel/Cel: " . $telefono . "\nMensaje: " . $mensaje;
	mail($destino,"Contacto", $contenido);
?>