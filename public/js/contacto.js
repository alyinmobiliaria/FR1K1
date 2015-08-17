//AQUÍ ENCONTRARÁS EL JAVASCRIPT NECESARIO PARA VALIDAR LA INFO DE LOS INPUT DEL FORM DE CONTACTO

//Funciones de prueba para ver si funcionan los input en el form
function contactameBtn()
{
	document.btncontacto.reset();
} 
function contactameForm()
{
	//Vamos a darle al form el poder de submit a través de javascript
	document.getElementById("form").submit();
	//Creamos la varible verificar con el boleano true, para que la función contactameForm, tenga este valor por defecto.
	var verificar = true;
	//Así se definen las expresiones regionales en javascript, para poder tener un standar al validar la info de Input
	var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚú\s]+$/;
	var expRegEmail=/^[\w- \.]+@([\w- ]+\.)+[\w- ]{2,4}$/;
	//Creamos las variables con los id de cada input, para llamarlas en los condicionales, sin necesidad de escribir getElementById
	var nombre = document.getElementById("nombre");
	var correo = document.getElementById("correo");
	var telefono = document.getElementById("telcel");
	var asunto = document.getElementById("asunto");
	var mensaje = document.getElementById("mensaje");

	//Desde aquí comenzamos con las condicionales que validan la información de cada imput
	//Empezamos con el input nombre:
	// Si nombre esta vacio o no tiene ningún valor (!), entonces la función verificar es falsa y lleva al usuario o le indica con el focus, que debe rellenar
        if(!nombre.value)
        {
                alert("El campo Nombre es requerido");
                nombre.focus();
                verificar = false;
        }
        else if(!expRegNombre.exec(nombre.value))
        {
                alert("El campo Nombre solo acepta Letras y espacios en blanco");
                nombre.focus();
                verificar = false;
        }
	//Sigue el correo:
	// Si correo esta vacio o no tiene ningún valor (!), entonces la función verificar es falsa y lleva al usuario o le indica con el focus, que debe rellenar
        if(!correo.value)
        {
                alert("El campo Correo es requerido");
                correo.focus();
                verificar = false;
        }
        else if(!expRegEmail.exec(correo.value))
        {
                alert("El campo Correo no es del tipo example@tudominio.algo");
                correo.focus();
                verificar = false;
        }

// 	//Sigue el telcel:
// 	// Si telcel esta vacio o no tiene ningún valor (!), entonces la función verificar es falsa y lleva al usuario o le indica con el focus, que debe rellenar
		else if(!telcel.value)
		{
			alert("Este campo Tel/Cel es requerido");
			telcel.focus();
			verificar = false;
		}
		//Si el usuario esta no está usando los caracteres validos o definidos en la expresión regional para telcel, entonces le vota un alerta diciendole la manera adecuada de rellenar, e indicandole con el focus y dandole a verificar un false 
		else if(isNaN(telcel.value)) //Is Not a Number
		{
			alert("No es un número Fijo o de Whatsapp valido");
			telcel.focus();
			verificar=false;
		}
		else if (telcel.value < 7)
			{
				alert("El numero de whatsapp debe tener minimo 7 digitos y máximo 20");
				telcel.focus();
				verificar=false;
			}
// //Sigue el Asunto:
// 	// Si asunto esta vacio o no tiene ningún valor (!), entonces la función verificar es falsa y lleva al usuario o le indica con el focus, que debe rellenar
		if(!asunto.value)
		{
			alert("Este campo Asunto es requerido");
			asunto.focus();
			verificar = false;
		}
		//Si el usuario esta no está usando los caracteres validos o definidos en la expresión regional para asunto, entonces le vota un alerta diciendole la manera adecuada de rellenar, e indicandole con el focus y dandole a verificar un false 
		else if(!expRegNombre.exec(asunto.value))
		{
			alert("Usa solo palabras para tu Asunto");
			asunto.focus();
			verificar=false;
		}

	//Sigue el Mensaje
		// Si mensaje esta vacio o no tiene ningún valor (!), entonces la función verificar es falsa y lleva al usuario o le indica con el focus, que debe rellenar
		if(!mensaje.value)
		{
			alert("El campo Mensaje es requerido");
			mensaje.focus();
			verificar = false;
		}
		//Si el usuario esta no está usando los caracteres validos o definidos, entonces le vota un alerta diciendole la manera adecuada de rellenar, e indicandole con el focus y dandole a verificar un false 
		else if(mensaje.value.length > 255)
		{
			alert("El Mensaje tiene más de 255 caracteres");
			mensaje.focus();
			verificar=false;
		}
	
	//El formulario solo se va a procesar si en las validaciones de los input, son verdaderas y se cumplen las condiciones
	if(verificar)
	{
		alert("Se envio el formulario")
		document.Contacto-form.submit();
	}
}
window.onload = function()
{
	var botonContactame;
	//Para encontrar este boton dentro del documento html, podemos hacer de dos maneras:
	//1) A través de su id
	botonContactame = document.getElementById("contactame");
	botonContactame.onclick = contactameForm;
	//2) A través de la ruta en documento, es decir: Primero mencionamos el nombre (no id) del contenedor y después el nombre (no id) del botón
	// botonContactame = document.Contacto-formContainer.btnenviar;
	// botonContactame.onclick = contactameForm;
}