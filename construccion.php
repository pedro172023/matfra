<?php
$construction = TRUE;

if($construction){        
echo "<h1>En Construccion<h1/>";
echo 'prueba';
}
else{
Header( "HTTP/1.1 301 Moved Permanently" );
Header( "Location: web/" );
}
?>