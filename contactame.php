<?php
	$destino="fr1k1mw@gmail.com";
	$nombre = $_POST["nombre"];
	$correo = $_POST["correo"];
	$telefono = $_POST["telefono"];
	$asunto = $_POST["asunto"];
	$mensaje = $_POST["mensaje"];
	$contenido = "nombre: " . $nombre . "\nCorreo" . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
	mail($destino, $asunto, $contenido);
	header("index.html");
?>