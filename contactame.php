<?php
$form_nombre = $_POST['nombre'];
$form_correo = $_POST['correo'];
$form_telefono = $_POST['telefono'];
$form_asuto = $_POST['asunto'];
$form_mensaje = $_POST['mensaje'];

$mail_para = 'david@pixl88.com';
$mail_asunto = 'prueba';
$mail_mensaje =
  '
  <div style="width:100%;
            margin:0 auto 0 auto;
            font-family: Helvetica neue;
            color:rgb(99,100,103);
            ">
    <div style="background:rgb(29,66,138);
               display:block;
               color:#FFF;
               text-align:left;
               padding:20px;
               font-size:25px;
               ">logo</div>
    <div style="padding:15px;">
      <table border="0"  width="100%">
        <tr>
          <td style="padding:10px;">
            <strong>Nombre</strong><br/>
            '.$form_nombre.'
           </td>
        </tr>
        <tr>
          <td style="padding:10px;">
            <strong>Correo</strong><br/>
             '.$form_correo.'
          </td>
        </tr>
        <tr>
          <td style="padding:10px;">
            <strong>Teléfono</strong><br/>
              '.$form_telefono.'
          </td>
        </tr>
        <tr>
          <td style="padding:10px;">
            <strong>Mensaje</strong><br/>
            '.$form_mensaje.'
          </td>
        </tr>
      </table>
    </div>
  </div>
  ';

  $headers = "From: $from_nombre <$form_correo>\r\n"; //Quien envia?
  $headers .= "X-Mailer: PHP5\n";
  $headers .= 'MIME-Version: 1.0' . "\n";
  $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

  if($form_correo != '' && $form_mensaje != ''){
    mail($mail_para,$mail_asunto,$mail_mensaje,$headers);
      echo 'Mensaje enviado ';
  }else{
   	echo 'Hay un problema en el envio';
  }
?>
