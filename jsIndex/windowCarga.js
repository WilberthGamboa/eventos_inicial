
window.onload = (event) => {
  
    
   
    leerPendientes();
	insertarPendientes();
	document.getElementById("imprimir").onclick = function () { window.print() };
	document.getElementById("agregar").onclick = function () { verVentana("agregar.html") };	
	document.getElementById("reiniciar").onclick = function () {
			pendientes = [];
			pendientes[0] = ["T&iacute;tulo", "Fecha", "Descripci&oacute;n"];
			insertarPendientes();
            eraseCookie();
		};
		
	//verReloj();
   };

 
   