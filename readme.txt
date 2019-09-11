
-- AUTOR: Greivin Rodriguez Atencio UNIVERSIDAD NACIONAL CR
-- YEAR: 2019


Instrucciones de instalación

Instalación y configuración en el servidor (backend):
	-Se debe crear 2 carpetas externas
		.La primera debe llamarse lab3_frontend y pegar todos los
		 los archivos que estan el la carpeta lab3crud_frontend.
		.Luego solo copiar toda la carpeta lab3crud en el servidor
		
		NOTA: Ambas carpetas deben estar al mismo nivel de directorio.

	-Una vez creada las carpetas se debe crear la base de datos en el 
	 servidor, es script de base de datos lo encontramos con el nombre 
	 de bd_news.sql
		.Se debe crear un usuario y contraseña o actualizar el archivo de 
		coneccion a base a datos, del API de CodeIgniter.
	 
	-Configuracion del archivo de coneccion a Mysql
		.Ir a la ruta del backend " lab3crud\application\config " una vez ahi
		modificar el archivo database.php 
			->Ir a la ultima parte y modificar:
			
			'hostname' => '',
			'username' => '',
			'password' => '',
			'database' => '',
			
			-> Con respecto a los datos del servidor.


Instalación y configuración en el cliente (frondend):
	-El frondend se encuentra en la carpeta lab3crud_frondend la cual en el 
	servidor debe llamarse lab3_frontend
	-El unico archivo que debe modificarse esta en la carpeta js
		.Modificamos el app.js
			->Se modifica la linea 3 var BaseApiUrl = "https://AQUI-VA-EL-NOMBRE-DEL-SERVIDOR-PROPIO/lab3crud/index.php/api/news/";
			->Se modifica la linea y ya estaria funcionando
			->
			
			
			

Demo del frondend:			
https://sistemavacunas.000webhostapp.com/lab3_frontend/

El demo de la apk esta en el mismo repositorio (se debe instalar en la tarjeta principal del dispositivo movil)
,ademas se actualiza sin recargarse la pagina por medio del WebSocket.


Dudas o consultas con gusto al correo
grey-roat@hotmail.com



