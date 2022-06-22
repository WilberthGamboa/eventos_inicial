var pendientes = new Array();
pendientes[0] = ["T&iacute;tulo", "Fecha", "Descripci&oacute;n"];

const leerPendientes = () =>{
	alert("hola")
    var contador = Number(readCookie("contador"));
	for(i=0,j=contador; i<j; i++) {
		var actividad = readCookie("act_" + i);
		var actividades = actividad.split('|');
		pendientes.push([actividades[0], actividades[1], actividades[2]])
	}
	
}

function insertarPendientes (){

    var i,j;
	var cadena;
	
	cadena="<table border>";
	for(i=0,j=pendientes.length; i<j; i++) {
		cadena += "<tr>";
		cadena += "<td>" + pendientes[i][0] + "</td>";
		cadena += "<td>" + pendientes[i][1] + "</td>";
		cadena += "<td>" + pendientes[i][2] + "</td>";
		cadena += "</tr>";
	}
	cadena += "</table>";
	document.getElementById("pendientes").innerHTML = cadena;

}

