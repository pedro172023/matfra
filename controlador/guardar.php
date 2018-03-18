<?php
require 'conexion.php';
//Primero, arranca el bloque PHP y checkea si el archivo tiene nombre.  Si no fue asi, te remite de nuevo al formulario de inserción:
// No se comprueba aqui si se ha subido correctamente.
if (empty($_FILES['imagen']['name'])){
header("location: registro.html?proceso=falta_indicar_fichero"); //o como se llame el formulario ..
exit;
}

//establece una conexión con la base de datos.
// archivo temporal (ruta y nombre).
$binario_nombre_temporal=$_FILES['imagen']['tmp_name'] ;

// leer del archvio temporal .. el binario subido.
// "rb" para Windows .. Linux parece q con "r" sobra ...
$binario_contenido = addslashes(fread(fopen($binario_nombre_temporal, "rb"), filesize($binario_nombre_temporal)));

// Obtener del array FILES (superglobal) los datos del binario .. nombre, tabamo y tipo.
$binario_nombre=$_FILES['imagen']['name'];
$binario_peso=$_FILES['imagen']['size'];
$binario_tipo=$_FILES['imagen']['type'];

//insertamos los datos en la BD.
//$consulta_insertar = "INSERT INTO archivos (id, archivo_binario, archivo_nombre, archivo_peso, archivo_tipo) VALUES ('', '$binario_contenido', '$binario_nombre', '$binario_peso', '$binario_tipo')";
$nombre=$_POST['nombre'];
$dir=$_POST['dir'];
$tel=$_POST['telefono'];
$rfc=$_POST['rfc'];
$correo=$_POST['correo'];
$pago=$_POST['pago'];
$vigencia=$_POST['vigencia'];
$nombrep=$_POST['nombrep'];

$sql="INSERT INTO empresa('rfc', 'nombre', 'dir', 'tel', 'correo', 'logo') VALUES('$rfc','$nombre','$dir','$tel','$correo','$binario_contenido','$binario_tipo','$binario_nombre')";
$sql2="INSERT INTO pagos('idpa','pago','vigencia') VALUES('','$pago','$vigencia')";

mysqli_query($link,$sql) or die(mysqli_error($link));
header("location: registro.html?value=empresa");  // si ha ido todo bien
exit;
 ?>