
window.onload = (event) => {

    document.getElementById("cerrar").onclick = function () { window.close() }
	document.getElementById("agregar").onclick= function () {
        
        var cadena1 = document.getElementById("titulo").value;
			if(cadena1 == "") {
				alert("Debe proporcionar el título");
				document.getElementById("titulo").focus();
				return false;
			}
           var  cadena2 = document.getElementById("fecha").value;
          
			if(!esFecha(cadena2)) {
				alert("Debe proporcionar una fecha válida");
				document.getElementById("fecha").focus();
				return false;
			}
			var tamanio=document.getElementsByName("duracion").length;
            var arreglo = document.getElementsByName("duracion");
			for(i=0, j=tamanio; i<j; i++) {
            

              
				if(arreglo[i].checked) break;
			}
			if(i==j) {
				alert("Debe seleccionar una duración");
				arreglo[i].focus();
				return false;
			}

            var cadena3 = document.getElementById("descripcion").value;
			agregarActividad(cadena1, cadena2, cadena3);
			
			var contador = Number(readCookie("contador"));
			newCookie("act_" + contador,
					cadena1 + "|" +
					cadena2 + "|" +
					cadena3
					);
			newCookie("contador", contador+1);

		}

      
   
};


const agregarActividad = (titulo, fecha, descripcion) => {
   
	
    window.opener.pendientes.push([titulo, fecha, descripcion]);
    var x = localStorage.length;
    myObj = {name:titulo,age: fecha, city:descripcion};
    myJSON =JSON.stringify(myObj);
    localStorage.setItem("testJSON"+x, myJSON);
    
	window.opener.insertarPendientes();
//localStorage.getItem("testJSON");

}
