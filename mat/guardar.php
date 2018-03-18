
<?php
	//conectamos Con el servidor
	$conectar=@mysql_connect('localhost','root','');
	//verificamos la conexion
	if(!$conectar){
		echo"No Se Pudo Conectar Con El Servidor";
	}else{

		$base=mysql_select_db('matfra');
		if(!$base){
			echo"No Se Encontro La Base De Datos";			
		}
	}
	//recuperar las variables
	$nombre=$_POST['nombre'];
	$rfc=$_POST['rfc'];
	$telefono=$_POST['telefono'];
	$correo=$_POST['correo'];
	$pago=$_POST['Pago'];
	$vigencia=$_POST['Vigencia'];
	$producto=$_POST['producto'];
	$nivel=$_POST['nivel'];
    

	//hacemos la sentencia de sql
	$sql="INSERT INTO datos VALUES('$nombre',
	                                '$rfc',
	                                '$telefono',
								    '$correo',
								    '$pago',
								    '$vigencia',
								    '$producto',
								    '$nivel')";
	//ejecutamos la sentencia de sql
	$ejecutar=mysql_query($sql);
	//verificamos la ejecucion
	if(!$ejecutar){
		echo"Hubo Algun Error";
	}else{
		echo"Datos Guardados Correctamente<br><a href='index.html'>Volver</a>";
	}
?>